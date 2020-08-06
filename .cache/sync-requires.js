const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ziich/projects/cathleencher-delog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ziich/projects/cathleencher-delog/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/ziich/projects/cathleencher-delog/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ziich/projects/cathleencher-delog/src/pages/index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/home/ziich/projects/cathleencher-delog/src/templates/blogTemplate.js")))
}

