---
title: Configuration
date: 2021-02-03
---

The theme can be configured in `.vuepress/config.js`. Refer to [here](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/theme/src/shared/options.ts) for all possible options.

::: tip
The configs of this theme are compatible with all the configs of [VuePress's default theme](https://v2.vuepress.vuejs.org/reference/default-theme/config.html) except:

- logo
- logoDark
- darkMode (dark mode switching is always enabled in this theme)
- repo
- repoLabel

Please refer to [reference of VuePress's default theme config](https://v2.vuepress.vuejs.org/reference/default-theme/config.html) for how to set them.
:::

::: tip
Please make sure all the icons you specified in the configuration file are already imported, see [here](/docs/advanced/icons/) to know how to import icons.
:::


## Navbar Title

Different from the default theme, Gungnir theme displays `themeConfig.navbarTitle` instead of the [`title` option in site config](https://v2.vuepress.vuejs.org/reference/config.html#title) at the left of the navbar:


```js{14}
// .vuepress/config.js

module.exports = {
  /*
    other site configurations
    ...
  */

  theme: gungnirTheme({
    /*
      other theme configurations
      ...
    */
    navbarTitle: "Gungnir"  // optional, default: "$ cd /home/"
  })
}
```

It can also be used in the [`locales`](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locales) option, for example:

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


## Author Information

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    personalInfo: {
      // required: nickname, will be showed on home page, mobile sidebar and author info of articles
      name: "Cool Dragon",

      // required: avatar, will be showed on home page and mobile sidebar
      avatar: "/img/avatar.jpeg",

      // required: a description, will be showed on home page
      description: 'A cool dragon lost in human world.',
      
      // optional: id of social platform, will be showed on home page and mobile sidebar
      sns: {
        github: 'Renovamen',  // Github
        linkedin: 'xiaohan-zou-55bba0160',  // Linkedin
        facebook: 'renovamen.zou',  // Facebook
        twitter: 'renovamen_zxh',  // Twitter
        zhihu: 'chao-neng-gui-su',  // Zhihu
        weibo: 'your-weibo-id',  // Sina Weibo
        email: 'renovamenzxh@gmail.com',  // Email
        rss: "/rss.xml",  // link to RSS file
        // if you want to add other social platforms
        bilibili: {  // any name you want
          icon: "ri-bilibili-line",  // platform icon
          link: "https://www.bilibili.com/"  // profile URL
        }
        // ...
      }
    }
  })
}
```

## Home Page

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    homeHeaderImages: [
      // image 1
      {
        "path": "/img/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      // image 2
      {
        "path": "/img/home-bg/2.jpg",
        "mask": "rgb(251, 170, 152, .2)"
      }
      ...
    ],
    blogNumPerPage: 20  // optional: maximum number of blogs per page, default: 10
  })
}
```

The `mask` is a translucent overlay placed on the cover image. It will be helpful when your cover image is so complex that your title can not stand out.

Check the [home page](/) of this site to see the effect. Click the left and right button to switch among multiple cover images.


## Other Pages

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    pages: {
      // tags page
      tags: {
        // optional: subtitle of tags page
        subtitle: 'Hey! Here is tags page!',

        // optional: paths to and masks of the tags page cover images
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },

      // links page
      links: {
        // optional: subtitle of links page
        subtitle: 'Hey! Here is links page!',

        // optional: paths to and masks of the links page cover images
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    }
  })
}
```

Check the [tags page](/tags/) and [links page](/links/) to see the effect.

To edit the title of the above mentioned pages, please refer to Multi-language Support (TODO) section.


## Custom Footer

Support HTML. For example, the footer of this site is:

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


## Catalog

Enable or disable **post** catalog for all posts. Can be rewritten in each post's front matter.

```js
// .vuepress/config.js

module.exports = {
  theme: gungnirTheme({
    catalog: false  // optional, default: true
  })
}
```
