import React from 'react'
import { Hamburger } from '@ui/navigation'
import { Link } from '@ui/link'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { Switcher } from '@ui/locale'
import { useLocale } from '@common/locale'

export const Mobile = ({ color = 'black' }) => {
  const { locale, supported, onChange } = useLocale()

  return (
    <Box width='100%' display={['flex', 'none', 'none']}>
      <Row>
        <Layout align='center'>
          <Hamburger color={color} />
        </Layout>
        <Layout grow={1} align='center' justify='center'>
          <Link href='/'>
            <LogoIcon width='100%' height='40px' color={color} />
          </Link>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Switcher
            locale={locale}
            supported={supported}
            onChange={onChange}
            flagSize='25px'
          />
        </Layout>
        <Layout basis='20px' />
      </Row>
    </Box>
  )
}
