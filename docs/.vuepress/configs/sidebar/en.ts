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
        "/docs/advanced/comment.md",
        "/docs/advanced/analytics.md",
        "/docs/advanced/reading-time.md",
        "/docs/advanced/rss.md",
        "/docs/advanced/hitokoto.md",
        "/docs/advanced/icons.md"
      ]
    },
    {
      text: "Markdown Enhancements",
      children: [
        "/docs/md-enhance/math.md",
        "/docs/md-enhance/chart.md",
        "/docs/md-enhance/mermaid.md",
        "/docs/md-enhance/others.md"
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
