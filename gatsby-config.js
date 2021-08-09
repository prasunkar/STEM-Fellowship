const linkResolver = require('./src/utils/linkResolver')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'STEM Fellowship',
    titleTemplate: '%s • STEM Fellowship',
    siteUrl: 'https://www.yourdomain.tld',
    description: 'A one-stop shop for everything STEM!',
    author: 'Prasun Kar',
    keywords: ['STEM', 'STEM Fellowship', 'Bloor', 'Bloor Collegiate'],
    lang: 'en',
    twitterUsername: '@STEM_Fellowship',
    instaUsername: '@stemfellowbloor',
    emailAddress: 'jacqueline.chen@stemfellowship.org',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
        // implementation: require('node-sass'),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_TOKEN,
        lang: '*',
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          newsletter: require('./schemas/newsletter.json'),
          team_member: require('./schemas/team_member.json'),
        },
        // prismicToolbar: true,
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        // The name of your Prismic repository. This is required.
        // Example: 'your-repository-name' if your prismic.io address
        // is 'your-repository-name.prismic.io'.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,

        // An API access token to your Prismic repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        //
        // If you choose to keep your access token private, do not provide this
        // plugin option. Editors will be prompted to enter an access token
        // during a preview session instead, if required.
        //
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_PRISMIC_TOKEN,

        // Determines the type of Prismic Toolbar that is added to your site.
        // This defaults to "new". See the "Prismic Toolbar" section of the
        // plugin documentation for more details.
        //
        // Note: The toolbar is required for previews to function and cannot be
        // disabled.
        toolbar: 'new',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-177000406-1', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
