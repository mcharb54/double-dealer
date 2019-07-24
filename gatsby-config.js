/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The Double Dealer`,
    eltit: `Eht Elbuod Relaed`,
    pathPrefix: "/public"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Double Dealer`,
        short_name: `Double`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    }
  ]
};
