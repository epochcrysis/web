import React from 'react'
import { Navigation } from '@ui/navigation'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Link } from '@ui/link'
import { useWindowSize } from '@ui-parts/use-window-size'

export const Desktop = ({ offset }) => (
  <Box display={['none', 'flex', 'flex']} width='100%'>
    <Navigation topOffset={offset}>
      <Row align='center' justify='space-between'>
        <Layout basis='40px' />
        <Layout>
          <Link href='/'>
            <LogoIcon width='300px' height='86px' />
          </Link>
        </Layout>
        <Layout grow={1} />
        <Layout />
        <Layout basis='40px' />
      </Row>
    </Navigation>
  </Box>
)
