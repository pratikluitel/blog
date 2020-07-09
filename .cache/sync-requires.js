const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pratik/Work/site/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/pratik/Work/site/src/pages/about.js"))),
  "component---src-pages-essays-js": hot(preferDefault(require("/home/pratik/Work/site/src/pages/essays.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pratik/Work/site/src/pages/index.js"))),
  "component---src-pages-poems-js": hot(preferDefault(require("/home/pratik/Work/site/src/pages/poems.js"))),
  "component---src-pages-stories-js": hot(preferDefault(require("/home/pratik/Work/site/src/pages/stories.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/pratik/Work/site/src/templates/blog-post.js")))
}

