import React from 'react'
import { Column, Layout } from '@ui/layout'
import { Navigation } from '@site/navigation'
import { Footer } from '@site/footer'

export const IndexPage = () => (
  <Column>
    <Layout>
      <Navigation />
    </Layout>
    <Layout>
      <Footer />
    </Layout>
  </Column>
)
