import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { compose, mapProps } from 'recompose'

const query = gql`
  query MenuItems($where: RootQueryToMenuConnectionWhereArgs) {
    menus(where: $where) {
      nodes {
        menuItems {
          nodes {
            id
            url
            label
            title
            target
          }
        }
      }
    }
  }
`

export const withMenuItems = slug =>
  compose(
    graphql(query, {
      options: () => ({
        notifyOnNetworkStatusChange: true,
        variables: {
          where: {
            slug,
          },
        },
      }),
    }),
    mapProps(({ data }) => {
      if (data && data.menus && data.menus.nodes.length > 0) {
        return {
          items: data.menus.nodes[0].menuItems.nodes,
        }
      }

      return {
        items: [],
      }
    })
  )
