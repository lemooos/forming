// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---docs-form-mdx": () => import("./../../../../docs/Form.mdx" /* webpackChunkName: "component---docs-form-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

