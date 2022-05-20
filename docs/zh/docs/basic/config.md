---
title: 基本配置
date: 2021-02-03
---

在 `.vuepress/config.js` 中配置主题。可以直接在[源码里](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/theme/src/shared/options.ts)查看所有可能的配置项。

::: tip
本主题兼容 [VuePress 默认主题](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)除了以下配置项以外的所有配置项：

- logo
- logoDark
- darkMode（本主题强制开启模式切换功能）
- repo
- repoLabel

关于这些（兼容的）配置项的配置方式，请直接查阅 [VuePress 默认主题配置的参考文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)。
:::

::: tip
对于所有涉及到图标名称的配置项，请确保指定的图标是被引入过的，在[这里](/zh/docs/advanced/icons/)查看怎么引入图标。
:::


## 导航栏标题

与默认主题不同的是，本主题的导航栏左上角标题处显示的不是 [站点配置中的 `title` 项](https://v2.vuepress.vuejs.org/zh/reference/config.html#title)，而是：

```js{14}
// .vuepress/config.js

module.exports = {
  /*
    其他站点配置
    ...
  */

  theme: gungnirTheme({
    /*
      其他主题配置
      ...
    */
    navbarTitle: "Gungnir"  // 可选，默认："$ cd /home/"
  })
}
```

也可以在 [`locales`](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locales) 中使用，如：

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    locales: {
      "/": {
        navbarTitle: "Gungnir"
      },
      "/zh/": {
        navbarTitle: "冈格尼尔"
      }
    }
  })
}
```


## 作者信息

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Cool Dragon",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.jpeg",

      // 必须：个人简介，将在首页显示
      description: "A cool dragon lost in human world.",
      
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "Renovamen",  // Github
        linkedin: "xiaohan-zou-55bba0160",  // 领英
        facebook: "renovamen.zou",  // Facebook
        twitter: "renovamen_zxh",  // 推特
        zhihu: "chao-neng-gui-su",  // 知乎
        weibo: "your-weibo-id",  // 新浪微博
        email: "renovamenzxh@gmail.com",  // 邮箱
        rss: "/rss.xml",  // RSS 文件的链接
        // 添加其他的社交平台
        bilibili: {  // 随便什么名字
          icon: "ri-bilibili-line",  // 社交平台的图标
          link: "https://www.bilibili.com/"  // 主页链接
        }
        // ...
      }
    }
  })
}
```

## 首页

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    homeHeaderImages: [
      // 图 1
      {
        "path": "/img/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      // 图 2
      {
        "path": "/img/home-bg/2.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      }
      ...
    ],
    blogNumPerPage: 20  // 可选：每页的博客数量，默认：10
  })
}
```

其中，蒙版是指在封面图上盖一层半透明的颜色，如果图片比较复杂导致文字显示得不够清楚，可以考虑加个蒙版。

页面效果可以参考本站的[首页](/)，点击封面图左右两边的按钮可以在多张图片之间进行切换。


## 页面

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '吼哇朋友们，这是标签页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },

      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '吼哇朋友们，这是链接页',

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    }
  })
}
```

页面效果可以参考本站的[标签](/tags)和[链接](/links)页。

如果想要修改页面主标题，请参考多语言支持部分（在写了在写了咕咕咕）。


## 页脚自定义

页脚支持 HTML 格式，如本站的页脚配置为：

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  })
}
```


## 目录

对所有**博客文章页**启用或禁用目录。可以在博客文章页的 front matter 里覆写这个配置。

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    catalog: false  // 可选，默认：true
  })
}
```
