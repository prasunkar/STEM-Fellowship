import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import { useQuery, gql } from '@apollo/client'

import SEO from '../../components/SEO'

// const INITIATIVES_QUERY = gql`
//   {
//     allInitiatives {
//       edges {
//         node {
//           title
//         }
//       }
//       totalCount
//     }
//   }
// `

export default function InitiativesPage() {
  const {
    site: {
      siteMetadata: { description },
    },
    allPrismicInitiative: { nodes: initiatives },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      allPrismicInitiative {
        nodes {
          data {
            title {
              text
            }
          }
          uid
        }
      }
    }
  `)

  // const { loading, error, data } = useQuery(INITIATIVES_QUERY)
  // console.log(data)

  // if (error)
  //   return (
  //     <p>
  //       Error: {error.name} {error.message}
  //     </p>
  //   )

  return (
    <main className="page-initiatives">
      <SEO title="Initiatives" description={description} />
      <h1>Initiatives</h1>
      <div className="ongoing"></div>
      {/* TODO: Add the search form here */}
      <div className="initiatives">
        {initiatives.map((initiative, index) => (
          <Link key={index} to={`/initiatives/${initiative.uid}`}>
            {initiative.data.title.text}
          </Link>
        ))}

        {/* {loading ? (
          <p>Loading...</p>
        ) : (
          data.allInitiatives.edges.map((initiative, index) => (
            <p key={index}>{initiative.node.title.text}</p>
          ))
        )} */}

        {/* {loading ? <p>Loading count...</p> : data.allInitiatives.totalCount} */}
      </div>
    </main>
  )
}
