---
title: 搜索
date: 2022-03-12
---

## 内置搜索

主题内置的搜索组件修改自 [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html)，它只支持搜索**博客文章**（即不支持文档文章）。它在本地生成你的博客文章的搜索索引，然后在用户访问站点时加载搜索索引文件，即它不会进行任何外部请求。

效果可以参考[这里](https://zxh.io)（点击导航栏的 Search）。


### 配置项

#### locales

- 类型：`Record<string, { placeholder: string }>`

- 默认值：`"$ grep ..."`

- 详情：搜索框在不同 locales 下的文字

- 示例：

  ```js
  // .vuepress/config.js

  module.exports = {
    themeConfig: {
      search: {
        locales: {
          "/": {
            placeholder: "Search"
          },
          "/zh/": {
            placeholder: "搜索"
          },
        }
      }
    }
  }
  ```

- 参考：[指南 > 多语言支持](https://v2.vuepress.vuejs.org/zh/guide/i18n.html)


#### icon

- 类型：`string`

- 默认值：`"ri-search-2-line"`

- 详情：在导航栏显示的搜索图标，需要提前引入

- 示例：

  ```js
  // .vuepress/config.js

  module.exports = {
    themeConfig: {
      search: {
        icon: "bi-search"
      }
    }
  }
  ```

- 参考：[进阶 > 图标支持](/zh/docs/advanced/icons.md)


#### hotKeys

- 类型：`string[]`

- 默认值：`['s', '/']`

- 详情
  
  - 指定热键的 [event.key](http://keycode.info/) ，当按下热键时，搜索框会被聚焦

  - 将该配置项设为空数组可以禁用热键功能


#### maxSuggestions

- 类型：`number`

- 默认值：`10`

- 详情：指定搜索结果的最大条数


#### isSearchable

- 类型：`(page: Page) => boolean`

- 默认值：`() => true`

- 详情：

  一个函数，用于判断一个页面是否应该被包含在搜索索引中

  - 返回 `true` 来包含该页面。
  - 返回 `false` 来排除该页面。

- 示例：

  ```js
  // .vuepress/config.js

  module.exports = {
    themeConfig: {
      search: {
        // 排除特定博客文章
        isSearchable: (page) => page.path !== "/posts/2021-12-25-hello.html"
      }
    }
  }
  ```

#### getExtraFields

- 类型：`(page: Page) => string[]`

- 默认值：`() => []`

- 详情：

  一个函数，用于在页面的搜索索引中添加额外字段。

  默认情况下，该插件会将页面标题和小标题作为搜索索引。该配置项可以帮助你添加更多的可搜索字段。

- 示例：

  ```js
  // .vuepress/config.js

  module.exports = {
    themeConfig: {
      search: {
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page) => page.frontmatter.tags ?? []
      }
    }
  }
  ```


### 样式

你可以通过 CSS 变量来自定义搜索界面的样式：

```css
.search-page {
  --search-bg-color: white;
  --search-accent-color: #377bb5;
  --search-text-color: #2c3e50;
  --search-item-title-color: #2c3e50;
  --search-item-subtitle-color: #7f7f7f;
  --searc-page-z-index: 100;
}
```


### 禁用

如果你需要禁用本主题的默认搜索组件：

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    search: false
  }
}
```


## VuePress 官方搜索插件

如果你有搜索文档文章的需求，可以考虑使用官方搜索插件 [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html) 或 [@vuepress/plugin-docsearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html)。按照官方文档上的方式安装和配置即可，配置完后本主题会把搜索框添加到导航栏，效果参考本站右上角。同时你可能会想要[禁用](#禁用)默认搜索组件。

在使用 `@vuepress/plugin-search` 时，你可能会想要排除掉首页、标签页和链接页：

```js
// .vuepress/config.js

module.exports = {
  plugins: [
    [
      "@vuepress/plugin-search", {
        isSearchable: (page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout)
      }
    ]
  ]
}
```
