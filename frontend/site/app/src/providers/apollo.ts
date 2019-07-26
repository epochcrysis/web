import { withApollo } from '@monstrs/next-app-with-apollo'

export const apollo = withApollo({
  url: 'https://wp.local.epochcrysis.band/graphql/?lang=ru',
})

// local network and external network
