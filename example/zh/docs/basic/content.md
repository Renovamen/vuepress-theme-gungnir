---
title: 内容
date: 2021-03-31
---

## 博客

博客会在[首页](/)显示。所有博客都需要放在 `posts/` 文件夹下，文件名格式为 `${年}-${月}-${日}-${随便什么名字}.md`，如 `2020-03-31-a-brief-history-of-time`，然后该博客会被渲染在网站的 `/post/2020/03/31/a-brief-history-of-time/` 路径下。

然后需要配置它的 `front-matter`：

```yaml
---
title: A Brief History of Time  # 博客标题（必须）
subtitle: From the Big Bang to Black Holes  # 博客副标题（可选）
date: 2020-03-31  # 博客日期，会显示在文章头部（可选）
author: Stephen Hawking  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
header_style: image  # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）
header_img: /img/test.jpg  # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）
header_mask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
catalog: true  # 是否启用右侧目录：false / true（可选，默认为 false）
tags:  # 博客标签
  - space
  - physics
---
```

:::warning
`title` 会作为一级标题在博客中显示，所以**不需要在博客正文中写一级标题**。
:::

:::tip
`front-matter` 中有 `tags` 项的博客会在[标签页](/tags/)显示。
:::


## 文档

同时本主题也保留了 VuePress 的文档功能，基本的使用方法及侧边栏配置方法请参考[VuePress 文档](https://v1.vuepress.vuejs.org/zh/guide/)。

文档的 `front-matter` 格式为：

```yaml
---
title: A Brief History of Time  # 文档标题（必须）
date: 2020-03-31  # 文档日期，会显示在文章头部（可选）
author: Stephen Hawking  # 文档作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
---
```

:::warning
同样，`title` 会作为一级标题在文档中显示，所以也**不需要在文档正文中写一级标题**。
:::


## Markdown 语法

请参考：

- [Markdown 原生语法](https://www.markdownguide.org/basic-syntax/)
- [VuePress 的 Markdown 拓展语法](https://v1.vuepress.vuejs.org/zh/guide/markdown.html)
- [本主题的 Markdown 拓展语法](/zh/docs/advanced/features/)

这里展示一下本主题默认支持的[容器](https://v1.vuepress.vuejs.org/zh/guide/markdown.html#自定义容器)用法：

::: info
This is an info message.
:::

::: tip
This is a tip message.
:::

::: warning
This is a warning message.
:::

::: danger
This is a dangerous warning message.
:::

::: details Show me the code.
```cpp
cout << "Hello World!" << "\n";
```
:::
