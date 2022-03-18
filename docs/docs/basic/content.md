---
title: Content
date: 2021-03-31
---

## Blog

### Front Matter

Blog posts will be shown on [home page](/). A post file should be identified by `layout: Post` in its front matter. An example front matter for a post looks like:

```yaml
---
layout: Post  # required
title: A Brief History of Time  # post title (required)
subtitle: From the Big Bang to Black Holes  # post subtitle (optional)
date: 2020-03-31  # publish date (optional)
author: Stephen Hawking  # post author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
useHeaderImage: true  # show header image in post or not (optional, default: false)
headerImage: /img/test.jpg  # path to the header image (required, even if `useHeaderImage` is false, becasue header image would also be shown on home page)
headerMask: rgba(40, 57, 101, .4)  # mask of the header image (optional)
catalog: false  # enable catalog or not, can rewrite `themeConfig.catalog` (optional, default: true)
hide: true  # hide this blog in the blog list of home page and tags page or not (optional, default: false)
tags:  # post tags (optional)
  - space
  - physics
---
```

:::warning
`title` will be used as the first-level heading in a post, so **DO NOT write a first-level heading in your post content**.
:::

:::tip
Posts that with `tags` item in front matter will be appear on [tags page](/tags/).
:::

### URL

If you would like the URL of a blog be shown in the form of `/post/year/month/day/post-title/`, just add this line to its front matter:

```yaml{5}
---
layout: Post
title: A Brief History of Time
date: 2020-03-31
permalinkPattern: /post/:year/:month/:day/:slug/
---
```

See [here](https://v2.vuepress.vuejs.org/reference/frontmatter.html#permalinkpattern) for more details.


:::warning
When using this permalink pattern, you must **specify the date** in front matter or filename/dirname. See [here](https://v2.vuepress.vuejs.org/reference/frontmatter.html#permalinkpattern) for more details.
:::


### Excerpt

In a blog markdown file, any content above the `<!-- more -->` comment will be extracted, rendered as excerpt and displayed on the home page.



## Documentation

Gungnir can also be used for writing documentation, refer to [Documentation of VuePress](https://v2.vuepress.vuejs.org/guide/) for basic usage.

An example front matter for a documentation page looks likes:

```yaml
---
title: A Brief History of Time  # title (required)
date: 2020-03-31  # publish date (optional)
author: Stephen Hawking  # author (optional, will use `themeConfig.personalInfo.name` as default if it is not specified)
---
```

:::warning
Again, `title` will be used as the first-level heading in a documentation page, so **DO NOT write a first-level heading in your documentation content**.
:::


## Markdown Syntax

See:

- [Markdown Baisc Syntax](https://www.markdownguide.org/basic-syntax/)
- [VuePress's Markdown Extensions](https://v2.vuepress.vuejs.org/guide/markdown.html)
- [Gungnir's Markdown Extensions](/docs/advanced/features/)

Here are some showcases of the [custom containers](https://v2.vuepress.vuejs.org/reference/plugin/container.html) supported by Gungnir by default:

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
