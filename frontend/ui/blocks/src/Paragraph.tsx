import React from 'react'
import styled from '@emotion/styled'
import { ifProp, switchProp } from 'styled-tools'
import { textColor, backgroundColor } from './utils'

const StyledParagraph = styled.div(
  ({ theme }) => ({
    fontFamily: theme.fontFamily,
    lineHeight: 1.5,
    fontSize: '16px',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    '& p': {
      marginBlockStart: 0,
    },
    '& em': {
      color: '#f13054',
    },
    '& a': {
      color: '#367ff3',
    },
  }),
  ifProp('dropCap', ({ theme }: any) => ({
    '&:not(:focus)::first-letter': {
      float: 'left',
      fontSize: '4.4em',
      lineHeight: '0.68',
      fontWeight: 100,
      margin: '0.05em 0.1em 0 0',
      textTransform: 'uppercase',
      fontStyle: 'normal',
    },
    '&:not(:focus)::after': {
      content: '""',
      display: 'table',
      clear: 'both',
      paddingTop: '14px',
    },
  })),
  switchProp('fontSize', ({ theme }: any) => ({
    small: {
      fontSize: 13,
    },
    medium: {
      fontSize: 20,
    },
    large: {
      fontSize: 36,
    },
    huge: {
      fontSize: 48,
    },
  })),
  textColor,
  backgroundColor
)

export const Paragraph = ({ innerHTML, attrs = {} }) => (
  <StyledParagraph {...attrs} dangerouslySetInnerHTML={{ __html: innerHTML }} />
)
