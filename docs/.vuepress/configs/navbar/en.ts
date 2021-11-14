import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Docs",
    link: "/docs/"
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/"
  },
  {
    text: "GitHub",
    link: "https://github.com/Renovamen/vuepress-theme-gungnir"
  },
  {
    text: `v${version}`,
    children: [
      {
        text: "Changelog",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
      },
      {
        text: "v1.x",
        link: "https://v1.vuepress.vuejs.org"
      },
      {
        text: "v0.x",
        link: "https://v0.vuepress.vuejs.org"
      }
    ]
  }
];
