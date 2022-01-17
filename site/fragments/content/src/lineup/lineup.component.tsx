import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

import { Line }   from './line'

const Lineup: FC = () => {
  return (
    <Box width='100%'>
      <Column fill>
        <Row>
          <Text fontFamily='secondary' color='text.transparentWhite' textTransform='uppercase'>
            {/* TODO localize */}
            Lineup
          </Text>
        </Row>
        <Layout flexBasis={40} />
        <Line speciality={'test'} names={['Asdfsdf sdfsdf', 'AEfesfsf seSFFEFESF']} />
        <Line speciality={'test'} names={['Asdfsdf sdfsdf']} />
        <Line speciality={'test'} names={['Asdfsdf sdfsdf', 'AEfesfsf seSFFEFESF']} />
      </Column>
    </Box>
  )
}

export { Lineup }
