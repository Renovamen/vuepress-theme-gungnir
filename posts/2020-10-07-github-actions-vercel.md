---
layout: post
title: 关于博客的碎碎念
subtitle: 部署、优化以及乱七八糟的事
author: "Renovamen"
date: 2020-10-07
header_img: /img/in-post/2020-10-07/header.jpg
header_style: text
catalog: true
tags:
  - 摸鱼
---

“虽然研究进度堪忧，但鱼还是要摸的”，在这样的理念的驱动下，菜鸡最终折腾出了一个目前看上去还算可以的方案。

<!-- more -->

我的博客最初 fork 自 [Huxpro/huxpro.github.io](Huxpro/huxpro.github.io)，用了一段时间之后开始瞎改，把别人干净的代码改得乱七八糟。博客用的是 Jekyll 框架，而 Jekyll 就是 Github Pages 的默认引擎，所以在部署的时候 Github Pages 连 build 这一步都帮你省了。于是在很长一段时间内，作为一只懒惰的菜鸡，我并没有什么动力来折腾这些东西。而现在之所以要折腾，是因为不折腾的确不行了。

::: warning WARNING
不过你们现在看到的博客已经是用 VuePress 重写过后的版本了...
:::


## 奇怪的起因

说起来这还是一个漫长的故事。首先我的博客的公式渲染引擎用的是 [Katex](https://katex.org/)，因为它快，比 Mathjax 快多了（可以参考[这里](https://katex.org/)）。

kramdown 的默认数学公式渲染引擎是 Mathjax，而从 `v2.0.0` 开始 kramdown 似乎引入了一些插件来支持 Katex，比如 [kramdown-math-katex](https://github.com/kramdown/math-katex)。那么问题来了，Github Pages 的 Jekyll 是不支持除了[这些插件](https://pages.github.com/versions/)以外的插件的。那么唯一的办法就只有在本地 build 网站，然后把 build 好的文件 push 到 `gh-pages` 分支上去。

不行，这样多麻烦，Jekyll 的天生优势不就没了吗，不然我为啥不用 Hexo 或者 Hugo，它们还比 Jekyll 快，不行不行。

那个时候还没有 Github Actions 这种东西，我又完全不知道别的持续集成方案，就算知道了估计也不想去折腾。于是我在[这里](https://xuc.me/blog/katex-and-jekyll/)看到了一个比较 hack 的方法，首先让 kramdown 以为我们要用 Mathjax：

```yaml
markdown: kramdown    
kramdown:
  math_engine: mathjax
```

这样 kramdown 就会把像 `$$a + b$$` 这样的公式转换成 Mathjax 能识别的 HTML 形式：

```html
<script type="math/tex">a + b</script>
```

然后通过 JavaScript 把 `<script type="math/tex">` 标签里的东西用 Katex 渲染出来：

```js
$("script[type='math/tex']").replaceWith(function() {
  var tex = $(this).text();
  return katex.renderToString(tex, {
    displayMode: false
  });
});

$("script[type='math/tex; mode=display']").replaceWith(function() {
  var tex = $(this).html();
  return katex.renderToString(tex.replace(/%.*/g, ''), {
    displayMode: true
  });
});
```

虽然看上去不太优雅，但好歹能用，本菜鸡的理念是能用就行，于是就这样过了一段时间。直到几个月前，我发现我博客的公式不对劲了，它们突然都变成了这样：`\(a + b\)`。

我一脸懵逼，第一反应是我是不是又把博客哪儿的代码搞崩了，但想了想我似乎也有动过公式那部分的代码？而且当时我部署在 Coding Pages 上的博客公式还是正常的，那么大概率就是 Github Pages 哪里不对劲了。

搜了一下发现 Github Pages 把 kramdown 的版本更新到了 `v2.2.0`，从这一版开始，为了兼容 Mathjax `v3.x`，kramdown 会把 inline math 转换成 `\(a + b\)` 的形式，把 block math 转换成 `\[a + b\]` 的形式（参考[这个 commit](https://github.com/gettalong/kramdown/commit/c3acf8df1db49d2456050f4456f3f542294e2e8f)），于是上面那段脚本就坏掉了。

于是一切都回到了最初的起点，摆在面前的办法只剩下把在本地用 kramdown `v2.1.0` build 好的网站扔 `gh-pages` 上去。这样干了几个月后懒惰的我实在忍不了了，并决定让 Github Actions 来帮我干这件事。

所以我当初为啥不选 Hexo...

## Github Actions

在 repo 下建一个目录 `.github/workflow`，在这个目录下放一个 `.yaml` 格式的 workflow 文件。GitHub 只要发现 `.github/workflows` 下有 `.yaml` 文件，就会自动运行它们。[这里](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)是 workflow 文件的详细文档。

[Jekyll 官方](https://jekyllrb.com/docs/continuous-integration/github-actions/)已经给了一个现成的 [action](https://github.com/helaili/jekyll-action)，直接引用它就好：


```yaml
name: build Jekyll site and deploy it to GitHub Pages

# 检测 master 分支上的推送和 pr
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  jekyll-build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v2
      
      # 检测 vendor/bundle 下有没有已经安装好的包
      # 如果有的话就不用再 bundle install 了，节省时间和资源
      - name: check cache
        uses: actions/cache@v1
        with:
          path: vendor/bundle
          key: runner.os−gems−{%raw%}{{ hashFiles('**/Gemfile.lock') }}{% endraw %}
          restore-keys: |
            ${{ runner.os }}-gems-
      
      # 引用 helaili/jekyll-action 来打包 Jekyll 网站
      # 并把打包好的文件推到同一个 repo 的 gh-pages 分支
      - name: build and deploy
        uses: helaili/jekyll-action@2.0.4
        env:
          JEKYLL_PAT: ${{ secrets.GITHUB_TOKEN }}
        with:
          target_branch: 'gh-pages'
```


相当于这个 workflow 会自动检测 `master` 分支上的 push 和 pull_request，一旦检测就到准备环境，然后运行 `bundle exec jekyll build` 打包网站，并把打包产物扔 `gh-pages` 分支上去。

需要注意的是必须得有一个 `Gemfile` 和 `Gemfile.lock` 文件，`Gemfile` 里面写上要装的包，比如本博客的 `Gemfile` 长这样：

```ruby
source 'https://rubygems.org'

gem 'jekyll', '~> 4.0'
gem 'kramdown', '= 2.1.0'  # 这里为了 Katex 把 kramdown 版本固定在了 2.1.0
gem 'jemoji', '~> 0.11.1'
gem 'jekyll-paginate', '~> 1.1.0'
```

如果用了自定义域名，那就还需要在 `master` 分支放一个 `CNAME`，这样 [helaili/jekyll-action](https://github.com/helaili/jekyll-action) 就会把 `CNAME` 也推到 `gh-pages` 分支去。直接在 `gh-pages` 分支加 `CNAME` 是没有什么用的，因为下次自动推送时它就会被清掉...

## Vercel

我一直以来都在听说双线部署甚至多线部署这种提高访问速度的操作，但一直没有去折腾。因为 Github Pages 虽然国内访问慢了点，但至少还是能访问的，那么能用就行了。直到几个月前，我发现 Github Pages 国内完全访问不上了...

好的好的行吧双线部署我来了...

那时候我所知的有境内节点的静态网站托管服务就 [Gitee Pages](https://gitee.com/help/articles/4136) 和 [Coding Pages](https://help.coding.net/docs/devops/cd/static-website.html) 俩，而 Gitee Pages 不能免费自定义域名，于是就把境内的线路解析到了 Coding Pages 上。

直到不久之前，我发现新版 Coding Pages 的静态网站合并到腾讯云静态网站，并开始收费了...之前旧版的静态网站表面上看上去好像还能正常部署，实际上并不能访问了。

于是就手忙脚乱的把境内线路的博客扔到了 Vercel 上。只能说 Vercel 至少到目前为止的确是真香，有境内节点，而且是直接从 Github 仓库上拉代码然后自动给你部署，对菜鸡相当友好。

以前为啥就没发现呢。