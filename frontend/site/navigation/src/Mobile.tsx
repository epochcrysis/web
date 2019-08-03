import React, { useState } from 'react'
import { Navigation, Drawer, Hamburger } from '@ui/navigation'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Link } from '@ui/link'

export const Mobile = ({ offset }) => {
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
      <Drawer show={showDrawer}>Something for check</Drawer>
    </Box>
  )
}
