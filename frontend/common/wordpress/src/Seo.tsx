import React from 'react'
import { injectIntl } from 'react-intl'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Helmet from 'react-helmet'

const query = gql`
  query SEO {
    generalSettings {
      title
      description
    }
  }
`

export const Seo = injectIntl(({ intl }) => (
  <Query query={query}>
    {({ data }) => {
      if (!data.generalSettings) {
        return null
      }

      const { title, description } = data.generalSettings

      return (
        <Helmet
          htmlAttributes={{ lang: intl.locale }}
          title={title}
          titleTemplate={`%s | ${title}`}
          meta={[
            {
              name: `description`,
              content: description,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: description,
            },
          ]}
        />
      )
    }}
  </Query>
))
