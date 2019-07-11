const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/mcharbonneau/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/mcharbonneau/mcharb54.github.io/src/templates/blogTemplate.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/mcharbonneau/mcharb54.github.io/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mcharbonneau/mcharb54.github.io/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/mcharbonneau/mcharb54.github.io/src/pages/my-files.js")))
}

