import React from 'react'
import styled from '@emotion/styled'
/* tslint:disable no-var-requires */
const ru = require('flag-icon-css/flags/1x1/ru.svg')
const en = require('flag-icon-css/flags/1x1/us.svg')

interface FlagProps {
  src: string
  size: string
}

const StyledFlag = styled.img<FlagProps>(props => ({
  borderRadius: '50%',
  width: props.size,
  height: props.size,
}))

const flags = {
  ru,
  en,
}

export const Flag = ({ locale = 'ru', size }) => (
  <StyledFlag src={flags[locale]} size={size} />
)
