---
title: 安装
date: 2020-10-18
---

从 GitHub 克隆项目：

```bash
git clone https://github.com/Renovamen/jekyll-theme-gungnir.git
cd jekyll-theme-gungnir
```

本地运行主题需要参考[这里](https://jekyllrb.com/docs/installation/)安装 Ruby 和 Jekyll。然后安装依赖包：

```bash
bundle config set path 'vendor/bundle'
bundle install
```

然后即可本地预览：

```bash
bundle exec jekyll serve --watch
```

如果想要改动代码，你可能需要 [Node.js](https://nodejs.org/en/)，并安装 [Grunt](https://gruntjs.com/)（用于压缩 js 文件）：

```bash
npm install
```

然后：

```bash
npm run dev
```