import { ifProp } from 'styled-tools'
import styled from '@emotion/styled'
import { Link } from './Link'

interface NavLinkProps {
  active?: boolean
}

export const NavLink = styled(Link, {
  shouldForwardProp: prop => !['active'].includes(prop),
})<NavLinkProps>(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    fontSize: '13px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000000',
    fontWeight: 500,
    opacity: 0.7,
    '&:after': {
      position: 'absolute',
    },
    '&:focus': {
      opacity: 1,
    },
    '&:hover': {
      opacity: 1,
    },
    '&:active': {
      opacity: 1,
    },
  },
  ifProp('active', ({ theme }: any) => ({
    opacity: 1,
    '&:after': {
      content: '" "',
      right: 0,
      bottom: 0,
      left: 0,
      height: 2,
      background: '#D22035',
    },
  }))
)
