/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
module.exports = {
  pathPrefix: `/double-dealer`,
  siteMetadata: {
    title: `The Double Dealer`,
    eltit: `Eht Elbuod Relaed`,
    author: `Martin Charboneau`,
    description: `...I can deceive them both by speaking the truth.`,
    siteUrl: `https://www.thedoubledealer.com`,
    social: {
      twitter: `doubledealermag`
    }
  },
  plugins: [
    // Content sources
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/static/img`, name: "media" }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `articles`, path: `${__dirname}/src/pages/articles` }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `fiction`, path: `${__dirname}/src/pages/fiction` }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `archives`, path: `${__dirname}/src/pages/archives` }
    },

    // Image processing
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: { name: "media" }
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 700 }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },

    // UI / styling
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography` }
    },

    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/admin/**`,
          `/search`,
          `/thanks`
        ]
      }
    },

    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Double Dealer`,
        short_name: `Double Dealer`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/blackddlogo.png`,
        background_color: `#000`,
        theme_color: `#000`
      }
    },
    `gatsby-plugin-offline`,

    // CMS
    `gatsby-plugin-decap-cms`

    // NOTE: Google Analytics UA-145067224-1 has been removed.
    // Universal Analytics was sunset in July 2023 and no longer collects data.
    // To re-enable analytics, create a GA4 property at analytics.google.com,
    // get your G-XXXXXXXX measurement ID, then install gatsby-plugin-gtag:
    //   npm install gatsby-plugin-gtag
    // and add:
    //   { resolve: `gatsby-plugin-gtag`, options: { trackingId: `G-XXXXXXXX` } }
  ]
};
