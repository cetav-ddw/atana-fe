module.exports = {
  siteMetadata: {
    title: `Átana`,
    description: `Crea y distribuye comunicados de prensa de una manera más fácil, rapida y sencilla.`,
    author: `@atana`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing`,
        path: `${__dirname}/content/landing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/content/packages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atana`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#444444`,
        theme_color: `#444444`,
        display: `minimal-ui`,
        icon: `src/images/atana-logo.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
};
