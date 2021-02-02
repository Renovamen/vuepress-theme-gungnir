module.exports = {
  title: "vuepress-theme-gungnir",
  description: "Renovamen's blog, also VuePress theme Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg"}],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  theme: 'gungnir',
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/zh/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    repo: 'Renovamen/vuepress-theme-gungnir',
    docsDir: 'example',
    editLinks: true,
    lastUpdated: true,
    hitokoto: true,  // enable hitokoto (一言) or not?
    codeTheme: 'gungnir-dark',
    rss: {
      site_url: 'https://vuepress-theme-gungnir.vercel.app',
      copyright: 'Renovamen 2018-2021',
      count: 20
    },
    comment: {
      owner: 'This-is-an-Apple',
      repo: 'gitalk-comments',
      clientId: 'd6247712dc288a5a60ca',
      clientSecret: 'ed1ec72417828343c79ed910a1b77d140fa715a7'
    },
    analytics: {
      ga: 'UA-146858305-4',
      ba: '0958eaa31f4f4656f36bd33673332939'
    },
    katex: true,
    mermaid: true,
    chartjs: true,
    roughviz: true,
    mdPlus: {
      all: true
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: require('./nav/en'),
        sidebar: require('./sidebar/en')
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh')
      }
    },
    personalInfo: {
      name: "Gungnir",
      avatar: "/img/avatar.jpeg",
      description: 'A blog theme for VuePress.',
      sns: {
        "github": "Renovamen",
        "linkedin": "xiaohan-zou-55bba0160",  
        "facebook": "renovamen.zou",
        "twitter": "renovamen_zxh",
        "zhihu": "chao-neng-gui-su",
        "email": "renovamenzxh@gmail.com",
      }
    },
    homeHeaderImages: [
      {
        "path": "/img/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      {
        "path": "/img/home-bg/2.jpg",
        "mask": "rgb(251, 170, 152, .2)"
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
    pages: {
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
          "mask": "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
  }
}