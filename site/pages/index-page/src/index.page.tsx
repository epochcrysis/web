import React       from 'react'

import { Row }     from '@ui/layout'
import { Cover }   from '@site/cover-fragment'
import { Content } from '@site/content-fragment'

const IndexPage = () => (
  <Row fill>
    <Cover />
    <Content />
  </Row>
)

export default IndexPage
