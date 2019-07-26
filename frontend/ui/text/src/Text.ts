import styled from '@emotion/styled'
import { color, fontSize, fontWeight, lineHeight } from 'styled-system'
import { ThemeFontSizes, ThemeFontWeights, ThemeLineHeights } from '@ui/theme'

export interface TextProps {
  color?: string
  fontSize?: keyof ThemeFontSizes
  fontWeight?: keyof ThemeFontWeights
  lineHeight?: keyof ThemeLineHeights
}

export const Text = styled.span<TextProps>(
  ({ theme }) => ({
    display: 'inline',
    fontFamily: theme.fontFamily,
  }),
  color,
  fontSize,
  fontWeight,
  lineHeight
)

Text.defaultProps = {
  color: 'black',
  fontSize: 'n',
  fontWeight: 'normal',
}
