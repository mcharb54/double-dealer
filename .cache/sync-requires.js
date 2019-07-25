const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/templates/blogTemplate.js"))),
  "component---src-templates-template-blog-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/templates/templateBlog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/about.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/features.js"))),
  "component---src-pages-features-2-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/features2.js"))),
  "component---src-pages-fiction-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/fiction.js"))),
  "component---src-pages-fiction-2-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/fiction2.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/index.js"))),
  "component---src-pages-latest-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/latest.js"))),
  "component---src-pages-latest-2-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/latest2.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/my-files.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/search.js"))),
  "component---src-pages-search-2-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/search2.js"))),
  "component---src-pages-sections-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/sections.js"))),
  "component---src-pages-sections-2-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/sections2.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/thanks.js"))),
  "component---src-pages-xedni-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/xedni.js"))),
  "component---src-pages-submissions-js": hot(preferDefault(require("/Users/mcharbonneau/Documents/GitHub/double-dealer/src/pages/submissions.js")))
}

