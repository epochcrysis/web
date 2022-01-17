import { createBaseStyles }       from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

export const baseStyles = createBaseStyles()

export const ghostAppearanceStyles = createAppearanceStyles({
  fontColor: 'transparent',
  backgroundColor: 'transparent',
  borderColor: 'transparent',
})

export const ghostSizeStyles = createShapeStyles({
  size: 'min-content' as any,
  paddingLeft: 0,
  paddingRight: 0,
  fontSize: ({ theme }) => theme.fontSizes.regular,
})

export const appearanceStyles = switchProp(prop('variant', 'ghost'), {
  ghost: ghostSizeStyles,
})

export const shapeStyles = switchProp(prop('size', 'ghost'), {
  ghost: ghostSizeStyles,
})
