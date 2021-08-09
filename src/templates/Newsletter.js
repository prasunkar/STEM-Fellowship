import React from 'react'
import { graphql } from 'gatsby'

import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import linkResolver from '../utils/linkResolver'

import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

const NewsletterTemplate = ({ data }) => {
  if (!data) return null

  const newsletterContent = data.prismicNewsletter.data
  const { body, author } = newsletterContent
  const altLanguages = newsletterContent.alternate_languages || []
  const activeDoc = { lang, type, url, altLanguages }

  return (
    <Layout activeDocMeta={activeDoc}>
      <SliceZone slices={newsletterContent.body} />
    </Layout>
  )
}

export const query = graphql`
  query NewsletterQuery($uid: String!, $lang: String!) {
    prismicNewsletter(uid: { eq: $uid }, lang: { eq: $lang }) {
      alternate_languages {
        lang
      }
      lang
      data {
        body {
          ... on PrismicNewsletterDataBodyImage {
            items {
              caption
            }
          }
          ... on PrismicNewsletterDataBodyQuote {
            primary {
              quote_author
              quote_content
            }
          }
          ... on PrismicNewsletterDataBodyRichText {
            primary {
              content {
                html
              }
            }
          }
        }
        author {
          document {
            ... on PrismicTeamMember {
              data {
                full_name {
                  text
                }
                social_links {
                  social_link {
                    url
                  }
                }
              }
              uid
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(NewsletterTemplate, [
  {
    repositoryName: 'stemfellowship',
    linkResolver: linkResolver,
  },
])
