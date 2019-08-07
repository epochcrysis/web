import React from 'react'
import { Column, Layout } from '@ui/layout'
import { DrawerProvider } from '@ui/navigation'
import { StickyContainer } from '@ui/sticky'
import { Navigation } from '@site/navigation'
import { Footer } from '@site/footer'

export const BlogPage = () => (
  <StickyContainer>
    <DrawerProvider>
      <Column>
        <Navigation />
        <Layout basis={['80px', '120px', '120px']} />
        <Layout>
          <Footer />
        </Layout>
      </Column>
    </DrawerProvider>
  </StickyContainer>
)
