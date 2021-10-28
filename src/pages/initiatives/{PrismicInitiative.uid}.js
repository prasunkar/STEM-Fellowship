import React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../../utils/linkResolver'

const InitiativeTemplate = ({ data: { prismicInitiative } }) => {
  return (
    <h1>
      {prismicInitiative.data.title.text}, published {prismicInitiative['first_publication_date']}
    </h1>
  )
}

export const query = graphql`
  query InitiativeTemplate($id: String!) {
    prismicInitiative(id: { eq: $id }) {
      _previewable
      first_publication_date(fromNow: true)
      data {
        title {
          text
        }
      }
    }
  }
`

export default withPrismicPreview(InitiativeTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
