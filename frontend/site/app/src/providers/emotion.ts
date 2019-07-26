import { withEmotion } from '@monstrs/next-app-with-emotion'
import { ThemeProvider } from '@ui/theme'
import { injectGlobalStyles } from '../styles'

export const emotion = withEmotion({
  Provider: ThemeProvider,
  injectGlobalStyles,
})
