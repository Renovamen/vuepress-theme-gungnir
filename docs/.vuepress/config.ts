import { defineUserConfig } from "@vuepress/cli";
import { path } from "@vuepress/utils";
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<GungnirThemeOptions>({
  base: "/",

  head: [["link", { rel: "icon", href: "/img/logo.svg" }]],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US"
    },
    "/zh/": {
      lang: "zh-CN"
    }
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? "@vuepress/webpack" : "@vuepress/vite"),

  theme: "vuepress-theme-gungnir",

  themeConfig: {
    repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "docs",
    docsBranch: "v2",

    hitokoto: "https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Gungnir",
      avatar: "/img/avatar.jpeg",
      description: "A blog theme for VuePress.",
      sns: {
        github: "Renovamen",
        linkedin: "xiaohan-zou-55bba0160",
        facebook: "renovamen.zou",
        twitter: "renovamen_zxh",
        zhihu: "chao-neng-gui-su",
        email: "renovamenzxh@gmail.com"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: "Edit this page on GitHub"
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        info: "信息",
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接"
        ],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏"
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true
    },

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, "../../packages/@vuepress")
        )
    },
    extractHeaders: {
      level: [2, 3, 4, 5]
    }
  }
});
