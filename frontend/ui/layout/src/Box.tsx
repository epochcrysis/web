import styled from '@emotion/styled'
import {
  maxWidth,
  minWidth,
  height,
  width,
  backgroundColor,
  space,
  alignItems,
  justifyContent,
} from 'styled-system'

export interface BoxProps {
  maxWidth?: string | number | string[] | number[]
  minWidth?: string | number | string[] | number[]
  width?: string | number | string[] | number[]
  height?: string | number | string[] | number[]
  mb?: string | number | string[] | number[]
  alignItems?: string | string[]
  justifyContent?: string | string[]
  backgroundColor?: string
}

export const Box = styled.div<BoxProps>(
  {
    display: 'flex',
  },
  backgroundColor,
  justifyContent,
  alignItems,
  maxWidth,
  minWidth,
  width,
  height,
  space
)
