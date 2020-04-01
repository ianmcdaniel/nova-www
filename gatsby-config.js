const gatsbyOrNodeEnv = process.env.GATSBY_ENV || process.env.NODE_ENV;

if (gatsbyOrNodeEnv === 'development') {
  require('dotenv').config();
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  forceFullSync: true,
};

const intercomConfig = {
  app_id: 'j4g7nq0k',
  include_in_development: true,
  delay_timeout: 500,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteMetadata: {
    title: 'Nova Credit',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-graphql-loader',
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: intercomConfig,
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'NOVA',
    //     fieldName: 'nova',
    //     url: 'https://offers.novacredit.com/api/graphql',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/cards/*'] },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Serif Display`,
          },
          {
            family: `Open Sans`,
            variants: [`regular`, `bold`, `light`],
          },
        ],
      },
    },
  ],
};
