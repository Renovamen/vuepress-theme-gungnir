import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const zh: NavbarConfig = [
  {
    text: "首页",
    link: "/zh/"
  },
  {
    text: "文档",
    link: "/zh/docs/"
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/zh/"
  },
  {
    text: "GitHub",
    link: "https://github.com/Renovamen/vuepress-theme-gungnir"
  },
  {
    text: `v${version}`,
    children: [
      {
        text: "更新日志",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
      },
      {
        text: "v1.x",
        link: "https://v1.vuepress.vuejs.org/zh/"
      },
      {
        text: "v0.x",
        link: "https://v0.vuepress.vuejs.org/zh/"
      }
    ]
  }
];
