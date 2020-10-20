module.exports = {
  title: "vuepress-theme-gungnir",
  description: "Renovamen's blog, also VuePress theme Gungnir.",
  dest: "dist",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg"}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Montserrat:200,400,500,700"}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css"}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/font-awesome-animation@0.2.1/dist/font-awesome-animation.min.css"}],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    author: "Renovamen",
    authorAvatar: "/img/avatar.jpeg",
    smoothScroll: true,
    sidebarDepth: 5,
    repo: 'Renovamen/vuepress-theme-gungnir',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: "Last Updated",
    codeTheme: "gungnir-dark",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'fab fa-fort-awesome'
      },
      {
        text: "Tags",
        link: '/tag/',
        icon: 'fas fa-tag'
      },
      {
        text: "Docs",
        icon: "fas fa-book",
        items: [
          {
            text: "Jekyll",
            link: "/docs/jekyll-theme-gungnir/"
          },
          {
            text: "VuePress",
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
    tagline: "いつか、私がヒトじゃなくなっても",
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
    ]
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
      md.use(require('@liradb2000/markdown-it-katex'))
    }
  },
}