import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'

export default function NewslettersPage() {
  const data = useStaticQuery(graphql`
    query AllNewsletters {
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

  const documents = data.allPrismicNewsletter.nodes

  return (
    <Layout>
      <h1>Newsletters</h1>
      {documents.map((item, index) => {
        return (
          <Link key={index} to={`/newsletters/${item.uid}`}>
            {item.data.title.text}
          </Link>
        )
      })}
    </Layout>
  )
}
