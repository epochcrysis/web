import React          from 'react'
import { FC }         from 'react'

import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { Background } from './background'
import { Container }  from './container'
import { Title }      from './title'

const Cover: FC = () => {
  return (
    <Container>
      <Background src='https://epochcrysis.band/wp-content/uploads/2021/06/the-hope-still-remains-wallpaper-scaled.jpg' />
      <Row>
        <Layout flexBasis={40} />
        <Title type='single 2018' name='The Hope Still Remains' />
      </Row>
      <Layout flexBasis={40} />
    </Container>
  )
}

export { Cover }
