import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { ifProp, switchProp } from 'styled-tools'
import { DrawerContext } from './DrawerContext'

interface LineProps {
  active: boolean
  color?: string
}

interface BurgerProps {
  color?: string
}

const Container = styled.div(() => ({
  cursor: 'pointer',
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

const Burger = styled.div<BurgerProps>(
  () => ({
    width: '1.625em',
    height: '1.625em',
    margin: '-0.8125em 0 0 -0.8125em',
    padding: 0,
    top: '50%',
    left: '50%',
    transition:
      'transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1)',
    transform: 'translateZ(0)',
    boxSizing: 'border-box',
  }),
  switchProp('color', () => ({
    black: {
      color: '#000',
    },
    white: {
      color: '#ffffff',
    },
  }))
)

const Line = styled.div<LineProps>(
  () => ({
    width: '100%',
    height: '2px',
    top: '50%',
    position: 'absolute',
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
  ),
  switchProp('color', () => ({
    black: {
      backgroundColor: '#000',
    },
    white: {
      backgroundColor: '#ffffff',
    },
  }))
)

export const Hamburger = ({ color = 'black' }) => {
  const { show, setShow } = useContext(DrawerContext)
  const colorWithOverwrites = show ? 'black' : color

  return (
    <Container onClick={() => setShow(!show)}>
      <Burger color={colorWithOverwrites}>
        <Line color={colorWithOverwrites} active={show} />
        <Line color={colorWithOverwrites} active={show} />
      </Burger>
    </Container>
  )
}
