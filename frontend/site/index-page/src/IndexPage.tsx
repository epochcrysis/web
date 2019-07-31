import React from 'react'
import { Column, Layout } from '@ui/layout'
import { Navigation } from '@site/navigation'
import { Footer } from '@site/footer'

export const IndexPage = () => (
  <StickyContainer>
    <Column>
      <Layout>
        <Navigation withTopOffset={true} />
      </Layout>
      <Layout basis='2000px' />
      <Layout>
        <Footer />
      </Layout>
    </Column>
  </StickyContainer>
)
