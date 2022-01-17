import React         from 'react'
import { FC }        from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'

import { Lyrics }    from './lyrics'
import { Container } from './container'
import { Video }     from './video'
import { Lineup }    from './lineup'
import { Next }      from './next'
import { Stream }    from './stream'

const Content: FC = () => {
  return (
    <Column>
      <Container>
        <Layout flexBasis={40} />
        <Layout flexBasis={200} flexShrink={0} />
        <Lyrics />
        <Layout flexBasis={80} flexShrink={0} />
        <Video />
        <Layout flexBasis={80} flexShrink={0} />
        <Lineup />
        <Layout flexBasis={80} flexShrink={0} />
        <Next type={'single'} name={'Under Control'} />
        <Layout flexBasis={80} flexShrink={0} />
        <Layout flexBasis={40} />
      </Container>
      <Stream />
    </Column>
  )
}

export { Content }
