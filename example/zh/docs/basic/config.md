---
title: 基本配置
date: 2021-02-03
---

在 `.vuepress/config.js` 中配置主题。

::: tip
对于所有涉及到图标名称的配置项，请确保指定的图标是被引入过的，在[这里](/zh/docs/advanced/icons/)查看怎么引入图标。
:::


## 作者信息

```js
// .vuepress/config.js

module.exports = {
  /*
    其他配置
    ...
  */

  themeConfig: {
    /*
      其他配置
      ...
    */

    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Cool Dragon",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.jpeg",

      // 必须：个人简介，将在首页显示
      description: 'A cool dragon lost in human world.',
      
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: 'Renovamen',  // Github
        linkedin: 'xiaohan-zou-55bba0160',  // 领英
        facebook: 'renovamen.zou',  // Facebook
        twitter: 'renovamen_zxh',  // 推特
        zhihu: 'chao-neng-gui-su',  // 知乎
        weibo: 'your-weibo-id',  // 新浪微博
        email: 'renovamenzxh@gmail.com',  // 邮箱
        customize: [  // 添加其他的社交平台
          {
            icon: "ri-reddit-line",  // 社交平台的图标
            link: "https://www.reddit.com/user/oh-renovamen"  // 主页链接
          },
          // ...
        ]
      }
    }
}
```

## 首页

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    homeHeaderImages: {
      // 可选：首页本地封面图路径和蒙版
      local: [
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
      ]
    }
  }
}
```

其中，蒙版是指在封面图上盖一层半透明的颜色，如果图片比较复杂导致文字显示得不够清楚，可以考虑加个蒙版。

页面效果可以参考本站的[首页](/)，点击封面图左右两边的按钮可以在多张图片之间进行切换。

如果不配置 `homeHeaderImages.local` 项，则主题会在首页上显示通过 [Unsplash API](https://source.unsplash.com/) 随机拉取的一张壁纸，默认使用的请求接口是：

```
https://source.unsplash.com/1600x900/?wallpaper
```

也可以更改这个接口：

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    homeHeaderImages: {
      // 可选：自定义 Unsplash 接口
      api: "https://source.unsplash.com/1600x900/?nature"
    }
  }
}
```

具体可以参考 [Unsplash API 文档](https://source.unsplash.com/)。



## 页面

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
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
  }
}
```

页面效果可以参考本站的[标签](/tags)和[链接](/links)页。

如果想要修改页面主标题，请参考多语言支持部分。


## 搜索

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    search: true,  // 可选：是否启用搜索，默认：true
    searchMaxSuggestions: 10,  // 可选：搜索的最大结果数，默认：10
    searchPlaceholder: "$ grep ...",  // 可选：搜索栏占位文本，默认："$ grep ..."
    searchIcon: "ri-search-2-line"  // 可选：搜索图标
  }
}
```


## 页脚自定义

页脚支持 HTML 格式，如本站的页脚配置为：

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }
}
```
