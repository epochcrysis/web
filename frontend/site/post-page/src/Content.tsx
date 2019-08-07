import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { Box, Column, Layout } from '@ui/layout'
import { Blocks as Renderer } from '@ui/blocks'
import { Text } from '@ui/text'

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

  query Post($slug: String) {
    postBy(slug: $slug) {
      id
      title
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

export const Content = ({ slug }) => {
  const { data } = useQuery(query, { variables: { slug } })
  const post = data && data.postBy ? data.postBy : null

  if (!post) {
    return null
  }

  return (
    <Column>
      <Layout justify='center'>
        <Box maxWidth={['900px', '900px', '900px']}>
          <Text fontSize={['l', 'xl', '3xl']}>{post.title}</Text>
        </Box>
      </Layout>
      <Layout basis={['20px', '40px', '40px']} />
      <Layout justify='center'>
        <Box px={20} maxWidth={['1200px', '1200px', '1200px']}>
          <img
            src={post.featuredImage.sourceUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Layout>
      <Layout basis={['20px', '40px', '40px']} />
      <Layout justify='center'>
        <Box maxWidth={['900px', '900px', '900px']}>
          <Renderer blocks={post.blocks} />
        </Box>
      </Layout>
    </Column>
  )
}
