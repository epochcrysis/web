import React from 'react'
import App, { Container } from 'next/app'
import { withProviders } from '../providers'
import { Seo } from '@common/Wordpress'

class SiteApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Seo />
        <Component {...this.props} />
      </Container>
    )
  }
}

export default withProviders(SiteApp)
