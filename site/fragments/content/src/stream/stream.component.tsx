import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

import { Link }      from './link'
import { Container } from './container'

const Stream: FC = () => {
  return (
    <Container>
      <Layout flexBasis={32} />
      <Column fill>
        <Layout flexBasis={28} />
        <Row alignItems='center'>
          <Row>
            <Text
              fontFamily='secondary'
              color='text.black'
              fontSize='regular'
              textTransform='uppercase'
            >
              Stream
            </Text>
          </Row>
          <Row>
            <Link />
            <Layout flexBasis={20} />
            <Link />
            <Layout flexBasis={20} />
            <Link />
            <Layout flexBasis={20} />
            <Link />
          </Row>
        </Row>
        <Layout flexBasis={28} />
      </Column>
      <Layout flexBasis={32} />
    </Container>
  )
}

export { Stream }
