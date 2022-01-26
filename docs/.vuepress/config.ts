import { defineUserConfig } from "@vuepress/cli";
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";
import { zh } from "vuepress-theme-gungnir/lib/node/i18n";
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
    // use vite by default
    "@vuepress/vite",

  theme: "vuepress-theme-gungnir",

  title: "vuepress-theme-gungnir",

  themeConfig: {
    repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "docs",

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
        email: "renovamenzxh@gmail.com",
        rss: "/rss.xml",
        // customized sns
        bilibili: {
          icon: "bilibili",
          iconScale: 1.15,
          link: "https://www.bilibili.com/"
        }
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

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

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
        sidebar: sidebar.en
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // i18n
        ...zh
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: "This-is-an-Apple/gitalk-comments",
        repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
        category: "Announcements",
        categoryId: "DIC_kwDODIxYNs4CAO1u"
      },
      mdPlus: {
        all: true
      },
      ga: "G-EE8M2S3MPB",
      ba: "10b7bc420625758a319d6b23aed4700f",
      rss: {
        siteURL: "https://v2.vuepress-theme-gungnir.vercel.app",
        copyright: "Renovamen 2018-2022"
      },
      pwa: true
    },

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
