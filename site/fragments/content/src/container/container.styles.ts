import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ theme }) => ({
  position: 'relative',
  width: 720,
  flexShrink: 0,
  minHeight: '100%',
  backgroundColor: theme.colors.background.dark,
  padding: 40,
  overflowY: 'auto',
})
