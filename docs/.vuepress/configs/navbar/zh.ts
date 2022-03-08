import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const zh: NavbarConfig = [
  {
    text: "首页",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "标签",
    link: "/tags/",
    icon: "fa-tag"
  },
  {
    text: "链接",
    link: "/links/",
    icon: "fa-satellite-dish"
  },
  {
    text: "文档",
    link: "/zh/docs/basic/intro.md",
    icon: "ri-book-2-fill"
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/zh/",
    icon: "ri-vuejs-line"
  },
  {
    text: `v${version}`,
    icon: "co-git",
    children: [
      {
        text: "GitHub",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir",
        icon: "ri-github-line"
      },
      {
        text: "更新日志",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/CHANGELOG.md",
        icon: "oi-git-compare"
      },
      {
        text: "v2.x",
        link: "/zh/docs/intro.md",
        icon: "oi-rocket"
      },
      {
        text: "v0.x",
        link: "https://vuepress-theme-gungnir.vercel.app",
        icon: "ri-sailboat-line"
      }
    ]
  }
];
