import '@fontsource/inter/variable.css' // Defaults to weight 400 with all styles included
import './src/sass/main.scss'

// import React from 'react'
// import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

// import 'gatsby-plugin-prismic-previews/dist/styles.css'

// export const wrapRootElement = ({ element }) => (
//   <PrismicPreviewProvider initialEnabled={true}>
//     {element}
//   </PrismicPreviewProvider>
// )

import React from 'react'
// import fetch from 'isomorphic-fetch'
import {
  ApolloClient,
  ApolloProvider,
  // HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { PrismicLink } from 'apollo-link-prismic'

// const httpLink = new HttpLink({
//   uri: process.env.GATSBY_PRISMIC_GRAPHQL,
//   headers: {
//     Authorization: `Bearer ${process.env.GATSBY_PRISMIC_TOKEN}`,
//     // 'Prismic-Ref': 'master',
//   },
//   fetch,
// })

const apolloClient = new ApolloClient({
  link: PrismicLink({
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
    uri: `${process.env.GATSBY_PRISMIC_GRAPHQL}`,
    // accessToken: `${process.env.GATSBY_PRISMIC_TOKEN}`,
  }),
  // link: httpLink,
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>
)
