import React from 'react'
import { gql } from 'apollo-boost'
import { Column, Layout } from '@ui/layout'
import { useQuery } from 'react-apollo-hooks'
import { Blocks as Renderer } from '@ui/blocks'
import { FixedBackgroundImage } from '@ui/image'

const query = gql`
  fragment BlockFields on ContentBlock {
    blockName
    attrs {
      columns
      dropCap
      fontSize
      textColor
      backgroundColor
    }
    innerHTML
    innerContent
  }

  query Page($id: ID!) {
    page(id: $id) {
      id
      uri
      title
      slug
      content
      desiredSlug
      featuredImage {
        id
        sourceUrl
      }
      blocks {
        ...BlockFields
        innerBlocks {
          ...BlockFields
          innerBlocks {
            ...BlockFields
            innerBlocks {
              ...BlockFields
            }
          }
        }
      }
    }
  }
`

export const Content = () => {
  const { data } = useQuery(query, { variables: { id: 'cGFnZToy' } })

  const blocks = data && data.page ? data.page.blocks : []
  const featuredImage = data && data.page ? data.page.featuredImage : null

  return (
    <Column>
      {featuredImage && (
        <FixedBackgroundImage
          backgroundImage={`url(${featuredImage.sourceUrl})`}
        />
      )}
      <Layout justify='center'>
        <Renderer blocks={blocks} />
      </Layout>
    </Column>
  )
}
