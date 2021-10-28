import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../../utils/linkResolver'

// import Layout from '../../components/Layout'
// import SliceZone from '../components/SliceZone'

const NewsletterTemplate = ({ data }) => {
  const document = data.prismicNewsletter.data

  return (
    <h1>
      {document.title.text}, Volume {document.volume} & Issue {document.issue}
    </h1>
  )
}

export const query = graphql`
  query NewsletterTemplate($id: String!) {
    prismicNewsletter(id: { eq: $id }) {
      _previewable
      data {
        volume
        issue
        title {
          text
        }
      }
    }
  }
`

export default withPrismicPreview(NewsletterTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
