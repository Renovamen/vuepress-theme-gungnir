---
title: 介绍
date: 2020-10-18
---

Gungnir 是一个基于 [Jekyll](https://jekyllrb.com/) 的博客主题。同时我现在正在尝试开发它的 [VuePress 版本](/docs/vuepress-theme-gungnir)。

![theme-gungnir](/img/docs/gungnir.jpg)

Github: [Renovamen/jekyll-theme-gungnir](https://github.com/Renovamen/jekyll-theme-gungnir)

演示站点：[jekyll-theme-gungnir.vercel.app](https://jekyll-theme-gungnir.vercel.app/)


## 灵感来源

在 [Huxpro/huxpro.github.io](https://github.com/Huxpro/huxpro.github.io) 的基础上瞎改的的主题，同时~~照搬~~借鉴了很多其他主题的代码和设计，包括但不限于 [mashirozx/Sakura](https://github.com/mashirozx/Sakura/)、[kitian616/jekyll-TeXt-theme](https://github.com/kitian616/jekyll-TeXt-theme)、[Fechin/hexo-theme-diaspora](https://github.com/Fechin/hexo-theme-diaspora)、[liuzc/LeaveIt](https://github.com/liuzc/LeaveIt) 等（这么看来似乎也没多少东西是我自己写的了，逃）。

**Gungnir**，冈格尼尔，北欧神话中主神奥丁使用的用世界树树枝做成的武器，和本主题并没有什么关系但我就是用了这个名字。


## 特性

- 响应式
- 多级目录
- 可切换的首页大图
- 明亮和夜间模式：识别系统的外观设置并自动切换模式，也支持用户手动切换
- 搜索（使用了 [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)）
- 文章目录（使用了 [Tocbot](https://github.com/tscanlin/tocbot)）
- 基于 [Highlight.js](https://github.com/highlightjs) 的代码高亮渲染，还支持代码块全屏和光标所在行高亮（从 WordPress 主题 [Sakura](https://github.com/mashirozx/Sakura) 搬过来的功能）
- 支持在文章中使用 [Mathjax](https://github.com/mathjax/MathJax)、[Katex](https://github.com/KaTeX/KaTeX)、[Chart.js](https://github.com/chartjs/Chart.js) 和 [mermaid](https://github.com/mermaid-js/mermaid)
- 文章中的一些附加样式（提示和标签）
- 支持在文章中使用 emoji（使用了 [jemoji](https://github.com/jekyll/jemoji)）和其他表情（比如 B 站小电视）
- 评论（[Gitalk](https://github.com/gitalk/gitalk)、[Disqus](https://disqus.com/) 和 [Valine](https://github.com/xCss/Valine)）
- 关于、作品和友链页

继承自原主题的特性：

- PWA
- RSS
- 带标签的归档页
- 文章多语言
- 站点统计（[Google Analytics](https://analytics.google.com/) 和 [百度统计](https://tongji.baidu.com/)）