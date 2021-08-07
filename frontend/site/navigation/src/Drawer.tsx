import React from 'react'
import { Box, Column, Row, Layout } from '@ui/layout'
import { Drawer as UIDrawer } from '@ui/navigation'
import { NextNavLink as NavLink, SocialLink } from '@ui/link'

export const Drawer = ({ items = [] }) => (
  <Box display={['flex', 'none', 'none']}>
    <UIDrawer>
      <Column fill>
        <Layout grow={1}>
          <Column>
            <Layout basis={50} />
            {items.map(item => (
              <Layout key={item.id}>
                <NavLink href={item.url}>{item.label}</NavLink>
              </Layout>
            ))}
          </Column>
        </Layout>
        <Layout>
          <Row justify='space-between'>
            <Layout>
              <SocialLink
                href='https://epochcrysis.bandcamp.com/'
                type='band'
              />
            </Layout>
            <Layout>
              <SocialLink
                href='https://itunes.apple.com/ru/artist/epoch-crysis/519167272'
                type='itunes'
              />
            </Layout>
            <Layout>
              <SocialLink
                href='https://open.spotify.com/artist/0HS2sJkhXJT6bNmpqnOfU8?si=TEHFwf0RTMiTpO_L_IaEUw'
                type='spotify'
              />
            </Layout>
            <Layout>
              <SocialLink
                href='https://music.yandex.ru/artist/3399274'
                type='yandex'
              />
            </Layout>
            <Layout>
              <SocialLink
                href='https://music.youtube.com/channel/UCvlWnTig-VQqizKuwewuxpw'
                type='youtube'
              />
            </Layout>
            <Layout>
              <SocialLink
                href='https://play.google.com/store/music/artist/Epoch_Crysis?id=Anapogwmahrztmemuh2ccdsncr4'
                type='google'
              />
            </Layout>
          </Row>
        </Layout>
      </Column>
    </UIDrawer>
  </Box>
)
