import React from 'react'
import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

interface DocumentProps {
  css: string
  helmet: any
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    const helmet = Helmet.renderStatic()

    return { ...page, ...styles, helmet }
  }

  constructor(props) {
    super(props)

    const { __NEXT_DATA__, ids } = props

    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render() {
    const { css } = this.props

    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetHeadComponents}
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
