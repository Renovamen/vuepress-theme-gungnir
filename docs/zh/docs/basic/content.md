---
title: 内容
date: 2021-03-31
---

## 博客文章

### Front Matter

博客文章会在[首页](/)显示。所有博客文章都需要在 front matter 里加上 `layout: Post`。

博客文章的 front matter 的格式为：

```yaml
---
layout: Post  # 必须
title: 时间简史  # 博客标题（必须）
subtitle: 从大爆炸到黑洞  # 博客副标题（可选）
date: 2020-03-31  # 博客发表日期（可选）
author: 斯蒂芬·霍金  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/test.jpg  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
hide: true  # 是否在首页和标签页博客列表中隐藏这篇博客（可选，默认：false）
tags:  # 博客标签（可选）
  - 宇宙
  - 物理
---
```

:::warning
`title` 会作为一级标题在博客中显示，所以**不需要在博客正文中写一级标题**。
:::

:::tip
`front-matter` 中有 `tags` 项的博客会在[标签页](/tags/)显示。
:::

### URL

如果你希望博客文章的 URL 格式为 `/post/year/month/day/post-title/`，请在 front matter 里添加 `permalinkPattern` 项：

```yaml{5}
---
layout: Post
title: A Brief History of Time
date: 2020-03-31
permalinkPattern: /post/:year/:month/:day/:slug/
---
```

更多细节请参考[这里](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#permalinkpattern)。

:::warning
如果配置了这个 permalinkPattern，就必须通过博客文章的 front matter 或文件名/目录名**指定 date（博客发表日期）**。具体细节请参考[这里](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#permalinkpattern)。
:::

### 摘要

文章中 `<!-- more -->` 以上部分会被当作摘要，摘要会在首页文章流中显示。


## 文档文章

同时本主题也保留了 VuePress 的文档功能，基本的使用方法及侧边栏配置方法请参考 [VuePress 文档](https://v2.vuepress.vuejs.org/zh/guide/)。

文档文章的 `front-matter` 格式为：

```yaml
---
title: 时间简史  # 文档标题（必须）
date: 2020-03-31  # 文档日期，会显示在文章头部（可选）
author: 斯蒂芬·霍金  # 文档作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
---
```

:::warning
同样，`title` 会作为一级标题在文档中显示，所以也**不需要在文档正文中写一级标题**。
:::


## Markdown 语法

请参考：

- [Markdown 原生语法](https://www.markdownguide.org/basic-syntax/)
- [VuePress 的 Markdown 拓展语法](https://v1.vuepress.vuejs.org/zh/guide/markdown.html)
- [本主题的 Markdown 拓展语法](/zh/docs/advanced/markdown/)


## 容器

### 链接卡片容器

本主题新增了链接卡片容器。


#### 语法

```md
::: link {Icon Name | Image URL} [title](url)
description
:::
```

示例:

::: link [介绍](/zh/docs/basic/intro.html)
vuepress-theme-gungnir Introduction
:::

::: link {fa-github-alt} [vuepress-theme-gungnir](https://github.com/Renovamen/vuepress-theme-gungnir)
A blog theme for VuePress 2.
:::

::: link {/img/links/me.png} [My Blog](https://blog.zxh.io)
My blog 🧐, powered by VuePress 2, themed by Gungnir.
:::

```md
::: link [介绍](/zh/docs/basic/intro.html)
vuepress-theme-gungnir Introduction
:::

::: link {fa-github-alt} [vuepress-theme-gungnir](https://github.com/Renovamen/vuepress-theme-gungnir)
A blog theme for VuePress 2.
:::

::: link {/img/links/me.png} [My Blog](https://blog.zxh.io)
My blog 🧐, powered by VuePress 2, themed by Gungnir.
:::
```

#### 配置

如果你不需要再链接卡片中显示域名:

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    themePlugins: {
      container: {
        link: {
          siteDomain: false  // 可选，默认："true"
        }
      }
    }
  })
}
```

<img src="/img/docs/link-card-without-site-domain.png" width="370px" style="margin-left: 0" alt="link-card-without-site-domain" />

或者想要关闭该功能:

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    themePlugins: {
      container: {
        link: false  // 可选，默认："true"
      }
    }
  })
}
```


### 其他容器

这里展示一下本主题默认支持的[容器](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html)用法：

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
