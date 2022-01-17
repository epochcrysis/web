import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const Video: FC = () => {
  return (
    <Box>
      <Column>
        <Row>
          <Text fontFamily='secondary' color='text.transparentWhite' textTransform='uppercase'>
            {/* TODO localize */}
            Video
          </Text>
        </Row>
        <Layout flexBasis={40} />
        <Box width={640} height={360} backgroundColor='gray' />
      </Column>
    </Box>
  )
}

export { Video }
