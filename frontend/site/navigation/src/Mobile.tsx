import React, { useState } from 'react'
import { Navigation, Drawer, Hamburger } from '@ui/navigation'
import { Row, Column, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Link, NavLink } from '@ui/link'

export const Mobile = ({ offset, items }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <Box display={['flex', 'none', 'none']} width='100%'>
      <Navigation topOffset={offset}>
        <Row>
          <Layout>
            <Hamburger active={showDrawer} onClick={setShowDrawer} />
          </Layout>
          <Layout grow={1} justify='center'>
            <Link href='/'>
              <LogoIcon width='100%' height='60px' />
            </Link>
          </Layout>
        </Row>
      </Navigation>
      <Drawer show={showDrawer}>
        <Column>
          {items.map(item => (
            <Layout key={item.id}>
              <NavLink href={item.url}>{item.label}</NavLink>
            </Layout>
          ))}
        </Column>
      </Drawer>
    </Box>
  )
}
