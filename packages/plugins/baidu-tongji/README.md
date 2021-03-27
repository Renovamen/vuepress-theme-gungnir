# @renovamen/vuepress-plugin-baidu-tongji

A plugin for adding Baidu Tongji to VuePress. It is edited from [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html).


&nbsp;

## Install

```bash
yarn add @renovamen/vuepress-plugin-baidu-tongji
# or
npm install @renovamen/vuepress-plugin-baidu-tongji
```


&nbsp;

## Usage

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': 'your-tracking-code'
      }
    ]
  ]
}
```

`ba` is your tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login).


&nbsp;

## License

[MIT](LICENSE)
