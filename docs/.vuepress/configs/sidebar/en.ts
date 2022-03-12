import type { SidebarConfig } from "vuepress-theme-gungnir";

export const en: SidebarConfig = {
  "/docs/": [
    {
      text: "Basic",
      children: [
        "/docs/basic/intro.md",
        "/docs/basic/installation.md",
        "/docs/basic/config.md",
        "/docs/basic/search.md",
        "/docs/basic/content.md"
      ]
    },
    {
      text: "Advanced",
      children: [
        "/docs/advanced/features.md",
        "/docs/advanced/markdown.md",
        "/docs/advanced/icons.md"
      ]
    },
    {
      text: "Plugins",
      children: [
        "/docs/plugins/intro.md",
        "/docs/plugins/giscus.md",
        "/docs/plugins/chart.md",
        "/docs/plugins/mermaid.md",
        "/docs/plugins/katex.md",
        "/docs/plugins/reading-time.md",
        "/docs/plugins/baidu-tongji.md",
        "/docs/plugins/md-plus.md",
        "/docs/plugins/rss.md"
      ]
    }
  ]
};
