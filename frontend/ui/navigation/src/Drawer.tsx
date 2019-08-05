import React, { useContext, useRef, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { DrawerContext } from './DrawerContext'

interface DrawerProps {
  show: boolean
}

const StyledDrawer = styled.div<DrawerProps>(
  () => ({
    position: 'fixed',
    width: '100%',
    height: '100%',
    opacity: 0,
    padding: '60px 30px 30px',
    boxSizing: 'border-box',
    transition: 'all 0.5s ease',
    transform: 'scale(0.85)',
    zIndex: 0,
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 1)',
  }),
  ifProp(
    { show: true },
    {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 10,
      overflow: 'hidden',
    }
  )
)

export const Drawer = ({ children }) => {
  const node = useRef(null)
  const { show } = useContext(DrawerContext)

  useEffect(() => {
    if (show && node.current) {
      disableBodyScroll(node.current)
    } else if (node.current) {
      enableBodyScroll(node.current)
    }
  }, [show])

  return (
    <StyledDrawer ref={node} show={show}>
      {children}
    </StyledDrawer>
  )
}
