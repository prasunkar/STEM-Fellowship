import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'

export default function TeamPage() {
  const {
    site: {
      siteMetadata: { description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <main>
      <SEO title="Our Team" description={description} />
      <h1>Our Team</h1>
    </main>
  )
}
