import React, { useContext, useRef, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import styled from '@emotion/styled'
import { DrawerContext } from './DrawerContext'
import DragDrawer from 'react-drag-drawer'
import { css } from 'emotion'

interface DrawerProps {
  show: boolean
}

const Container = css`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
`

const StyledDrawer = styled.div<DrawerProps>(() => ({
  width: '100%',
  height: '100%',
  padding: '60px 30px 30px',
  boxSizing: 'border-box',
}))

export const Drawer = ({ children }) => {
  const node = useRef(null)
  const { show, setShow } = useContext(DrawerContext)

  useEffect(() => {
    if (show && node.current) {
      disableBodyScroll(node.current)
    } else if (node.current) {
      enableBodyScroll(node.current)
    }
  }, [show])

  return (
    <DragDrawer
      open={show}
      direction='right'
      modalElementClass={Container}
      onRequestClose={() => {
        setShow(!show)
      }}
    >
      <StyledDrawer ref={node} show={show}>
        {children}
      </StyledDrawer>
    </DragDrawer>
  )
}
