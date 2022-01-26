import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const zh: NavbarConfig = [
  {
    text: "首页",
    link: "/",
    icon: "fort-awesome"
  },
  {
    text: "标签",
    link: "/tags/",
    icon: "tag"
  },
  {
    text: "链接",
    link: "/links/",
    icon: "satellite-dish"
  },
  {
    text: "文档",
    link: "/zh/docs/",
    icon: "book",
    iconScale: 1.1
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/zh/",
    icon: "vuejs",
    iconScale: 1.1
  },
  {
    text: `v${version}`,
    icon: "git",
    iconScale: 1.05,
    children: [
      {
        text: "GitHub",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir",
        icon: "github-line",
        iconScale: 1.1
      },
      {
        text: "更新日志",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/CHANGELOG.md",
        icon: "compare"
      },
      {
        text: "v2.x",
        link: "/docs/",
        icon: "rocket",
        iconScale: 0.9
      },
      {
        text: "v0.x",
        link: "https://vuepress-theme-gungnir.vercel.app",
        icon: "boat"
      }
    ]
  }
];
