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
        "/zh/docs/advanced/comment.md",
        "/zh/docs/advanced/analytics.md",
        "/zh/docs/advanced/reading-time.md",
        "/zh/docs/advanced/rss.md",
        "/zh/docs/advanced/hitokoto.md",
        "/zh/docs/advanced/icons.md"
      ]
    },
    {
      text: "Markdown 拓展语法",
      children: [
        "/zh/docs/md-enhance/math.md",
        "/zh/docs/md-enhance/chart.md",
        "/zh/docs/md-enhance/mermaid.md",
        "/zh/docs/md-enhance/others.md"
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
