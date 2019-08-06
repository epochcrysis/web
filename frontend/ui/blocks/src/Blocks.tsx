import React from 'react'
import { Container } from './Container'
import { Paragraph } from './Paragraph'
import { Heading } from './Heading'
import { Columns } from './Columns'
import { Image } from './Image'
import { render } from './render'

const renderers = {
  'core/paragraph': Paragraph,
  'core/heading': Heading,
  'core/columns': Columns,
  'core/image': Image,
}

export const Blocks = ({ blocks = [] }) => (
  <Container>{render(blocks, renderers)}</Container>
)
