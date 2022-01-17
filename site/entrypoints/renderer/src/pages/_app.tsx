import React              from 'react'
import { useMemo }        from 'react'
import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

import { ThemeProvider }  from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: 'https://epochcrysis.band/graphql',
        cache: new InMemoryCache(),
      }),
    [ApolloClient, InMemoryCache]
  )

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} {...props} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
export default App
