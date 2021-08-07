import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { Box, Column, Row, Layout } from '@ui/layout'
import { NextLink as Link } from '@ui/link'

const query = gql`
  query Posts {
    posts {
      nodes {
        id
        slug
        title
        featuredImage {
          id
          sourceUrl(size: SQUARE_THUMBNAIL)
        }
      }
    }
  }
`

const Post = ({ slug, title, featuredImage }) => (
  <Box width='100%' px={['20px', '20px', '20px']} py={['20px', '20px', '20px']}>
    <Column>
      <Layout>
        <Link width='100%' href={`/blog/${slug}`}>
          <img
            src={featuredImage.sourceUrl}
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
      </Layout>
      <Layout basis='20px' />
      <Layout justify='center'>
        <Link color='black' href={`/blog/${slug}`}>
          {title}
        </Link>
      </Layout>
    </Column>
  </Box>
)

export const Content = () => {
  const { data } = useQuery(query)
  const nodes = data && data.posts ? data.posts.nodes : []

  return (
    <Box width='100%' maxWidth='1600px'>
      <Row wrap='wrap'>
        {nodes.map((node, index) => (
          <Layout
            key={node.id + index}
            flexShrink={0}
            flexBasis={['100%', '33%', '25%']}
          >
            <Post {...node} />
          </Layout>
        ))}
      </Row>
    </Box>
  )
}
