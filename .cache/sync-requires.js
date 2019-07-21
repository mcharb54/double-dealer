const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/templates/blogTemplate.js"))),
  "component---src-templates-template-blog-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/templates/templateBlog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/my-files.js"))),
  "component---src-pages-xedni-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/xedni.js")))
}

