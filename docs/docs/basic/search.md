---
title: Search
date: 2022-03-12
---

## Built-in Search Component

The built-in search component of this theme is adapted from [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/reference/plugin/search.html), it only supports searching for **blog article** contents, which means searching for documentation article contents is not avaliable. It generates search index from your pages locally and loads the search index file when users enter your site, which means it doesn't require any external requests.

See [here](https://blog.zxh.io) for a demo (click the "Search" button in navbar).


### Navbar Options

#### searchText

- Type: `string`

- Default
  
  - en: `"Search"`
  - zh: `"搜索"`

- Details
  
  - Text of the search button in the navbar
  - Can be used as normal config, and can also be used in the [locales](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locales) option

- Example:

  ```js
  // .vuepress/config.js

  module.exports = {
    theme: gungnirTheme({
      // normal config
      searchText: "Search"
    })
  }
  ```

  or

  ```js
  // .vuepress/config.js

  module.exports = {
    theme: gungnirTheme({
      // locales option
      locales: {
        "/": {
          searchText: "Search"
        },
        "/zh/": {
          searchText: "搜索"
        }
      }
    })
  }
  ```


#### searchIcon

- Type: `string`

- Default: `"ri-search-2-line"`

- Details: Icon of the search button in the navbar

- Example:

  ```js
  // .vuepress/config.js

  module.exports = {
    theme: gungnirTheme({
      searchIicon: "bi-search"
    })
  }
  ```

- Also see: [Advanced > Icons](/docs/advanced/icons.md)


### Plugin Options

#### locales

- Type: `Record<string, { placeholder: string }>`

- Default: `"$ grep ..."`

- Details: The text of the search box in different locales

- Example:

  ```js
  // .vuepress/config.js

  module.exports = {
    theme: gungnirTheme({
      themePlugins: {
        search: {
          locales: {
            "/": {
              placeholder: "Search"
            },
            "/zh/": {
              placeholder: "搜索"
            }
          }
        }
      }
    })
  }
  ```

- Also see: [Guide > I18n](https://v2.vuepress.vuejs.org/guide/i18n.html)


#### hotKeys

- Type: `string[]`

- Default: `['s', '/']`

- Details:
  
  - Specify the [event.key](http://keycode.info/) of the hotkeys
  - When hotkeys are pressed, the search box input will be focused
  - Set to an empty array to disable hotkeys


#### maxSuggestions

- Type: `number`

- Default: `10`

- Details: Specify the maximum number of search results


#### isSearchable

- Type: `(page: Page) => boolean`

- Default: `() => true`

- Details:

  A function to determine whether a page should be included in the search index

  - Return `true` to include the page
  - Return `false` to exclude the page

- Example:

  ```js
  // .vuepress/config.js
  
  module.exports = {
    theme: gungnirTheme({
      themePlugins: {
        search: {
          // exclude a specified post
          isSearchable: (page) => page.path !== "/posts/2021-12-25-hello.html"
        }
      }
    })
  }
  ```

#### getExtraFields

- Type: `(page: Page) => string[]`

- Default: `() => []`

- Details:

  A function to add extra fields to the search index of a page.

  By default, this plugin will use page title and headers as the search index. This option could help you to add more searchable fields.

- Example:

  ```js
  // .vuepress/config.js
  
  module.exports = {
    theme: gungnirTheme({
      themePlugins: {
        search: {
          // allow searching the `tags` frontmatter
          getExtraFields: (page) => page.frontmatter.tags ?? []
        }
      }
    })
  }
  ```


### Styles

You can customize the style of the search component via CSS variables:

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


### Disable

Disable the built-in search component:

```js
// .vuepress/config.js
  
module.exports = {
  theme: gungnirTheme({
    themePlugins: {
      search: false
    }
  })
}
```


## VuePress Official Search Plugins

If you need support for documentation articles, consider [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/reference/plugin/search.html) or [@vuepress/plugin-docsearch](https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html). This theme will add search box to the navbar (see the top right-hand corner of this site) once you configure the plugin correctly. Before that, you may want to [disable](#disable) the built-in search component.

When using `@vuepress/plugin-search`, you may want to exclude Home, Tags and Links page:

```js
// .vuepress/config.js

const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  plugins: [
    searchPlugin({
      isSearchable: (page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout)
    })
  ]
}
```
