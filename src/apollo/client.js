import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PrismicLink } from 'apollo-link-prismic'

export const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://stemfellowship.cdn.prismic.io/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
})
