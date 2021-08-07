import React from 'react'
import { gql } from 'apollo-boost'
import { Column, Layout, Row, Box } from '@ui/layout'
import { useQuery } from 'react-apollo-hooks'
import { Blocks as Renderer } from '@ui/blocks'
import { FixedBackgroundImage } from '@ui/image'
import { Release } from '@ui/releases'

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

const items = [
  {
    id: 1,
    src:
      'https://epochcrysis.band/wp-content/themes/yootheme/cache/UC-min-a0003e53.jpeg',
    title: 'Another Day',
    links: [
      {
        href: '/',
        type: 'amazon',
      },
      {
        href: '/',
        type: 'spotify',
      },
      {
        href: '/',
        type: 'yandex',
      },
      {
        href: '/',
        type: 'band',
      },
      {
        href: '/',
        type: 'google',
      },
      {
        href: '/',
        type: 'itunes',
      },
    ],
  },
  {
    id: 2,
    src:
      'https://epochcrysis.band/wp-content/themes/yootheme/cache/UC-min-a0003e53.jpeg',
    title: 'Another Day',
    links: [
      {
        href: '/',
        type: 'amazon',
      },
      {
        href: '/',
        type: 'spotify',
      },
      {
        href: '/',
        type: 'yandex',
      },
      {
        href: '/',
        type: 'band',
      },
      {
        href: '/',
        type: 'google',
      },
      {
        href: '/',
        type: 'itunes',
      },
    ],
  },
  {
    id: 3,
    src:
      'https://epochcrysis.band/wp-content/themes/yootheme/cache/UC-min-a0003e53.jpeg',
    title: 'The Hope Still Remains',
    links: [
      {
        href: '/',
        type: 'amazon',
      },
      {
        href: '/',
        type: 'spotify',
      },
      {
        href: '/',
        type: 'yandex',
      },
      {
        href: '/',
        type: 'band',
      },
      {
        href: '/',
        type: 'google',
      },
      {
        href: '/',
        type: 'itunes',
      },
    ],
  },
  {
    id: 4,
    src:
      'https://epochcrysis.band/wp-content/themes/yootheme/cache/UC-min-a0003e53.jpeg',
    title: 'The Hope Still Remains',
    links: [
      {
        href: '/',
        type: 'amazon',
      },
      {
        href: '/',
        type: 'spotify',
      },
      {
        href: '/',
        type: 'yandex',
      },
      {
        href: '/',
        type: 'band',
      },
      {
        href: '/',
        type: 'google',
      },
      {
        href: '/',
        type: 'itunes',
      },
    ],
  },
]

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
      <Layout basis='40px' />
      <Layout justify='center'>
        <Row basis='1200px'>
          <Layout basis='40px' flexShrink={0} />
          <Layout justify='center'>
            <Box
              width='100%'
              flexWrap='wrap'
              justifyContent='center'
              flexDirection={['column', 'column', 'row']}
            >
              {items.map(item => (
                <Release key={item.id} data={item} />
              ))}
            </Box>
          </Layout>
          <Layout basis='40px' flexShrink={0} />
        </Row>
      </Layout>
      <Layout basis='40px' />
    </Column>
  )
}
