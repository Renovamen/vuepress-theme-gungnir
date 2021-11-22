---
title: Content
date: 2021-03-31
---

## Blog

Blog posts will be shown on [home page](/). The post files should be placed under `posts/` directory and the file name format of which should be `${year}-${month}-${day}-${any title you like}.md`, for example, `2020-03-31-a-brief-history-of-time`. Then this post can be access by url `post/2020/03/31/a-brief-history-of-time/`.

The `front-matter` of a post should be like this:

```yaml
---
title: A Brief History of Time  # post title (required)
subtitle: From the Big Bang to Black Holes  # post subtitle (optional)
date: 2020-03-31  # publish date, will be shown on the head of the article (optional)
author: Stephen Hawking  # post author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
header_style: image  # show header image in post or not: `image` (yes) / `text` (no) (optional, default: `text`)
header_img: /img/test.jpg  # path to the header image (required, even if `header_style` is `text`, becasue header image should also be shown on home page)
header_mask: rgba(40, 57, 101, .4)  # mask of the header image (optional)
catalog: true  # enable catalog or not: false / true (optional, default: false)
tags:  # post tags
  - space
  - physics
---
```

:::warning
`title` will be used as the first-level heading in a post, so **DO NOT write a first-level heading in your post content**.
:::

:::tip
Posts that with `tags` item in `front-matter` will be appear on [tags page](/tags/).
:::


## Documentation

Gungnir can also be used for writing documentation, refer to [Documentation of VuePress](https://v1.vuepress.vuejs.org/guide/) for basic usage.

The `front-matter` of a documentation page should be like this:

```yaml
---
title: A Brief History of Time  # title (required)
date: 2020-03-31  # publish date, will be shown on the head of the article (optional)
author: Stephen Hawking  # author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
---
```

:::warning
Again, `title` will be used as the first-level heading in a documentation page, so **DO NOT write a first-level heading in your documentation content**.
:::


## Markdown Syntax

See:

- [Markdown Baisc Syntax](https://www.markdownguide.org/basic-syntax/)
- [VuePress's Markdown Extensions](https://v1.vuepress.vuejs.org/guide/markdown.html)
- [Gungnir's Markdown Extensions](/docs/advanced/features/)

Here are some showcases of the custom containers supported by Gungnir by default:

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
