/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The Double Dealer`,
    eltit: `Eht Elbuod Relaed`,
    pathPrefix: `/public`,
    siteUrl: `https://thedoubledealer.com/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "media"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fiction`,
        path: `${__dirname}/src/pages/fiction`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "media"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {}
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
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
    },
    `gatsby-plugin-offline`
  ]
};
