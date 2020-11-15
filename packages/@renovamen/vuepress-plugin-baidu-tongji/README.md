# @renovamen/vuepress-plugin-baidu-tongji

A plugin for adding Baidu Tongji to VuePress. This plugin is based on [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)


&nbsp;

## Usage

Install:

```bash
yarn add @renovamen/vuepress-plugin-baidu-tongji
# or
npm install @renovamen/vuepress-plugin-baidu-tongji
```

Then:

```js
module.exports = {
    plugins: [
        [
            '@renovamen/vuepress-plugin-baidu-tongji', {
                'ba': ''
            }
        ]
    ]
}
```

`ba` is your tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login).


&nbsp;

## License

[MIT](LICENSE)