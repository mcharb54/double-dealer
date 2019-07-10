/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  pathPrefix: "/double-dealer",
  siteMetadata: {
    title: `Elbuod Relaed`,

  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Double Dealer`,
        short_name: `Double`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
