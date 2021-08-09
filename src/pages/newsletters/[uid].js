import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { useQuery, gql } from '@apollo/client'

const NEWSLETTER_QUERY = gql`
  query NewsletterQuery($uid: String!, $lang: String!) {
    newsletter(uid: $uid, lang: $lang) {
      title
      _meta {
        lang
        alternateLanguages {
          lang
        }
      }
      body {
        __typename
      }
      author {
        ... on Team_member {
          full_name
        }
      }
    }
  }
`

export default function Newsletter({ params }) {
  const [loaded, setLoaded] = useState(false)
  const { data, error, loading } = useQuery(NEWSLETTER_QUERY, {
    variables: {
      uid: params.uid,
      lang: 'fr-ca',
    },
    onCompleted: () => {
      setLoaded(true)
    },
  })

  // if (error) navigate('/newsletters')

  return !loaded ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data?.newsletter.title[0].text}
      {data?.newsletter.author.full_name[0].text}
    </div>
  )
}
