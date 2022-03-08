import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const en: NavbarConfig = [
  {
    text: "Home",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "Tags",
    link: "/tags/",
    icon: "fa-tag"
  },
  {
    text: "Links",
    link: "/links/",
    icon: "fa-satellite-dish"
  },
  {
    text: "Docs",
    link: "/docs/basic/intro.md",
    icon: "ri-book-2-fill"
  },
  {
    text: "VuePress",
    link: "https://v2.vuepress.vuejs.org/",
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
        text: "Changelog",
        link: "https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/CHANGELOG.md",
        icon: "oi-git-compare"
      },
      {
        text: "v2.x",
        link: "/docs/intro.md",
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
