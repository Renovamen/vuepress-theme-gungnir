import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  "/zh/docs/": [
    {
      text: "基础",
      children: ["/zh/docs/README.md"]
    },
    {
      text: "插件",
      children: [
        "/zh/docs/plugins/README.md",
        "/zh/docs/plugins/giscus.md",
        "/zh/docs/plugins/chart.md",
        "/zh/docs/plugins/mermaid.md",
        "/zh/docs/plugins/katex.md",
        "/zh/docs/plugins/reading-time.md"
      ]
    }
  ]
};
