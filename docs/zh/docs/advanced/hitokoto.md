---
title: 一言
date: 2021-03-26
---

::: info
默认不启用该功能。
:::


将 `hitokoto` 项设置为 `true` 可以开启首页的[一言](https://hitokoto.cn/)气泡，将鼠标悬浮在头像上气泡就会显示出来：

```js
theme: gungnirTheme({
  hitokoto: true
})
```

![hitokoto](/img/docs/hitokoto-bubble.jpg)

如果你想更改一言的请求参数，或想使用其他的接口，可以：

```js
theme: gungnirTheme({
  hitokoto: "https://v1.hitokoto.cn?c=i"  // 只返回诗词
})
```
