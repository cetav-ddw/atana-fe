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
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:`https://gmail.us5.list-manage.com/subscribe/post?u=996097153c728f6ca69f50a35&amp;id=f0595f2d40`,
      },
    },
  ],
}
