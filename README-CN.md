# Gungnir

[![npm](https://img.shields.io/npm/v/vuepress-theme-gungnir.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-theme-gungnir) [![docs](https://img.shields.io/badge/Docs-Gungnir-26A2FF?style=flat-square)](https://vuepress-theme-gungnir.vercel.app/docs/) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

一个基于 [VuePress](https://vuepress.vuejs.org/) 的博客主题。同时[这里](https://github.com/Renovamen/jekyll-theme-gungnir)还有一个它的 [Jekyll](https://jekyllrb.com/) 版本。

---

**提示：** 我正在开发基于 [VuePress 2](https://v2.vuepress.vuejs.org/) 的 [Gungnir v2](https://github.com/Renovamen/vuepress-theme-gungnir/tree/v2) 版本。因此 Gungnir v0 应该不会再有除了 bug 修复以外的更新。

---

**Gungnir**，冈格尼尔，北欧神话中主神奥丁使用的用世界树树枝做成的武器，和本主题没有半毛钱关系但我就是用了这个名字。

[English](README.md) | 中文

![preview](docs/.vuepress/public/img/docs/gungnir.jpg)


&nbsp;

## V2

我正在开发基于 [Gungnir v2](https://github.com/Renovamen/vuepress-theme-gungnir/tree/v2) 版本，它使用了 [VuePress 2](https://v2.vuepress.vuejs.org/zh/)、[Vue 3](https://v3.cn.vuejs.org/)、[Vite](https://cn.vitejs.dev/) 和 [Webpack 5](https://webpack.docschina.org/). 新版本将会用 [Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html) 重写，并会有更快的开发服务器启动速度。

请在 [v2](https://github.com/Renovamen/vuepress-theme-gungnir/tree/v2) 分支查看 Gungnir v2 的开发进度。


&nbsp;

## 特性

- 简洁美观（反正这点我说是就是了）
- 响应式
- 多级目录
- 可切换的首页大图
- 明亮和夜间模式：识别系统的外观设置并自动切换模式，也支持用户手动切换
- 搜索
- 文章目录
- 多种代码高亮主题，支持代码块全屏（从 WordPress 主题 [Sakura](https://github.com/mashirozx/Sakura) 搬过来的功能）
- 基于 [Katex](https://github.com/KaTeX/KaTeX) 的公式支持
- 在文章中使用图表：[Chart.js](https://www.chartjs.org)、[Mermaid](https://mermaid-js.github.io) 和 [roughViz.js](https://github.com/jwilber/roughViz)
- 一些 Markdown 增强样式，目前支持：
  - 脚注（基于 [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)）
  - 高亮（基于 [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark)）
- 站点统计（[Google Analytics](https://analytics.google.com/) 和 [百度统计](https://tongji.baidu.com/)）
- 评论（基于 [Vssue](https://github.com/meteorlxy/vssue)）
- RSS
- 阅读时间估计
- 多语言支持（英文、简体中文）
- 带标签的归档页、链接页


&nbsp;

## 安装

```bash
yarn add -D vuepress-theme-gungnir
# or
npm i -D vuepress-theme-gungnir
```


&nbsp;

## 演示站点

这里有一些演示站点：

- [vuepress-theme-gungnir.vercel.app](https://vuepress-theme-gungnir.vercel.app/)
- [zxh.io](https://zxh.io)（我的博客）


&nbsp;

## 文档

[这里](https://vuepress-theme-gungnir.vercel.app/docs/)是本主题的文档。


&nbsp;

## 开源协议

Gungnir 主题遵守 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 开源协议，详细细节见 [LICENSE](packages/theme-gungnir/LICENSE) 文件。
