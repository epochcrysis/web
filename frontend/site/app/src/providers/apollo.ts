import { withApollo } from '@monstrs/next-app-with-apollo'

export const apollo = withApollo({
  url: ({ locale }) =>
    'https://wp.local.epochcrysis.band/graphql/?lang=${locale}',
})

// local network and external network
