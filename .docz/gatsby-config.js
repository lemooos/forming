const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Forming',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/leo/Development/Forming/react-forming/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Forming',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/leo/Development/Forming/react-forming',
          templates:
            '/Users/leo/Development/Forming/react-forming/node_modules/docz-core/dist/templates',
          docz: '/Users/leo/Development/Forming/react-forming/.docz',
          cache: '/Users/leo/Development/Forming/react-forming/.docz/.cache',
          app: '/Users/leo/Development/Forming/react-forming/.docz/app',
          appPackageJson:
            '/Users/leo/Development/Forming/react-forming/package.json',
          appTsConfig:
            '/Users/leo/Development/Forming/react-forming/tsconfig.json',
          gatsbyConfig:
            '/Users/leo/Development/Forming/react-forming/gatsby-config.js',
          gatsbyBrowser:
            '/Users/leo/Development/Forming/react-forming/gatsby-browser.js',
          gatsbyNode:
            '/Users/leo/Development/Forming/react-forming/gatsby-node.js',
          gatsbySSR:
            '/Users/leo/Development/Forming/react-forming/gatsby-ssr.js',
          importsJs:
            '/Users/leo/Development/Forming/react-forming/.docz/app/imports.js',
          rootJs:
            '/Users/leo/Development/Forming/react-forming/.docz/app/root.jsx',
          indexJs:
            '/Users/leo/Development/Forming/react-forming/.docz/app/index.jsx',
          indexHtml:
            '/Users/leo/Development/Forming/react-forming/.docz/app/index.html',
          db: '/Users/leo/Development/Forming/react-forming/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
