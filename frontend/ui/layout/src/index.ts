import styled from '@emotion/styled'
import { space, style, height, getWidth } from 'styled-system'

export * from './Box'

interface FillProps {
  fill?: boolean
}

const fill = (props: FillProps) =>
  height({ height: props.fill ? '100%' : undefined })

const getScale = (n, scale) => scale[n] || getWidth(n, scale)

const flexBasis = style({
  prop: 'flexBasis',
  alias: 'basis',
  key: 'space',
  transformValue: getScale,
})
const flexGrow = style({ prop: 'flexGrow', alias: 'grow' })
const flexWrap = style({ prop: 'flexWrap', alias: 'wrap' })
const flexShrink = style({ prop: 'flexShrink' })

const alignItems = style({ prop: 'alignItems', alias: 'align' })
const justifyContent = style({
  prop: 'justifyContent',
  alias: 'justify',
})

const shouldForwardProp = prop => !['fill', 'justify'].includes(prop)

export const Column = styled('div', { shouldForwardProp })<any>(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexWrap,
  fill,
  space
)

export const Row = styled('div', { shouldForwardProp })<any>(
  {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexWrap,
  fill,
  space
)

export interface LayoutProps {
  align?: string | string[]
  justify?: string | string[]
  basis?: string | number | string[] | number[]
  flexBasis?: string | number | string[] | number[]
  flexShrink?: number | number[]
  grow?: number
  px?: string | number | string[] | number[]
  pt?: string | number | string[] | number[]
  pl?: string | number | string[] | number[]
  pr?: string | number | string[] | number[]
}

export const Layout = styled.div<LayoutProps>(
  {
    display: 'flex',
    boxSizing: 'border-box',
  },
  alignItems,
  justifyContent,
  flexShrink,
  flexBasis,
  flexGrow,
  space
)
