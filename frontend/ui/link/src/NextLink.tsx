import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import { NavLink } from './NavLink'
import { Link } from './Link'

interface NextLinkProps {
  width?: string | number
  color?: string
  href: string
  children: any
}

export const NextLink = withRouter(
  ({ router, href, children, ...props }: WithRouterProps & NextLinkProps) => (
    <Link
      {...props}
      href={href}
      onClick={event => {
        event.preventDefault()
        router.push(href)
      }}
    >
      {children}
    </Link>
  )
)

export const NextNavLink = withRouter(
  ({ router, href, children, ...props }: WithRouterProps & NextLinkProps) => (
    <NavLink
      {...props}
      href={href}
      active={router.pathname === href}
      onClick={event => {
        event.preventDefault()
        router.push(href)
      }}
    >
      {children}
    </NavLink>
  )
)
