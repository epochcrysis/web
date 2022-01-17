import React      from 'react'

import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap');
      html,
      body {
        margin: 0;
        height: 100%;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }
      #__next {
        height: 100%;
      }
    `}
  />
)
