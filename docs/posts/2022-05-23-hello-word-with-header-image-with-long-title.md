---
layout: Post
title: Hello Word with a long title, it should require two lines to display
subtitle: A Test Post with Comment Disabled
author: Renovamen
date: 2022-05-23
headerImage: /img/in-post/2021-12-24/header.jpg
giscus: false
tags:
  - test
---

Welcome to VuePress theme Gungnir.

<!-- more -->

## Paragraphs

### English

A well-known scientist (some say it was ==Bertrand Russell==) once gave a public lecture on astronomy. He described how the earth orbits around the sun and how the sun, in turn, orbits around the center of a vast collection of stars called our galaxy. At the end of the lecture, a little old lady at the back of the room got up and said: “What you have told us is rubbish. The world is really a flat plate supported on the back of a giant tortoise.” The scientist gave a superior smile before replying, “What is the tortoise standing on.” “You’re very clever, young man, very clever,” said the old lady. “But it’s turtles all the way down!”

Most people would find the picture of our universe as an infinite **tower of tortoises** rather ridiculous, but why do we think we know better? What do we know about the universe, and how do we know it? Where did the universe come from, and where is it going? Did the universe have a beginning, and if so, what happened before then? What is the nature of time? Will it ever come to an end? Can we go back in time? Recent breakthroughs in physics, made possible in part by fantastic new technologies, suggest answers to some of these longstanding questions. Someday these answers may seem as obvious to us as the earth orbiting the sun – or perhaps as ridiculous as a tower of tortoises. Only time (whatever that may be) will tell. [^1]

### 中文

一位著名的科学家（据说是 ==贝特朗·罗素==）曾经作过一次关于天文学方面的讲演。他描述了地球如何绕着太阳运动，以及太阳又是如何绕着我们称之为星系的巨大的恒星群的中心转动。演讲结束之时，一位坐在房间后排的矮个老妇人站起来说道：“你说得这些都是废话。这个世界实际上是驮在一只大乌龟的背上的一块平板。”这位科学家很有教养地微笑着答道：“那么这只乌龟是站在什么上面的呢？”“你很聪明，年轻人，的确很聪明，”老妇人说，“不过，这是一只驮着一只一直驮下去的乌龟塔啊！”

大部分人会觉得，把我们的宇宙喻为一个无限的**乌龟塔**相当荒谬，可是为什么我们自以为知道得更多一些呢？我们对宇宙了解了多少？而我们又是怎样才知道的呢？宇宙从何而来又将向何处去？宇宙有开端吗？如果有的话，在这开端之前发生了什么？时间的本质是什么？它会有一个终结吗？在物理学上的一些最新突破，使一部分奇妙的新技术得以实现，从而对于回答这些长期以来悬而未决的某些问题有所启发。也许有一天这些答案会像我们认为地球绕着太阳运动那样显而易见——当然也可能像乌龟塔那般荒唐可笑。不管怎样，惟有让时间来判断了。[^2]


## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading


## Code

### Code Blocks

Click the red button on the upper-right corner to make the code block full screen.

```python{8}
import food

class Dragon:
  def __init__(self, happiness):
    self.happiness = happiness
  def code(self):
    """ just code """
    self.happiness -= 60
  def eat(self, n)
    # just eat
    self.happiness += n * food.size

me = Dragon(100)

while True:
  me.code()
  me.eat(10)
```


### Code Groups

<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress-theme-gungnir@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install -D vuepress-theme-gungnir@next
```

</CodeGroupItem>
</CodeGroup>


### Inline Code

`const a = 1`

## Table

| Name | Info |
|------|------|
| vuepress-theme-gungnir | Gungnir is a blog theme for Vuepress 2. |

## Badges <Badge text="tip" /> <Badge text="warning" type="warning" /> <Badge text="danger" type="danger" /> <Badge text="tip middle" vertical="middle" />


## Charts

### Chart.js

```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      "borderColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      "borderWidth": 1
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return value + 'k'; }"
        }
      }
    }
  }
}
```

### Mermaid

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```


## Images

![Image Example](/img/home-bg/3.jpg)


## Maths

Inline math: $E = mc^2$

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$

With tags:

$$
\begin{gather}
  A = \text{softmax}(\frac{QK^T}{\sqrt{d_k}}) \\
  F_{\text{out}} = A V
\end{gather}
$$


## Emojis

:smile: :smirk: :racehorse: :wolf:


## Containers

::: link {fa-github-alt} [vuepress-theme-gungnir](https://github.com/Renovamen/vuepress-theme-gungnir)
A blog theme for VuePress 2.
:::

::: link {/img/links/me.png} [My Blog](https://blog.zxh.io)
My links.
:::

::: info
This is an info message.
:::

::: tip
This is a tip message.
:::

::: warning
This is a warning message.
:::

::: danger
This is a dangerous warning message.
:::

::: details Show me the code.
```cpp
cout << "Hello World!" << "\n";
```
:::

::: details Show me the code group.
<CodeGroup>
<CodeGroupItem title="JS" active>

```js
console.log("Hello World!");
```

</CodeGroupItem>

<CodeGroupItem title="PY">

```python
print("Hello World!")
```

</CodeGroupItem>
</CodeGroup>
:::

## References

[^1]: Excerpted from: *A Brief History of Time*, written by Stephen Hawking.

[^2]: 摘自《时间简史》，作者为斯蒂芬·霍金。
