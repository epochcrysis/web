import React from 'react'
import { extractCritical } from 'emotion-server'
import Document, { Head, Main, NextScript } from 'next/document'

interface DocumentProps {
  css: string
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)

    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)

    const { __NEXT_DATA__, ids } = props

    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    const { css } = this.props

    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
