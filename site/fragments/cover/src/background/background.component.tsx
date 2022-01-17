import React               from 'react'
import { FC }              from 'react'
import styled              from '@emotion/styled'

import { Box }             from '@ui/layout'
import { ImageBlock }      from '@ui/image'

import { containerStyles } from './background.styles'
import { BackgroundProps } from './background.interface'

const Container = styled(Box)(containerStyles)

const Background: FC<BackgroundProps> = ({ src }) => (
  <Container>
    <ImageBlock width='100%' height='100%' src={src} />
  </Container>
)

export { Background }
