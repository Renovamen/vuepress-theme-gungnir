import type { SidebarConfig } from "vuepress-theme-gungnir";

export const en: SidebarConfig = {
  "/docs/": [
    {
      text: "Basic",
      children: ["/docs/intro.md"]
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
        "/docs/plugins/md-plus.md"
      ]
    }
  ]
};
