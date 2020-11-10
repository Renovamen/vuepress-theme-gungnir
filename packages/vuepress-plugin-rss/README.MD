# Vuepress Plugin RSS

RSS Plugin for Vuepress theme Gungnir, forked from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).


## Configuration

Update your `.vuepress/config.js`:

``` js
module.exports = {
    ...
    plugins: [
      ['vuepress-plugin-rss',
        {
          site_url: 'https://renovamen.ink',  // required
          copyright: 'Renovamen 2018-2020',  // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },  // optional
          // How much articles
          count: 20  // optional
        }
      ]
    ]
}
```

## License

MIT