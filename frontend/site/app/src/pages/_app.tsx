import React from 'react'
import App, { Container } from 'next/app'
import { withProviders } from '../providers'

class SiteApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Component {...this.props} />
      </Container>
    )
  }
}

export default withProviders(SiteApp)
