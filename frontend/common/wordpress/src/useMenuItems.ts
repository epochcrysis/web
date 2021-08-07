import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'

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

export const useMenuItems = (where = {}) => {
  const { data } = useQuery(query, { variables: { where } })

  if (data && data.menus && data.menus.nodes.length > 0) {
    return data.menus.nodes[0].menuItems.nodes
  }

  return []
}
