import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
    icon: "fort-awesome"
  },
  {
    text: "Tags",
    link: "/tags/",
    icon: "tag"
  },
  {
    text: "Links",
    link: "/links/",
    icon: "satellite-dish"
  },
  {
    text: "Docs",
    link: "/docs/",
    icon: "book",
    iconScale: 1.1
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/",
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
        text: "Changelog",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/v2/packages/theme/CHANGELOG.md",
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
