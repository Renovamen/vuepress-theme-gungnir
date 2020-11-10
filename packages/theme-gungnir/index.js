const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
      .keys(siteConfig.locales && themeConfig.locales || {})
      .some(base => themeConfig.locales[base].algolia)
  )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['smooth-scroll', enableSmoothScroll],
      [
        '@vuepress/active-header-links', 
        options.activeHeaderLinks
      ],
      [
        '@vuepress/plugin-blog', {
          permalink: '/:regular',
          frontmatters: [
            {
              id: 'tags',
              keys: ['tags'],
              path: '/tags/',
              layout: 'Tags',
              scopeLayout: 'Tag'
            }
          ],
          directories: [
            {
              id: 'posts',
              dirname: 'posts',
              path: '/',
              layout: 'HomePage',
              itemPermalink: '/post/:year/:month/:day/:slug',
              itemLayout: 'Post',
              pagination: {
                layout: 'HomePage',
              },
            },
          ],
        }
      ],
      [
        'container', {
          type: 'tip',
          defaultTitle: {
            '/': 'TIP',
            '/zh/': '提示'
          }
        }
      ],
      [
        'container', {
          type: 'warning',
          defaultTitle: {
            '/': 'WARNING',
            '/zh/': '注意'
          }
        }
      ],
      [
        'container', {
          type: 'danger',
          defaultTitle: {
            '/': 'WARNING',
            '/zh/': '警告'
          }
        }
      ],
      [
        'container', {
          type: 'details',
          before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
          after: () => '</details>\n'
        }
      ],
    ]
  }
}
