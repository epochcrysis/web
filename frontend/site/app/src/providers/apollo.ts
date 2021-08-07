import { withApollo } from '@monstrs/next-app-with-apollo'

export const apollo = withApollo({
  uri: 'https://wp.local.epochcrysis.monstrs.dev/graphql/',
  fetch: (uri, options, props) => fetch(`${uri}?lang=${props.locale}`, options),
})
