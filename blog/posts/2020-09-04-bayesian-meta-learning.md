---
layout: post
title: Bayesian MAML
subtitle: MAML 的贝叶斯解释
author: "Renovamen"
date: 2020-09-04
header_img: /img/in-post/2020-09-04/header.jpg
catalog: true
tags:
  - Deep Learning
  - Meta Learning
  - Bayesian
---


为了引入不确定性~~和多找一个发论文的话题~~，MAML 还可以用贝叶斯视角来理解。

<!-- more -->


## MAML 回顾

在[之前的一篇文章](/post/2020/08/05/meta-learning#maml)中已经介绍了 MAML（Model-Agnostic Meta-Learning），一种 gradient-based 的 meta-learning 方法。其目标是学习出一组初始化参数 $\theta$，对于任意任务 $\mathcal{T}_i$，这个初始化参数都能在一步或极少步梯度下降中就快速达到最优参数解 $\theta_i^*$。


大致回顾一下它的算法流程，对于采样出的任务 $\mathcal{T}_i$：

- inner loop（meta-learner）：在 $\mathcal{T}_i$ 的 support set 上计算梯度并更新参数，得到更新后的参数 $\theta_i'$。$\theta_i'$ 只是一个临时参数，并不会作为最终的更新：

    $$
    \theta_i' = \theta - \alpha \nabla_\theta L_{\mathcal{T}_i}(f_\theta)
    $$

- outer loop：用 $\theta_i'$ 在 query set 上计算损失，然后**对 $\theta$ 求梯度**，并在 $\theta$ 上更新出最终的参数：

    $$
    \theta \larr \theta - \beta \nabla_\theta \sum_{\mathcal{T}_i \thicksim p(\mathcal{T})} L_{\mathcal{T}_i}(f_{\theta_i'})
    $$

所以它的优化目标可以总结为：

$$
\theta = \arg \min_\theta \sum_{\mathcal{T}_i \thicksim p(\mathcal{T})} L_{\mathcal{T}_i}^{\text{query}}(\theta - \alpha \nabla_\theta L_{\mathcal{T}_i}^{\text{support}}(f_\theta))
$$



## 参考

- [Properties of Good Meta-Learning Algorithms (And How to Achieve Them).](https://ai.stanford.edu/~cbfinn/_files/icml2018_automl_35min.pdf) Chelsea Finn. ICML 2018 AutoML Workshop (Talk).

- [Bayesian Model-Agnostic Meta-Learning](https://www.slideshare.net/sangwoomo7/bayesian-modelagnostic-metalearning)