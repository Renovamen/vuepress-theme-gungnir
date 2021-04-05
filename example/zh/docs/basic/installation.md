---
title: 安装
date: 2020-10-18
---

创建一个项目 `blog`（或者叫别的什么名字）：

```bash
mkdir blog && cd blog
yarn init  # or: npm init
```

安装 VuePress 和主题 Gungnir：

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

参考 [VuePress 文档](https://vuepress.vuejs.org/guide/) 搭建目录结构，然后在 `.vuepress/config.js` 中指定主题：

```js{3}
module.exports = {
    ...
    theme: 'gungnir'
}
```
