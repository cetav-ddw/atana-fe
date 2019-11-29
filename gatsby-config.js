module.exports = {
  siteMetadata: {
    title: `Átana`,
    description: `Crea y distribuye comunicados de prensa de una manera más fácil, rapida y sencilla.`,
    author: `@atana`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-netlify-cms`
  ],
}
