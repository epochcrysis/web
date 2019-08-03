import React from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

interface HamburgerProps {
  active: boolean
}

const Container = styled.div(() => ({
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  zIndex: 15,
  padding: '30px',
  boxSizing: 'border-box',
  width: '60px',
  height: '60px',
  '&:hover': {
    opacity: 0.45,
  },
}))

const Burger = styled.div(() => ({
  width: '1.625em',
  height: '1.625em',
  margin: '-0.8125em 0 0 -0.8125em',
  padding: 0,
  top: '50%',
  left: '50%',
  transition:
    'transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1)',
  transform: 'translateZ(0)',
  color: '#000',
  boxSizing: 'border-box',
}))

const Line = styled.div<HamburgerProps>(
  () => ({
    width: '100%',
    height: '2px',
    backgroundColor: '#000',
    position: 'absolute',
    top: '50%',
    marginTop: '-0.75px',
    transform: 'translateY(-3.75px) translateZ(0)',
    transition:
      'transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1)',
    '&:last-child': {
      transform: 'translateY(3.75px) translateZ(0)',
    },
  }),
  ifProp(
    { active: true },
    {
      transform: 'rotate(45deg) translateZ(0)',
      '&:last-child': {
        transform: 'rotate(-45deg) translateZ(0)',
      },
    }
  )
)

export const Hamburger = ({ active, onClick }) => (
  <Container onClick={() => onClick(!active)}>
    <Burger>
      <Line active={active} />
      <Line active={active} />
    </Burger>
  </Container>
)
