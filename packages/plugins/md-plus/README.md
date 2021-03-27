# @renovamen/vuepress-plugin-md-plus

A plugin for enhancing Markdown in VuePress. Now the following features are supported:

- footnote (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
- mark (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-mark))

[Demo](https://vuepress-theme-gungnir.vercel.app/zh/docs/plugins/md-plus.html)


&nbsp;

## Usage

Install:

```bash
yarn add @renovamen/vuepress-plugin-md-plus
# or
npm install @renovamen/vuepress-plugin-md-plus
```


&nbsp;

## Configuration

Then configure it in your `.vuepress/config.js`:

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

## Usage

### Footnote

Add footnotes for text[^1]

[^1]: Write your footnote here.

### Mark

Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."


&nbsp;

## License

[MIT](LICENSE)
