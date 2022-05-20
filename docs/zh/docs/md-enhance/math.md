---
title: 数学公式渲染
date: 2022-03-12
---

::: info
默认不启用该功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::

通过插件 [plugin-katex](/zh/docs/plugins/katex/) 来提供公式渲染支持。


## 配置

启用 KaTeX：

```js
theme: gungnirTheme({
  themePlugins: {
    katex: true
  }
})
```


## 语法

行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$


::: details 代码
```
行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::
