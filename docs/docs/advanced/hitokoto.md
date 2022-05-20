---
title: Hitokoto
date: 2021-03-26
---

::: info
This feature is disabled by default.
:::


A [Hitokoto](https://hitokoto.cn/) bubble will appear on the home page when `hitokoto` is set to `true` and your mouse cursor is hovered over the avatar:

```js
theme: gungnirTheme({
  hitokoto: true
})
```

![hitokoto](/img/docs/hitokoto-bubble.jpg)

You can also customize the requested API:

```js
theme: gungnirTheme({
  hitokoto: "https://v1.hitokoto.cn?c=i"
})
```
