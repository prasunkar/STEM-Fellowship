import '@fontsource/inter/variable.css' // Defaults to weight 400 with all styles included
import './src/sass/main.scss'

import React from 'react'

import { ApolloProvider } from '@apollo/client'
import { client } from './src/apollo/client'

import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
  </ApolloProvider>
)
