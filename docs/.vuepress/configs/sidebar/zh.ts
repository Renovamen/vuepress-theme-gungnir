import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  "/zh/docs/": [
    {
      text: "基础",
      children: ["/zh/docs/basic/intro.md"]
    },
    {
      text: "插件",
      children: [
        "/zh/docs/plugins/intro.md",
        "/zh/docs/plugins/giscus.md",
        "/zh/docs/plugins/chart.md",
        "/zh/docs/plugins/mermaid.md",
        "/zh/docs/plugins/katex.md",
        "/zh/docs/plugins/reading-time.md",
        "/zh/docs/plugins/baidu-tongji.md",
        "/zh/docs/plugins/md-plus.md"
      ]
    }
  ]
};
