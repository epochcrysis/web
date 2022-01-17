import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Text }       from '@ui/text'

import { TitleProps } from './title.interface'

const Title: FC<TitleProps> = ({ type, name }) => {
  return (
    <Box>
      <Column>
        <Row>
          <Text
            fontFamily='secondary'
            textTransform='uppercase'
            color='text.transparentWhite'
            fontSize='regular'
          >
            {type}
          </Text>
        </Row>
        <Layout flexBasis={16} />
        <Row>
          <Text color='text.white' fontSize='giant'>
            {name}
          </Text>
        </Row>
      </Column>
    </Box>
  )
}

export { Title }
