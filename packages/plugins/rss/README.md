# @renovamen/vuepress-plugin-rss

A plugin for adding RSS to [VuePress](https://vuepress.vuejs.org/) theme Gungnir, forked from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).

**This plugin is only guaranted to work on VuePress theme Gungnir. It may not work on other themes.**


&nbsp;

## Installation

```bash
yarn add @renovamen/vuepress-plugin-rss
# or
npm install @renovamen/vuepress-plugin-rss
```


&nbsp;

## Configuration

Configurate it in your `.vuepress/config.js`:

``` js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-rss', {
        site_url: 'https://zxh.io',  // (required)
        copyright: 'Renovamen 2018-2020',  // (optional)
        filter: (frontmatter) => { return [true|false] },  // posts filter (optional)
        count: 20  // how many articles (optional)
      }
    ]
  ]
}
```


&nbsp;

## License

[MIT](LICENSE)