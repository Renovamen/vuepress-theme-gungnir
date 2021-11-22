---
title: Configuration
date: 2021-02-03
---

The theme can be configured in `.vuepress/config.js`.

::: tip
Please make sure all the icons you specified in the configuration file are already imported, see [here](/docs/advanced/icons/) to know how to import icons.
:::


## Author Information

```js
// .vuepress/config.js

module.exports = {
  /*
    other configurations
    ...
  */

  themeConfig: {
    /*
      other configurations
      ...
    */

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
        customize: [  // if you want to add other social platforms
          {
            icon: "ri-reddit-line",  // platform icon
            link: "https://www.reddit.com/user/oh-renovamen"  // profile url
          },
          // ...
        ]
      }
    }
}
```

## Home Page

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    homeHeaderImages: {
      // optional: paths to and masks of the local home page cover images
      local: [
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
      ]
    }
  }
}
```

The `mask` is a translucent overlay placed on the cover image. It will be helpful when your cover image is so complex that your title can not stand out.

Check the [home page](/) of this site to see the effect. Click the left and right button to switch among multiple cover images.

If `homeHeaderImages.local` is not cofigured, a random wallpaper returned by [Unsplash API](https://source.unsplash.com/) will be displayed on home page. The default API the theme uses is:

```
https://source.unsplash.com/1600x900/?wallpaper
```

You can also customize it:

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    homeHeaderImages: {
      // optional: customized Unsplash API
      api: "https://source.unsplash.com/1600x900/?nature"
    }
  }
}
```

See the [documentation of Unsplash API](https://source.unsplash.com/) for more details.


## Other Pages

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
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
  }
}
```

Check the [tags page](/tags) and [links page](/links) to see the effect.

To edit the title of the above mentioned pages, please refer to Multi-language Support section.


## Search

```js
// .vuepress/config.js

module.exports = {
  themeConfig: {
    search: true,  // optional: enable search or not, default: true
    searchMaxSuggestions: 10,  // optional: the maximum number of results for search, default: 10
    searchPlaceholder: "$ grep ...",  // optional: placeholder of the search field, default: "$ grep ..."
    searchIcon: "ri-search-2-line"  // optional: search icon
  }
}
```


## Custom Footer

Support HTML. For example, the footer of this site is:

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
