const path = require('path')

module.exports = {
  title: "vuepress-theme-gungnir",
  description: "Renovamen's blog, also VuePress theme Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg"}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Montserrat:200,400,500,700"}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css"}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-awesome-animation@0.2.1/dist/font-awesome-animation.min.css"}],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  theme: path.resolve(__dirname, '../../packages/theme-gungnir'),
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "$ grep ...",
    author: "Gungnir",
    authorAvatar: "/img/avatar.jpeg",
    smoothScroll: true,
    sidebarDepth: 5,
    repo: 'Renovamen/vuepress-theme-gungnir',
    docsDir: 'blog',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: "Last Updated",
    codeTheme: "gungnir-dark",
    hitokoto: true,  // Enable hitokoto (一言) or not?
    comment: true,  // Enable comment system or not?
    rss: true, // Enable RSS or not?
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'fab fa-fort-awesome'
      },
      {
        text: "Tags",
        link: '/tags/',
        icon: 'fas fa-tag'
      },
      {
        text: "Links",
        link: '/links/',
        icon: 'fas fa-satellite-dish'
      },
      {
        text: "Docs",
        icon: "fas fa-book",
        items: [
          {
            text: "Jekyll",
            icon: "fas fa-meteor",
            link: "/docs/jekyll-theme-gungnir/"
          },
          {
            text: "VuePress",
            icon: "fas fa-rocket",
            link: "/docs/vuepress-theme-gungnir/"
          }
        ]
      }
    ],
    sidebar: {
      "/docs/jekyll-theme-gungnir/": [
        {
          title: '基础',
          collapsable: false,
          children: [
            '',
            'basic/installation',
          ],
        }
      ],
      "/docs/vuepress-theme-gungnir/": [
        {
          title: '基础',
          collapsable: false,
          children: [
            '',
          ],
        }
      ]
    },
    SNS: {
      "github": "Renovamen",
      "linkedin": "xiaohan-zou-55bba0160",  
      "facebook": "renovamen.zou",
      "twitter": "renovamen_zxh",
      "zhihu": "chao-neng-gui-su",
      "email": "renovamenzxh@gmail.com",
    },
    tagline: "A blog theme for VuePress.",
    heroImage: "/hero.png",
    bgImage: [
      {
        "path": "/img/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      {
        "path": "/img/home-bg/2.jpg",
        "mask": "rgba(31, 64, 87, .2)"
      },
      {
        "path": "/img/home-bg/3.jpg",
        "mask": "rgba(68, 74, 83, .1)"
      },
      {
        "path": "/img/home-bg/4.jpg",
        "mask": "rgba(19, 75, 50, .2)"
      }
    ],
    pageConfig: {
      tags: {
        title: 'Tags',
        subtitle: 'Black Sheep Wall',
        bgImage: {
          "path": "/img/pages/tags.jpg",
          "mask": "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: 'Links',
        subtitle: 'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          "path": "/img/pages/links.jpg",
          "mask": "rgba(236, 168, 78, 0.2)"
        }
      }
    },
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'This-is-an-Apple',
      repo: 'gitalk-comments',
      clientId: '0a24dcc429074a13836a',
      clientSecret: '7b17864fc9d9aa5fd8d6ac00198aaa07d899bd84',
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-146858305-4'
    },
    'vuepress-plugin-rss': {
      site_url: 'https://vuepress-theme-gungnir.vercel.app',
      copyright: 'Renovamen 2018-2020',
      count: 20
    }
  },
  chainMarkdown(config) {
    const { PLUGINS } = require('@vuepress/markdown')
    const originalLinkPlugin = require('@vuepress/markdown/lib/link.js');

    config
      .plugins
        .delete(PLUGINS.CONVERT_ROUTER_LINK)

    const linkPlugin = function (md) {
      const result = originalLinkPlugin.apply(this, arguments);
      const close = md.renderer.rules.link_close;
      md.renderer.rules.link_close = function() {
        return close.apply(this, arguments).replace('<OutboundLink/>', '');
      }
      return result;
    };

    config
      .plugin(PLUGINS.CONVERT_ROUTER_LINK)
        .use(linkPlugin, [{
          // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
          target: '_blank',
          rel: 'noopener noreferrer'
        }])
  },
  markdown: {
    // lineNumbers: true,
    extendMarkdown: md => {
      md.set({
        html: true
      })
      md.use(require('markdown-it-katex'))
    },
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
  }
}