---
title: Installation
date: 2020-10-18
---

Create a new project `blog` (or any other name you want):

```bash
mkdir blog && cd blog
yarn init  # or: npm init
```

Install VuePress and theme Gungnir:

<code-group>
<code-block title="YARN" active>
```bash
yarn add -D vuepress vuepress-theme-gungnir
```
</code-block>

<code-block title="NPM">
```bash
npm install -D vuepress vuepress-theme-gungnir
```
</code-block>
</code-group>

Build your directory structure follow the guide of [VuePress's official documentation](https://vuepress.vuejs.org/guide/) and specify this theme in `.vuepress/config.js`:

```js{3}
module.exports = {
    ...
    theme: 'gungnir'
}
```
