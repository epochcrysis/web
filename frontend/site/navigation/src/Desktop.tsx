import React from 'react'
import { Switcher } from '@ui/locale'
import { Link, NextNavLink as NavLink, SocialLink } from '@ui/link'
import { Row, Layout, Box } from '@ui/layout'
import { LogoIcon } from '@ui/icons'
import { useLocale } from '@common/locale'

export const Desktop = ({ color = 'black', items = [] }) => {
  const { locale, supported, onChange } = useLocale()

  return (
    <Box width='100%' display={['none', 'flex', 'flex']}>
      <Row>
        <Layout basis='40px' />
        <Layout>
          <Link href='/'>
            <LogoIcon width='300px' height='86px' color={color} />
          </Link>
        </Layout>
        <Layout basis='40px' />
        <Layout grow={1} justify='center'>
          {items.map(item => (
            <NavLink key={item.id} href={item.url} color={color}>
              {item.label}
            </NavLink>
          ))}
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Box width='100%' display={['none', 'none', 'flex']}>
            <Layout align='center'>
              <SocialLink
                href='https://epochcrysis.bandcamp.com/'
                type='band'
                color={color}
              />
            </Layout>
            <Layout align='center' pl='20px'>
              <SocialLink
                href='https://itunes.apple.com/ru/artist/epoch-crysis/519167272'
                type='itunes'
                color={color}
              />
            </Layout>
            <Layout align='center' pl='20px'>
              <SocialLink
                href='https://open.spotify.com/artist/0HS2sJkhXJT6bNmpqnOfU8?si=TEHFwf0RTMiTpO_L_IaEUw'
                type='spotify'
                color={color}
              />
            </Layout>
            <Layout align='center' pl='20px'>
              <SocialLink
                href='https://music.yandex.ru/artist/3399274'
                type='yandex'
                color={color}
              />
            </Layout>
            <Layout align='center' pl='20px'>
              <SocialLink
                href='https://music.youtube.com/channel/UCvlWnTig-VQqizKuwewuxpw'
                type='youtube'
                color={color}
              />
            </Layout>
            <Layout align='center' pl='20px'>
              <SocialLink
                href='https://play.google.com/store/music/artist/Epoch_Crysis?id=Anapogwmahrztmemuh2ccdsncr4'
                type='google'
                color={color}
              />
            </Layout>
          </Box>
        </Layout>
        <Layout basis='60px' />
        <Layout>
          <Switcher locale={locale} supported={supported} onChange={onChange} />
        </Layout>
        <Layout basis='40px' />
      </Row>
    </Box>
  )
}
