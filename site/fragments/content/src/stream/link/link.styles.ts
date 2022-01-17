import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: theme.radii.medium,
  backgroundColor: theme.colors.background.paleGrey,
  cursor: 'pointer',
})
