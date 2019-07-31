import React from 'react'
import { Navigation as UINavigation } from '@ui/navigation'
import { Row, Layout } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Link } from '@ui/link'
import { useWindowSize } from '@ui-parts/use-window-size'

export const Navigation = ({ withTopOffset = false }) => {
  const { innerHeight: offset } = useWindowSize()

  return (
    <UINavigation topOffset={withTopOffset ? offset : 0}>
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
    </UINavigation>
  )
}
