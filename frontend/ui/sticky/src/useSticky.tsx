import {
  useContext,
  useEffect,
  useState,
  useCallback,
  CSSProperties,
} from 'react'
import { StickyContext } from './Context'

interface StickyState {
  style: CSSProperties
  isSticky: boolean
  wasSticky: boolean
  distanceFromTop: number
  distanceFromBottom: number
  calculatedHeight: number
}

const defaultOptions = {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false,
}

export const useSticky = (node, options = {}) => {
  const sticky = useContext(StickyContext)

  const [state, setState] = useState<StickyState>({
    style: {},
    isSticky: false,
    wasSticky: false,
    distanceFromTop: 0,
    distanceFromBottom: 0,
    calculatedHeight: 0,
  })

  const handleContainerEvent = useCallback(
    ({ distanceFromTop, distanceFromBottom, eventSource }) => {
      const content = node.current
      const placeholder = content.parentNode

      const props = { ...defaultOptions, ...options }

      const parent = sticky.getParent()

      let preventingStickyStateChanges = false

      if (props.relative) {
        preventingStickyStateChanges = eventSource !== parent

        distanceFromTop =
          -(eventSource.scrollTop + eventSource.offsetTop) +
          placeholder.offsetTop
      }

      const placeholderClientRect = placeholder.getBoundingClientRect()
      const contentClientRect = content.getBoundingClientRect()
      const calculatedHeight = contentClientRect.height

      const bottomDifference =
        distanceFromBottom - props.bottomOffset - calculatedHeight

      const wasSticky = !!state.isSticky
      const isSticky = preventingStickyStateChanges
        ? wasSticky
        : distanceFromTop <= -props.topOffset &&
          distanceFromBottom > -props.bottomOffset

      distanceFromBottom =
        (props.relative
          ? parent.scrollHeight - parent.scrollTop
          : distanceFromBottom) - calculatedHeight

      const style: CSSProperties = !isSticky
        ? {}
        : {
            position: 'fixed',
            top:
              bottomDifference > 0
                ? props.relative
                  ? parent.offsetTop - parent.offsetParent.scrollTop
                  : 0
                : bottomDifference,
            left: placeholderClientRect.left,
            width: placeholderClientRect.width,
          }

      if (!props.disableHardwareAcceleration) {
        style.transform = 'translateZ(0)'
      }

      setState(prevState => ({
        ...prevState,
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight,
        style,
      }))
    },
    [options]
  )

  useEffect(() => {
    sticky.subscribe(handleContainerEvent)

    return () => sticky.unsubscribe(handleContainerEvent)
  })

  return state
}
