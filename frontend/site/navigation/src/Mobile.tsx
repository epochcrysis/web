import React from 'react'
import { Hamburger } from '@ui/navigation'
import { Link } from '@ui/link'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'

export const Mobile = ({ color = 'black', items = [] }) => (
  <Box width='100%' display={['flex', 'none', 'none']}>
    <Row>
      <Layout align='center'>
        <Hamburger color={color} />
      </Layout>
      <Layout grow={1} align='center' justify='center'>
        <Link href='/'>
          <LogoIcon width='100%' height='60px' color={color} />
        </Link>
      </Layout>
    </Row>
  </Box>
)
