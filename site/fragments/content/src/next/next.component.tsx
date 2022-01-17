import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import { Container }  from './container'
import { NextProps }  from './next.interface'

const Next: FC<NextProps> = ({ type, name }) => {
  return (
    <Box width='100%'>
      <Column fill>
        <Row>
          <Text fontFamily='secondary' color='text.transparentWhite' textTransform='uppercase'>
            {/* TODO localize */}
            Next
          </Text>
        </Row>
        <Layout flexBasis={40} />
        <Container>
          <Box width={70} height={70} flexShrink={0}>
            <ImageBlock width={70} height={70} src='' />
          </Box>
          <Layout flexBasis={32} />
          <Column fill>
            <Row>
              <Text fontSize='semiGiant' color='text.white'>
                {name}
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <Row>
              <Text
                fontSize='normal'
                fontFamily='secondary'
                color='text.transparentWhite'
                textTransform='uppercase'
              >
                {type}
              </Text>
            </Row>
          </Column>
        </Container>
      </Column>
    </Box>
  )
}

export { Next }
