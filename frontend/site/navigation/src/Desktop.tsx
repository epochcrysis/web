import React from 'react'
import { Navigation } from '@ui/navigation'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Link, NavLink } from '@ui/link'

export const Desktop = ({ offset, items }) => (
  <Box display={['none', 'flex', 'flex']} width='100%'>
    <Navigation topOffset={offset}>
      <Row justify='space-between'>
        <Layout basis='40px' />
        <Layout>
          <Link href='/'>
            <LogoIcon width='300px' height='86px' />
          </Link>
        </Layout>
        <Layout basis='40px' />
        <Layout grow={1} justify='center'>
          {items.map(item => (
            <NavLink href={item.url} key={item.id}>
              {item.label}
            </NavLink>
          ))}
        </Layout>
        <Layout basis='40px' />
        <Layout grow={1} />
        <Layout />
        <Layout basis='40px' />
      </Row>
    </Navigation>
  </Box>
)
