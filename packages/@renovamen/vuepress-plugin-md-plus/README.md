# @renovamen/vuepress-plugin-md-plus

A plugin for enhancing Markdown in VuePress. Now the following features are supported:

- footnote (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
- mark (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-mark))


&nbsp;

## Usage

Install:

```bash
yarn add @renovamen/vuepress-plugin-md-plus
# or
npm install @renovamen/vuepress-plugin-md-plus
```

Then:

```js
module.exports = {
    plugins: [
        [
            '@renovamen/vuepress-plugin-md-plus', {
                'all': false,  // enable all features or not, this will rewrite all the following options
                'footnote': true,  // enable footnote or not
                'mark': true  //enable mark or not
            }
        ]
    ]
}
```

&nbsp;

## License

[MIT](LICENSE)