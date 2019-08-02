/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* General Information */
  siteMetadata: {
    title: `The Double Dealer`,
    eltit: `Eht Elbuod Relaed`,
    author: `Martin Charboneau`,
    description: `I can deceive them both by speaking the truth.`,
    siteUrl: `https://www.thedoubledealer.com`,
    social: {
      twitter: `doubledealermag`
    }
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archives`,
        path: `${__dirname}/src/pages/archives`
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145067224-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom path
        exclude: ["/admin/**"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Double Dealer`,
        short_name: `Double`,
        start_url: `/`, // This path is relative to the root of the site.
        display: `standalone`,
        icon: `src/images/icon.png`,
        background_color: `#FFF`,
        theme_color: `#FFF`
      }
    },
    `gatsby-plugin-offline`
  ]
};
