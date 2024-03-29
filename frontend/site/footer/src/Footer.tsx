import React from 'react'
import { Box, Row, Layout } from '@ui/layout'
import { TorinasakuraIcon, ArrowUpIcon } from '@ui/icons'

export const Footer = () => (
  <Box
    width='100%'
    height='200px'
    alignItems='center'
    backgroundColor='#33353b'
    justifyContent={['initial', 'initial', 'center']}
  >
    <Box width={['100%', '100%', '1024px']} height='60px'>
      <Row justify='space-between'>
        <Layout pl={['30px', '30px', '40px']}>
          <a href='https://torinasakura.name/' target='_blank'>
            <TorinasakuraIcon width='60px' height='60px' fill='#FFF' />
          </a>
        </Layout>
        <Layout align='center' pr={['30px', '50px', '100px']}>
          <ArrowUpIcon width='30px' height='30px' fill='#FFF' />
        </Layout>
      </Row>
    </Box>
  </Box>
)
