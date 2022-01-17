import React         from 'react'
import { FC }        from 'react'
import { Divider }   from '@atls-ui-proto/divider'

import { Condition } from '@ui/condition'
import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

import { LineProps } from './line.interface'

const Line: FC<LineProps> = ({ speciality, names }) => {
  return (
    <Box width='100%'>
      <Column fill>
        <Divider backgroundColor='background.transparentWhite' weight={1} />
        <Layout flexBasis={24} />
        <Row>
          <Column fill>
            <Row>
              <Text fontSize='increased' color='text.transparentWhite'>
                {speciality}
              </Text>
            </Row>
          </Column>
          <Column alignItems='flex-end' fill>
            {names.map((name, index) => (
              <>
                <Condition match={index !== 0}>
                  <Layout flexBasis={4} />
                </Condition>
                <Row justifyContent='flex-end'>
                  <Text fontSize='increased' color='text.white' whiteSpace='nowrap'>
                    {name}
                  </Text>
                </Row>
              </>
            ))}
          </Column>
        </Row>
        <Layout flexBasis={24} />
      </Column>
    </Box>
  )
}

export { Line }
