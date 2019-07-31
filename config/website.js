

module.exports = { // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "The Double Dealer", // Navigation and Site Title
  titleAlt: "Double Dealer", // Title for JSONLD
  description: "I can deceive them both by speaking the truth.",
  headline: "A National Magazine from the South", // Headline for schema.org JSONLD
  url: "https://www.thedoubledealer.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/static/img/logo.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/images/icon.png", // Used for manifest favicon generation
  shortName: "DoubDealMag", // shortname for manifest. MUST be shorter than 12 characters
  author: "Martin Charboneau", // Author for schemaORGJSONLD
  themeColor: "#FFF",
  backgroundColor: "#FFF",

  twitter: "@doubledealermag", // Twitter Username
  skipNavId: "reach-skip-nav" // ID for the "Skip to content" a11y feature
};
