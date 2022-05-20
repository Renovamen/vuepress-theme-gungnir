---
title: 图标支持
date: 2020-03-30
---

主题内置了 Vue 图标组件 `oh-vue-icons`（我写的 hhh）作为图标支持。`oh-vue-icons` 集成了多个常用图标库，能让你轻松从不同的图标库引入 SVG 图标。

在[这里](https://github.com/Renovamen/oh-vue-icons)查看 `oh-vue-icons` 的文档和更多信息。


## 引入图标

`oh-vue-icons` 支持 tree-shaking，没有引入的图标不会出现在打包文件中。因此你可以只引入你想要使用的图标，从而减小打包体积。

主题默认引入了以下图标：

- `FaRegularUser`: <v-icon name="fa-regular-user" />
- `FaRegularCalendar`: <v-icon name="fa-regular-calendar" />
- `FaSun`: <v-icon name="fa-sun" />
- `FaMoon`: <v-icon name="fa-moon" />
- `FaMagic`: <v-icon name="fa-magic" />
- `FaChevronLeft`: <v-icon name="fa-chevron-left" />
- `FaChevronRight`: <v-icon name="fa-chevron-right" />
- `FaChevronUp`: <v-icon name="fa-chevron-up" />
- `FaChevronDown`: <v-icon name="fa-chevron-down" />
- `FaListUl`: <v-icon name="fa-list-ul" />
- `FaPencilAlt`: <v-icon name="fa-pencil-alt" />
- `FaCircle`: <v-icon name="fa-circle" />
- `FaGithubAlt`: <v-icon name="fa-github-alt" />
- `FaLinkedinIn`: <v-icon name="fa-linkedin-in" />
- `FaFacebookF`: <v-icon name="fa-facebook-f" />
- `FaTwitter`: <v-icon name="fa-twitter" />
- `FaEnvelope`: <v-icon name="fa-envelope" />
- `RiWeiboFill`: <v-icon name="ri-weibo-fill" />
- `RiZhihuLine`: <v-icon name="ri-zhihu-line" />
- `RiRssFill`: <v-icon name="ri-rss-fill" />
- `RiSearch2Line`: <v-icon name="ri-search-2-line" />
- `RiTimerLine`: <v-icon name="ri-timer-line" />
- `HiTranslate`: <v-icon name="hi-translate" />
- `BiLayoutSidebarInset`: <v-icon name="bi-layout-sidebar-inset" />

如果想要引入别的图标，需要在 `oh-vue-icons` 的[网站](https://oh-vue-icons.js.org/cn)上搜索图标的名称，然后在你的项目的 `.vuepress/client.js` 文件（如果没有的话就新建一个）中全局引入图标：

```js
import { addIcons } from "oh-vue-icons";

// 引入想要使用的图标
import { OiGitCompare, RiBook2Fill } from "oh-vue-icons/icons";
addIcons(OiGitCompare, RiBook2Fill);
```

当然你也可以在你的自定义组件中局部引入。


## 使用图标

然后你就可以在 Markdown 或自定义组件中使用引入的图标了：

<v-icon name="oi-git-compare" /> <v-icon name="ri-book-2-fill" />

```html
<v-icon name="oi-git-compare" />
<v-icon name="ri-book-2-fill" />
```

`oh-vue-icons` 还支持定制图标的颜色、大小、翻转、动画等，这是一些例子：

<v-icon name="oi-git-compare" scale="2" /> <v-icon name="oi-git-compare" flip="vertical" /> <v-icon name="oi-git-compare" fill="orange" /> <v-icon name="oi-git-compare" animation="flash" />

```html
<v-icon name="oi-git-compare" scale="2" />
<v-icon name="oi-git-compare" flip="vertical" />
<v-icon name="oi-git-compare" fill="orange" />
<v-icon name="oi-git-compare" animation="flash" />
```

更多的功能和示例请参考 `oh-vue-icons` 的[文档](https://oh-vue-icons.js.org/cn/docs)。
