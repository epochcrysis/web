import { Link } from 'react-router-dom'
import { withNavLink } from '@ui-parts/react-router'
import { Link as UILink } from './Link'
import { NavLink as UINavLink } from './NavLink'

export const RouteLink = UILink.withComponent(Link)
export const RouteNavLink = withNavLink(UINavLink.withComponent(Link))
