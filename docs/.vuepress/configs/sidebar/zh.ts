import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  "/zh/docs/": [
    {
      text: "基础",
      children: [
        "/zh/docs/basic/intro.md",
        "/zh/docs/basic/installation.md",
        "/zh/docs/basic/config.md",
        "/zh/docs/basic/search.md",
        "/zh/docs/basic/content.md"
      ]
    },
    {
      text: "进阶",
      children: [
        "/zh/docs/advanced/features.md",
        "/zh/docs/advanced/markdown.md",
        "/zh/docs/advanced/icons.md"
      ]
    },
    {
      text: "拓展",
      children: [
        "/zh/docs/extension/resource.md",
        "/zh/docs/extension/deploy.md"
      ]
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
        "/zh/docs/plugins/md-plus.md",
        "/zh/docs/plugins/rss.md"
      ]
    }
  ]
};
