import React from 'react'
import { Link, NextNavLink as NavLink } from '@ui/link'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'

export const Desktop = ({ color = 'black', items = [] }) => (
  <Box width='100%' display={['none', 'flex', 'flex']}>
    <Row justify='space-between'>
      <Layout basis='40px' />
      <Layout>
        <Link href='/'>
          <LogoIcon width='300px' height='86px' color={color} />
        </Link>
      </Layout>
      <Layout basis='40px' />
      <Layout grow={1} justify='center'>
        {items.map(item => (
          <NavLink href={item.url} key={item.id} color={color}>
            {item.label}
          </NavLink>
        ))}
      </Layout>
      <Layout basis='40px' />
      <Layout grow={1} />
      <Layout />
      <Layout basis='40px' />
    </Row>
  </Box>
)
