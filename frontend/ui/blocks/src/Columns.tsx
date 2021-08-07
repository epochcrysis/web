import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { flexWrap, flexBasis } from 'styled-system'

interface DividerProps {
  last?: boolean
}

interface FlexWrapProps {
  flexWrap: string | number | string[] | number[]
}

interface FlexBasisProps {
  flexBasis: string | number | string[] | number[]
}

const Container = styled.div<FlexWrapProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
  }),
  flexWrap
)

const Column = styled.div<FlexBasisProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
  }),
  flexBasis
)

const Divider = styled.div<DividerProps>(
  ({ theme }) => ({
    display: 'flex',
    flexShrink: 0,
    flexBasis: '20px',
  }),
  ifProp('last', ({ theme }: any) => ({
    display: 'none',
  }))
)

export const Columns = ({ innerBlocks = [], render, renderers }) => (
  <Container flexWrap={['wrap', 'wrap', 'initial']}>
    {innerBlocks.map((block, index) => (
      <Fragment key={`${block.blockName}-${index}`}>
        <Column flexBasis={['100%', '100%', `${100 / innerBlocks.length}%`]}>
          {render(block.innerBlocks, renderers)}
        </Column>
        <Divider last={innerBlocks.length === index + 1} />
      </Fragment>
    ))}
  </Container>
)
