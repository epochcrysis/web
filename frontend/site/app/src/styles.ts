import { injectGlobal } from 'emotion'

export const injectGlobalStyles = () =>
  injectGlobal({
    html: {},
    body: {
      height: '100%',
      margin: 0,
    },
  })
