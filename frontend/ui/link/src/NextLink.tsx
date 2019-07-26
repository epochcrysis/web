import React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import { NavLink } from './NavLink'
import { Link } from './Link'

interface NextLinkProps {
  href: string
  children: any
}

export const NextLink = withRouter(
  ({ router, href, children, ...props }: WithRouterProps & NextLinkProps) => (
    <Link
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
