---
title: Icons
date: 2020-03-30
---

Gungnir uses Vue icon component `oh-vue-icons` (my another project lol) for icon support. `oh-vue-icons` is for including inline SVG icons from different popular icon packs easily.

See [here](https://github.com/Renovamen/oh-vue-icons) for documentation and other details of `oh-vue-icons`.


## Import Icons

`oh-vue-icons` supports tree-shaking, icons that are not imported will not be included in your site's bundle files. So you can only import the icons you need to reduce the bundle size.

Gungnir has already imported the following icons:

- `FaRegularUser`: <v-icon name="fa-regular-user" />
- `FaRegularCalendar`: <v-icon name="fa-regular-calendar" />
- `RiTimerLine`: <v-icon name="ri-timer-line" />
- `FaSun`: <v-icon name="fa-sun" />
- `FaMoon`: <v-icon name="fa-moon" />
- `FaMagic`: <v-icon name="fa-magic" />
- `FaChevronLeft`: <v-icon name="fa-chevron-left" />
- `FaChevronRight`: <v-icon name="fa-chevron-right" />
- `FaChevronUp`: <v-icon name="fa-chevron-up" />
- `FaChevronDown`: <v-icon name="fa-chevron-down" />
- `FaListUl`: <v-icon name="fa-list-ul" />
- `BiLayoutSidebarInset`: <v-icon name="bi-layout-sidebar-inset" />
- `FaPencilAlt`: <v-icon name="fa-pencil-alt" />
- `FaCircle`: <v-icon name="fa-circle" />
- `FaRss`: <v-icon name="fa-rss" />
- `FaGithubAlt`: <v-icon name="fa-github-alt" />
- `FaLinkedinIn`: <v-icon name="fa-linkedin-in" />
- `FaFacebookF`: <v-icon name="fa-facebook-f" />
- `FaTwitter`: <v-icon name="fa-twitter" />
- `RiZhihuLine`: <v-icon name="ri-zhihu-line" />
- `FaWeibo`: <v-icon name="fa-weibo" />
- `FaEnvelope`: <v-icon name="fa-envelope" />

To import other icons, you may need to search for icons' names [here](https://oh-vue-icons.vercel.app) and globally import theme in your `.vuepress/enhanceApp.js` file (create one if this file dosen't exist):

```js
// import OhVueIcon component
import OhVueIcon from "oh-vue-icons";

// import the icons you need
import { OiGitCompare, RiBook2Fill } from "oh-vue-icons/icons";
OhVueIcon.add(OiGitCompare, RiBook2Fill);
```

Or you can also locally import them in your custom components.


## Use Icons

Then you can use these icons in Markdown or your custom components:

<v-icon name="oi-git-compare" /> <v-icon name="ri-book-2-fill" />

```html
<v-icon name="oi-git-compare" />
<v-icon name="ri-book-2-fill" />
```

`oh-vue-icons` also supports many other features, like editting icon's color, size, animation, flip and so on. Here are some examples:

<v-icon name="oi-git-compare" scale="2" /> <v-icon name="oi-git-compare" flip="vertical" /> <v-icon name="oi-git-compare" fill="orange" /> <v-icon name="oi-git-compare" animation="flash" />

```html
<v-icon name="oi-git-compare" scale="2" />
<v-icon name="oi-git-compare" flip="vertical" />
<v-icon name="oi-git-compare" fill="orange" />
<v-icon name="oi-git-compare" animation="flash" />
```

See [documentation](https://oh-vue-icons.vercel.app/docs) of `oh-vue-icons` for more features and examples.
