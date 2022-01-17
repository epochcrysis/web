import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  position: 'sticky',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 72,
  backgroundColor: theme.colors.background.white,
})
