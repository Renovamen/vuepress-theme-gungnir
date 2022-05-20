---
title: Math Rendering
date: 2022-03-12
---

::: info
This feature is disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::


## Configuration

Enable KaTeX to render mathematical formulas in articles (supported by [plugin-katex](/docs/plugins/katex/)):

```js
theme: gungnirTheme({
  themePlugins: {
    katex: true
  }
})
```


## Syntax

Inline math: $E = mc^2$

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$


::: details Code
```
Inline math: $E = mc^2$

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::

[Here](https://katex.org/docs/supported.html) is a list of TeX functions supported by KaTeX.
