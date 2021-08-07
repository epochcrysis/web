import React from 'react'
import styled from '@emotion/styled'

const StyledHeading = styled.div(({ theme }) => ({
  '& h1, h2, h3, h4, h5, h6': {
    fontFamily: theme.fontFamily,
    marginBottom: '.5em',
    fontWeight: 400,
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
  },
  '& h1': {
    fontSize: '2.44em',
    lineHeight: 1.4,
  },
  '& h2': {
    fontSize: '1.95em',
    lineHeight: 1.4,
  },
  '& h3': {
    fontSize: '1.56em',
    lineHeight: 1.4,
  },
  '& h4': {
    fontSize: '1.25em',
    lineHeight: 1.4,
  },
  '& h5': {
    fontSize: '1em',
    lineHeight: 1.4,
  },
  '& h6': {
    fontSize: '.8em',
    lineHeight: 1.4,
  },
}))

export const Heading = ({ innerHTML }) => (
  <StyledHeading dangerouslySetInnerHTML={{ __html: innerHTML }} />
)
