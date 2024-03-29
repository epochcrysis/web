import styled from '@emotion/styled'
import {
  maxWidth,
  minWidth,
  height,
  width,
  space,
  display,
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  flexWrap,
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
  display?: string | string[]
  flexDirection?: string | string[]
  flexWrap?: string | string[]
  px?: string | number | string[] | number[]
  py?: string | number | string[] | number[]
}

export const Box = styled.div<BoxProps>(
  {
    display: 'flex',
    boxSizing: 'border-box',
  },
  display,
  backgroundColor,
  justifyContent,
  flexDirection,
  alignItems,
  flexWrap,
  maxWidth,
  minWidth,
  width,
  height,
  space
)
