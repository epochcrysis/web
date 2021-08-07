import React from 'react'
import styled from '@emotion/styled'

const StyledHtml = styled.div(({ theme }) => ({
  marginBottom: '.5em',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& iframe': {
    width: '100%',
  },
}))

export const Html = ({ innerHTML, attrs = {} }) => (
  <StyledHtml {...attrs} dangerouslySetInnerHTML={{ __html: innerHTML }} />
)
