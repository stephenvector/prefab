const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Prefab',
    description: 'A set of themeable UI components for React projects.',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/home/jack/Desktop/prefab/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Prefab',
        description: 'A set of themeable UI components for React projects.',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/jack/Desktop/prefab',
          templates:
            '/home/jack/Desktop/prefab/node_modules/docz-core/dist/templates',
          packageJson: '/home/jack/Desktop/prefab/package.json',
          docz: '/home/jack/Desktop/prefab/.docz',
          cache: '/home/jack/Desktop/prefab/.docz/.cache',
          app: '/home/jack/Desktop/prefab/.docz/app',
          appPublic: '/home/jack/Desktop/prefab/.docz/public',
          appNodeModules: '/home/jack/Desktop/prefab/node_modules',
          appPackageJson: '/home/jack/Desktop/prefab/package.json',
          appYarnLock:
            '/home/jack/Desktop/prefab/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/home/jack/Desktop/prefab/node_modules/docz-core/node_modules',
          gatsbyConfig: '/home/jack/Desktop/prefab/gatsby-config.js',
          gatsbyBrowser: '/home/jack/Desktop/prefab/gatsby-browser.js',
          gatsbyNode: '/home/jack/Desktop/prefab/gatsby-node.js',
          gatsbySSR: '/home/jack/Desktop/prefab/gatsby-ssr.js',
          importsJs: '/home/jack/Desktop/prefab/.docz/app/imports.js',
          rootJs: '/home/jack/Desktop/prefab/.docz/app/root.jsx',
          indexJs: '/home/jack/Desktop/prefab/.docz/app/index.jsx',
          indexHtml: '/home/jack/Desktop/prefab/.docz/app/index.html',
          db: '/home/jack/Desktop/prefab/.docz/app/db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
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
