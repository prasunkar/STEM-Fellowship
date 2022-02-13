import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import SEO from '../../components/SEO'

export default function NewslettersPage() {
  const {
    site: {
      siteMetadata: { description }
    },
    allPrismicNewsletter: {
      nodes: documents
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }

      allPrismicNewsletter {
        nodes {
          id
          data {
            title {
              text
            }
            issue
            volume
          }
          uid
        }
      }
    }
  `)

  return (
    <main className='page-newsletters'>
      <SEO title='Newsletters' description={description} />
      <h1>Newsletters</h1>
      {documents.map((item, index) => {
        return (
          <Link key={index} to={`/newsletters/${item.uid}`}>
            {item.data.title.text}
          </Link>
        )
      })}
    </main>
  )
}
