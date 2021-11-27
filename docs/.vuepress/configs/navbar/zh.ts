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
    text: `v${version}`,
    children: [
      {
        text: "GitHub",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir"
      },
      {
        text: "更新日志",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/CHANGELOG.md"
      },
      {
        text: "v2.x",
        link: "/docs/"
      },
      {
        text: "v0.x",
        link: "https://vuepress-theme-gungnir.vercel.app"
      }
    ]
  }
];
