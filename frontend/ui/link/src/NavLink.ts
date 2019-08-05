import { ifProp, switchProp } from 'styled-tools'
import styled from '@emotion/styled'
import { Link } from './Link'

export interface NavLinkProps {
  active?: boolean
  color?: string
}

export const NavLink = styled(Link, {
  shouldForwardProp: prop => !['active'].includes(prop),
})<NavLinkProps>(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontSize: '17px',
    textDecoration: 'none',
    color: '#2b2b2b',
    fontWeight: 400,
    padding: '0 18px',
    boxSizing: 'border-box',
    '&:focus': {
      color: '#367ff3',
      outline: 0,
    },
    '&:hover': {
      color: '#367ff3',
    },
    '&:active': {
      color: '#367ff3',
    },
    '&::first-letter': {
      textTransform: 'uppercase',
    },
    '@media (max-width: 40em)': {
      width: '100%',
      borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
      padding: '20px 0',
      fontSize: '20px',
      transition: 'all 0.5s ease',
      '&:hover': {
        opacity: 0.45,
        padding: '20px',
        color: '#2b2b2b',
      },
    },
  },
  switchProp('color', () => ({
    white: {
      color: '#ffffff',
    },
  })),
  ifProp('active', ({ theme }: any) => ({
    color: '#367ff3',
  }))
)
