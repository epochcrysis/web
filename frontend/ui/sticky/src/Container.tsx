import React, { useContext, useRef, useEffect } from 'react'
import { StickyContext } from './Context'
import { StickyProvider } from './Provider'

const Container = props => {
  const sticky = useContext(StickyContext)
  const node = useRef(null)

  useEffect(() => {
    sticky.mount(node.current)

    return () => sticky.unmount()
  })

  return (
    <div
      {...props}
      ref={node}
      onScroll={sticky.notifySubscribers}
      onTouchStart={sticky.notifySubscribers}
      onTouchMove={sticky.notifySubscribers}
      onTouchEnd={sticky.notifySubscribers}
    />
  )
}

export const StickyContainer = ({ children }) => (
  <StickyProvider>
    <Container>{children}</Container>
  </StickyProvider>
)
