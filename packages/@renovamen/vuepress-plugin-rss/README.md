# @renovamen/vuepress-plugin-rss

RSS Plugin for Vuepress theme Gungnir, forked from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).

&nbsp;

## Configuration

Update your `.vuepress/config.js`:

``` js
module.exports = {
  ...
  plugins: [
    [
      '@renovamen/vuepress-plugin-rss', {
        site_url: 'https://renovamen.ink',  // (required)
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