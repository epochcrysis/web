import React from 'react'
import styled from '@emotion/styled'

const StyledImage = styled.div(({ theme }) => ({
  '& img': {
    width: '100%',
  },
  '& figure': {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
}))

export const Image = ({ innerHTML }) => (
  <StyledImage dangerouslySetInnerHTML={{ __html: innerHTML }} />
)
