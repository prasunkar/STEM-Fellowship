require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
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
    instaUrl: 'https://instagram.com/stemfellowbloor',
    emailAddress: 'jacqueline.chen@stemfellowship.org',
    navUrls: [
      {
        name: 'Home',
        class: 'home',
        to: '/',
        partiallyActive: false,
      },
      {
        name: 'Our Team',
        class: 'our-team',
        to: '/team/',
        partiallyActive: true,
      },
      {
        name: 'Events',
        class: 'events',
        to: '/events/',
        partiallyActive: true,
      },
      {
        name: 'Newsletters',
        class: 'newsletters',
        to: '/newsletters/',
        partiallyActive: true,
      },
      {
        name: 'Contact Us',
        class: 'contact-us',
        to: '/contact/',
        partiallyActive: false,
      },
    ],
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
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        lang: '*',
        linkResolver: require('./src/utils/linkResolver').linkResolver,
        schemas: {
          newsletter: require('./custom_types/newsletter.json'),
          team_member: require('./custom_types/team_member.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        lang: '*',
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
    {
      resolve: 'gatsby-plugin-transition-link',
      options: { layout: require.resolve('./src/components/Layout.js') },
    },
  ],
}
