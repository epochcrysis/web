import React from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

interface DrawerProps {
  show: boolean
}

const StyledDrawer = styled.div(() => ({
  position: 'fixed',
  width: '100%',
  height: '100%',
}))

const Menu = styled.div<DrawerProps>(
  () => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    padding: '60px 30px 30px',
    boxSizing: 'border-box',
    transition: 'all 0.5s ease',
    transform: 'scale(0.85)',
    zIndex: 0,
  }),
  ifProp(
    { show: true },
    {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 10,
    }
  )
)

export const Drawer = ({ children, show }) => (
  <StyledDrawer>
    <Menu show={show}>{children}</Menu>
  </StyledDrawer>
)
