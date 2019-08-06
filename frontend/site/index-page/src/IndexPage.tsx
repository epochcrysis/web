import React from 'react'
import { Column, Layout } from '@ui/layout'
import { DrawerProvider } from '@ui/navigation'
import { StickyContainer } from '@ui/sticky'
import { Navigation } from '@site/navigation'
import { Footer } from '@site/footer'
import { Content } from './Content'

export const IndexPage = () => (
  <StickyContainer>
    <DrawerProvider>
      <Column>
        <Navigation withTopOffset />
        <Layout>
          <Content />
        </Layout>
        <Layout>
          <Footer />
        </Layout>
      </Column>
    </DrawerProvider>
  </StickyContainer>
)
