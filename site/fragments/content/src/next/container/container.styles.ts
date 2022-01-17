import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: 134,
  border: `1px solid ${theme.colors.background.transparentWhite}`,
  padding: 32,
})
