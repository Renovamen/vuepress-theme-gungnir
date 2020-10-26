---
layout: post
title: Regularization-based Continual Learning
subtitle: EWC / Online EWC / IS / MAS ...
author: "Renovamen"
date: 2020-08-24
header_img: /img/in-post/2020-08-24/header.jpg
catalog: true
tags:
  - Deep Learning
  - Continual Learning
  - Bayesian
---

基于正则（regularization-based）的持续学习：用一个表示参数重要程度的正则项来控制参数在未来的任务中的更新幅度。

<!-- more -->


## 持续学习

传统的机器学习要求训练样本之间是 **i.i.d（Independent and Identically Distributed，独立同分布）**的，为了达到这个目的往往会随机打乱训练数据。但如果要让模型处理分布在变化的连续数据，如果不做任何处理依然按传统方法来训练，就会出现**灾难性遗忘（Catastrophic Forgetting）**，因为新的数据会对模型造成干扰（interference）。模型会调整它学到的关于旧数据的参数以适应新任务，这样在旧数据上学到的知识就会被遗忘。

**Continual** / Lifelong / Incremental / Cumulative Learning（**持续学习** / 终身学习 / 增量学习）就是为了解决这个问题（我从未见过命名如此不统一的方向 2333）。标准版持续学习的目标是（叫它标准版是因为最近的很多研究给持续学习加了一些新目标）：

- 学习当前任务

- 解决灾难性遗忘问题

为了搞定灾难性遗忘，常见的三种套路是：

- **Dynamic Expansion**：既然问题在于关于旧任务的参数会被干扰，那就不用这些参数来学习新任务了，直接搞一批新的参数来学新任务。这样模型的参数就会越来越多，所以叫 dynamic expansion。模型参数太多了之后可能会很难训练。为了让参数不要增加得太快，有些方法会加一些模型剪枝知识蒸馏一类的压缩操作进来。

- **Rehearsal**：如果让新任务上的梯度尽可能接近旧任务上的梯度，那在旧任务上学习到的知识就不会被遗忘多少。这种思路需要去搞一些旧数据，而搞旧数据的方法又大概能分为两种：

    - **Extra Memory**：直接存一些旧数据，这样就需要额外的存储空间；

    - **Generative Replay**：用旧数据训练一个生成模型（如 GAN、VAE 等），然后用这个生成模型来生成旧数据。这样不需要额外的存储空间，但模型参数会变多（多了生成模型的参数）。

        不过我很好奇用生成模型模拟旧数据的效果，和把生成模型的权重占的存储空间全拿去存旧数据的效果哪个更好。假设权重几十或几百兆，如果直接把它拿来存旧数据，假设一张图片几百 K（因为大多数持续学习论文的实验设置都是在做图像分类，所以这里考虑存图片），也能存几百张了。考虑到目前生成模型生成的图片质量都没有很高，在存储空间一样大的前提下它的效果能不能超过直接存几百张旧图片的效果我觉得是不一定的。我还是很希望看到有论文做这种对比实验的，不过目前似乎还没看到这样做的？虽然我也没看过多少论文就是了...

- **Regularization**：直觉上来说更优雅的一类方法，毕竟不用额外存储空间也不用增加模型参数。这种方法会加一些正则项来避免跟旧任务关联较大的参数更新幅度过大。这种方法存在的基础是现在的绝大多数神经网络都是过参数化（over-parameterization）的。本文要理的一些方法就属于这一类。


## 直觉上的理解

<img src="/img/in-post/2020-08-24/ewc.png" width="400px" alt="EWC" />

<p class="desc">图片来源：论文 <a href="https://arxiv.org/pdf/1612.00796.pdf" target="_blank">Overcoming Catastrophic Forgetting in Neural Networks</a></p>

上图是参数在参数空间里的变化轨迹。蓝色的箭头相当于在任务 $A$（可以推广为旧任务）上训练完之后，直接拿去任务 $B$（可以推广为新任务）上 fine-tune。这样在学完任务 $B$ 之后，基本就把任务 $A$ 忘得差不多了。

那么一个想法是加一个正则项（L2），让在任务 $B$ 上训练完后的参数不能离在任务 $A$ 上训练完后的参数太远，即绿色箭头。但直接加 L2 正则项没有考虑不同参数对任务的重要性，对任务 $A$ 特别重要的参数限制应该大一些，而不那么重要的参数则不用怎么限制，不然任务 $B$ 就学不好了。

于是红色箭头就是很多 regularization-based 的方法的思想：计算一下每个参数 $\theta_i$ 对任务 $A$ 的重要性 $\Omega_i$，然后加了正则项的损失函数变成（$\theta_{A,i}^\text{*}$ 是在任务 $A$ 上训练完后得到的最优参数）：

$$
L(\theta) = L_B(\theta) + \frac{\lambda}{2} \sum_i \Omega_i (\theta_i - \theta_{A,i}^\text{*})^2
$$

只不过这些方法计算重要性 $\Omega_i$ 的方式有所不同。


## EWC

**Overcoming Catastrophic Forgetting in Neural Networks.** *James Kirkpatrick, et al.* PNAS 2017. [[Paper]](https://arxiv.org/pdf/1612.00796.pdf)

**EWC（Elastic Weight Consolidation）**

### 参数重要性

如果直接上结论的话，参数 $\theta_i$ 的重要性 = Fisher 信息矩阵的第 $i$ 个对角线元素，也即：

$$
\Omega_i = \frac{1}{|D_A|} \sum_{x \in D_A} \left ( \frac{\partial \log p_\theta(Y = y_x^\text{*} \mid x)}{\partial \theta_i} \Bigg |_{\theta = \theta_A^\text{*}} \right )^2
$$

其中 $y_x^\text{*}$ 是模型 $p_{\theta_A^\text{*}}(y \mid x)$ 对 $x$ 的输出。



### 贝叶斯视角

如果按照贝叶斯方法来学习参数的话，灾难性遗忘并不会发生。贝叶斯方法希望估计出参数的后验分布：

$$
\begin{aligned}
    p(\theta \mid D) &= \frac{p(\theta, D)}{p(D)} = \frac{p(\theta, D_A, D_B)}{p(D_A, D_B)} \\[10px]
        & = \frac{p(\theta, D_B \mid D_A) p(D_A)}{p(D_B \mid D_A) p(D_A)} \\[10px]
        & = \frac{p(\theta, D_B \mid D_A)}{p(D_B \mid D_A)} \\[10px]
        & = \frac{p(D_B \mid \theta, D_A) p(\theta \mid D_A)}{p(D_B \mid D_A)} \\[10px]
        & = \frac{p(D_B \mid \theta) p(\theta \mid D_A)}{p(D_B)}
\end{aligned}
$$

最后一步是因为 $D_A, D_B$ 相互独立。这个形式实际上就是增量贝叶斯公式（incremental version of Bayes' rule）。

那么有：

$$
\log p(\theta \mid D) = \log p(D_B \mid \theta) + \log p(\theta \mid D_A) - \log p(D_B)
$$

对于右边的这三项，第一项 $\log p(D_B \mid \theta)$ 很明显就是 $D_B$ 上的损失函数取负 $-L_B(\theta)$，第三项 $\log p(D_B)$ 是个参数无关的常数，于是优化目标就变为了（实际上就是[最大后验估计（MAP）](/2020/08/16/bayesian-neural-network/#最大后验估计)）：

$$
\begin{aligned}
    \theta &= \arg \max_\theta \log p(\theta \mid D) \\
        &= \arg \max_\theta (- L_B(\theta) + \log p(\theta \mid D_A)) \\
        &= \arg \min_\theta L_B(\theta) - \log p(\theta \mid D_A)
\end{aligned}
$$

可以看到这个优化目标相当于一边最小化 $D_B$ 上的损失，一边最大化 $D_A$ 上的参数后验 $p(\theta \mid D_A)$，从而避免了灾难性遗忘的发生。

那么我们需要求的就是 $p(\theta \mid D_A)$，但这个后验是 intractabe 的，我记得我在好几个地方都写过它为啥 intractabe 所以这里就不写了...那么我们又需要把它近似出来，常用的近似方法大概就是变分推断、MCMC、拉普拉斯（Laplace）近似之类的，论文用了拉普拉斯近似。

btw，可以看到相比 MLE，上式就是多了一项 $- \log p(\theta \mid D_A)$。所以也可以理解为，论文就是在把这一项设计成结构化风险里的正则项。


### 拉普拉斯近似

拉普拉斯近似的目标是用一个高斯分布来近似 $p(\theta \mid D_A)$。假设它是个高斯分布：

$$
\\[2px]

p(\theta \mid D_A) = N(\sigma, \mu) = \frac{1}{\sqrt{2 \pi} \sigma} e^{- \frac{(\theta - \mu)^2}{2 \sigma^2}}
$$

$$
\rArr \log p(\theta \mid D_A) = \log \frac{1}{\sqrt{2 \pi} \sigma} - \frac{(\theta - \mu)^2}{2 \sigma^2}
$$

右边其实是在取 $\ln$，不过这里 $\log$ 和 $\ln$ 没有本质区别。

令 $f(\theta) = \log p(\theta \mid D_A)$，当 $\theta = \theta_A^\text{*}$ 时取最优解，那么在 $\theta = \theta_A^\text{*}$ 处对 $f(\theta)$ [泰勒展开](#泰勒展开)：

$$
f(\theta) = f(\theta_A^\text{*}) + \underbrace{\Bigg ( \frac{\partial f(\theta)}{\partial \theta} \Bigg |_{\theta = \theta_A^\text{*}}  \Bigg )}_{\text{雅克比矩阵}} (\theta - \theta_A^\text{*}) + \frac{1}{2} (\theta - \theta_A^\text{*})^\top \underbrace{\Bigg ( \frac{\partial^2 f(\theta)}{\partial^2 \theta} \Bigg |_{\theta = \theta_A^\text{*}}  \Bigg )}_{\text{海森矩阵}} (\theta - \theta_A^\text{*}) + o(\theta_A^\text{*}) \\[5px]
$$

因为 $\theta_A^\text{*}$ 使得 $f(\theta)$ 有极大值（[这里](https://www.cnblogs.com/hapjin/p/8834794.html)似乎证明了一定有这个极大值），所以 $f(\theta)$ 在 $\theta = \theta_A^\text{*}$ 处的一阶导为 0，二阶导为负（海森矩阵负定），并且我们忽略掉三阶及以上的项，那么 $f(\theta)$ 可以近似为：

$$
f(\theta) = \log \frac{1}{\sqrt{2 \pi} \sigma} - \frac{(\theta - \mu)^2}{2 \sigma^2} \approx f(\theta_A^\text{*}) + \frac{1}{2} (\theta - \theta_A^\text{*})^2 f''(\theta_A^\text{*})
$$

为了方便这里就不强调矩阵了，记住 $f''(\theta_A^\text{*})$ 是个[海森矩阵](#海森矩阵)就好 2333。因为 $\log \frac{1}{\sqrt{2 \pi} \sigma}$ 和 $f(\theta_A^\text{*})$ 都是参数无关的常数，所以：

$$
- \frac{(\theta - \mu)^2}{2 \sigma^2} = \frac{(\theta - \theta_A^\text{*})^2}{2} f''(\theta_A^\text{*}) \\[2px]
$$

所以：

$$
\mu =  \theta_A^\text{*}
$$

$$
\sigma = - \frac{1}{f''(\theta_A^\text{*})}
$$

高斯分布的两个超参求出来了，$p(\theta \mid D_A)$ 也就求出来了，现在优化目标可以写成：

$$
\begin{aligned}
    \theta &= \arg \min_\theta L_B(\theta) - \log p(\theta \mid D_A) \\
        &= \arg \min_\theta L_B(\theta) - \frac{1}{2} (\theta - \theta_A^\text{*})^2 f''(\theta_A^\text{*})
\end{aligned}
$$

$f(\theta_A^\text{*})$ 是个常数所以可以省掉。相当于最大化 $p(\theta \mid D_A)$ 变成了最大化 $\frac{1}{2} (\theta - \theta_A^\text{*})^2 f''(\theta_A^\text{*})$。

那么现在问题又变成了怎么求 $f''(\theta_A^\text{*})$。$f''(\theta_A^\text{*})$ 能直接算出来，但是这里参数 $\theta$ 是 $n$ 维向量，所以 $f''(\theta_A^\text{*})$ 是 $n \times n$ 的海森矩阵，计算的时间和空间复杂度都比较大。为了减小计算开销，论文把海森矩阵转成了 Fisher 信息矩阵。

### Fisher 信息矩阵

首先，一个结论是 Fisher 信息矩阵等于海森矩阵的期望取负（[这里](https://wiseodd.github.io/techblog/2018/03/11/fisher-information/)是证明过程）：

$$
F_{ij} = - \mathbb{E}[f''(\theta_A^\text{*})] = - \mathbb{E}_{p(\theta \mid D_A)} \left [ \frac{\partial^2 \log p(\theta \mid D_A)}{\partial \theta_i \theta_j} \Bigg |_{\theta = \theta_A^\text{*}} \right ]
$$

为了省计算量，只取了 Fisher 信息矩阵的对角线，相当于假设各参数之间相互独立：

$$
F_{ii} = - \mathbb{E}_{p(\theta \mid D_A)} \left [ \frac{\partial^2 \log p(\theta \mid D_A)}{\partial^2 \theta_i} \Bigg |_{\theta = \theta_A^\text{*}} \right ]
$$

之所以要转成 Fisher 信息矩阵，是因为 Fisher 信息矩阵可以只靠求一阶导算出来（基本定义），一阶导的计算复杂度比二阶导要低很多：

$$
\\[1px]
\begin{aligned}
    F_{ii} &= - \mathbb{E}_{p(\theta \mid D_A)} \left [ \left ( \frac{\partial \log p(\theta \mid D_A)}{\partial \theta_i} \Bigg |_{\theta = \theta_A^\text{*}} \right )^2 \right ] \\[20pt]
\end{aligned}
$$

最大化 $\log p(\theta \mid D_A)$ 跟最大化 $\log p(y \mid x)$ 是一个意思，而求期望可以用蒙特卡洛采样来近似，所以：

$$
F_{ii} \approx - \mathbb{E}_{x \thicksim D_A, y \thicksim p_\theta (y \mid x)} \left [ \left ( \frac{\partial \log p(y \mid x)}{\partial \theta_i} \Bigg |_{\theta = \theta_A^\text{*}} \right )^2 \right ]
$$

其中 $x$ 是从任务 $A$ 的样本里采样出来的，$y$ 是模型 $p_{\theta_A^\text{*}}(y \mid x)$ 对 $x$ 的输出。这是需要注意的一点，$y$ 是从模型里采样出来的，不是直接从数据分布里采样的。所以求 Fisher 信息矩阵时至少需要再额外来一次反向传播流程，因为需要把 $p_{\theta_A^\text{*}}(y \mid x)$ 的输出拿来当 ground truth，然后重新算一遍损失，然后再求一次梯度。

当然的确也有直接从数据分布里采样 $y$ 的做法，叫 empirical Fisher，这样倒是可以把现成算好的梯度直接拿来用。

论文在算期望时把每个样本都采样了一遍，所以相当于是对每个样本上的梯度的平方求平均：

$$
F_{ii} = \frac{1}{|D_A|} \sum_{x \in D_A} \left ( \frac{\partial \log p_\theta(Y = y_x^\text{*} \mid x)}{\partial \theta_i} \Bigg |_{\theta = \theta_A^\text{*}} \right )^2
$$

其中 $y_x^\text{*}$ 是模型 $p_{\theta_A^\text{*}}(y \mid x)$ 对 $x$ 的输出。

于是最终的损失函数为：

$$
\begin{aligned}
    L(\theta) &= L_B(\theta) - \frac{\lambda}{2} f''(\theta_A^\text{*}) (\theta - \theta_A^\text{*})^2 \\[5pt]
        &= L_B(\theta) + \frac{\lambda}{2} \sum_i F_i (\theta_i - \theta_{A,i}^\text{*})^2
\end{aligned}
$$

因为 Fisher 信息矩阵是海森矩阵的期望取负，所以这里从减号变成了加号。

我认为的另一个理解方式是，Fisher 信息矩阵也反映了我们对参数估计的不确定度。二阶导越大，说明我们对该参数的估计越确定，同时 Fisher 信息也越大，正则项就越大。于是越确定的参数在后面的任务里更新幅度就越小。

### 多个任务

考虑一下有三个任务 $D_A, D_B, D_C$ 的情况，这时的参数后验为：

$$
\log (\theta \mid D_A, D_B, D_C) = \log p(D_C \mid \theta) + \log (\theta \mid D_A, D_B) + \text{constant}
$$

其中 $\log (\theta \mid D_A, D_B)$ 已经被近似出来了：

$$
\log (\theta \mid D_A, D_B) \approx \log p(D_B \mid \theta) + \frac{1}{2} \sum_i \lambda_A F_{A, i} (\theta_i - \theta_{A,i}^\text{*})^2 + \text{constant}
$$

而最大化 $\log p(D_B \mid \theta)$ 跟最大化 $\log p(\theta \mid D_B)$ 是一个意思，$\log p(\theta \mid D_B)$ 又可以近似为：

$$
\log p(\theta \mid D_B) \approx \frac{1}{2} \sum_i \lambda_B F_{B, i} (\theta_i - \theta_{B,i}^\text{*})^2
$$

那么 $\log (\theta \mid D_A, D_B, D_C)$ 可以近似为：

$$
\log (\theta \mid D_A, D_B, D_C) \approx \log p(D_C \mid \theta) + \frac{1}{2} \sum_i \Bigg (\lambda_A F_{A, i} (\theta_i - \theta_{A,i}^\text{*})^2 + \lambda_B F_{B, i} (\theta_i - \theta_{B,i}^\text{*})^2 \Bigg ) + \text{constant}
$$

相当于 EWC 会针对 $\theta_{A,i}^\text{*}$ 和 $\theta_{B,i}^\text{*}$ 各加一个惩罚项，来保证 $\theta_{C,i}^\text{*}$ 跟 $\theta_{A,i}^\text{*}$ 和 $\theta_{B,i}^\text{*}$ 都尽量接近。如果任务推广到多个，那么 EWC 会为每个历史任务上训练完后的最优参数 $\theta_1^\text{*}, \theta_2^\text{*}, \dots, \theta_{T-1}^\text{*}$ 都维护一个惩罚项，即：

$$
L_T^\text{regularization} = \frac{1}{2} \sum_i \Bigg ( \sum_{t<T} \lambda_t F_{t, i} (\theta_i - \theta_{t,i}^\text{*})^2 \Bigg )
$$

所以惩罚项数量会随任务数量线性增长，造成较大的计算开销。而 [Online EWC](#online-ewc) 给出了一个不管有多少任务都只用维护一个惩罚项的解决方案。



### 其他

- 不同任务上的参数差异较大时，再把泰勒展开的高阶项近似为 0 就很勉强了

- 只取 Fisher 信息矩阵的对角线，相当于假设各参数之间相互独立，但实际上参数之间肯定有关联

- 原论文写得相当简洁，给人一种好像很快就能看明白的错觉，实际上背地里公式推导省略了一大堆 orz


## Online EWC

**On Quadratic Penalties in Elastic Weight Consolidation.** *Ferenc Huszár, et al.* arXiv 2017. [[Paper]](https://arxiv.org/pdf/1712.03847.pdf)

EWC 会为每个历史任务上都维护一个惩罚项，所以惩罚项数量会随任务数量线性增长，造成较大的计算开销。但从直觉上来说，$\theta_B^\text{*}$ 本来就是在对 $\theta_A^\text{*}$ 加了惩罚项的情况下估计出来的，那么在估计 $\theta_C^\text{*}$ 的时候就只需要对 $\theta_B^\text{*}$ 加惩罚项就够了，就没必要再维护 $\theta_A^\text{*}$ 的惩罚项了。推广到多个任务，即在估计 $\theta_T^\text{*}$ 的时候只需要维护一个 $\theta_{T-1}^\text{*}$ 的惩罚项就好。

在[上一节](#多个任务)中我们已经得到 $\log (\theta \mid D_A, D_B, D_C)$ 的近似：

$$
\log (\theta \mid D_A, D_B, D_C) \approx \log p(D_C \mid \theta) + \frac{1}{2} \sum_i \Bigg (\lambda_A F_{A, i} (\theta_i - \theta_{A,i}^\text{*})^2 + \lambda_B F_{B, i} (\theta_i - \theta_{B,i}^\text{*})^2 \Bigg ) + \text{constant}
$$

现在我们认为 $\theta_{B,i}^\text{*}$ 和 $\theta_{A,i}^\text{*}$ 是差不多的（毕竟这就是 regularization-based 方法的目标），所以 $(\theta_i - \theta_{B,i}^\text{*})$ 和 $(\theta_i - \theta_{A,i}^\text{*})$ 也是差不多的。那么 $\log (\theta \mid D_A, D_B, D_C)$ 可以进一步近似为：

$$
\log (\theta \mid D_A, D_B, D_C) \approx \log p(D_C \mid \theta) + \frac{1}{2} \sum_i (\lambda_A F_{A, i} + \lambda_B F_{B, i})(\theta_i - \theta_{B,i}^\text{*})^2 + \text{constant}
$$

推广到 $T$ 个任务，优化目标即为：

$$
\theta_T^{*} = \arg \min_\theta \left \{ - \log p(D_T \mid \theta) - \frac{1}{2} \sum_i \Bigg ( \sum_{t<T} \lambda_t F_{t, i} \Bigg )(\theta_i - \theta_{T-1,i}^\text{*})^2 \right \}
$$

所以可以看到，我们并不需要为每个历史任务都维护一个惩罚项，我们只需要对上一个任务训练完后的最优参数加惩罚项就好。


**Progress & Compress: A Scalable Framework for Continual Learning.** *Jonathan Schwarz, et al.* arXiv 2018. [[Paper]](https://arxiv.org/pdf/1805.06370.pdf)


这就是 Online EWC 的思想，其正则项为：

$$
L_T^\text{regularization} = \frac{1}{2} \sum_i \hat{F}_{T-1, i}(\theta_i - \theta_{T-1,i}^\text{*})^2
$$

其中 $\hat{F}$ 是 Fisher 信息矩阵 $F$ 的（带权）累加和：

$$
\hat{F}_t = \gamma \hat{F}_{t-1} + F_t
$$

$$
\hat{F}_1 = F_1
$$

$\gamma < 1$ 是一个超参数，相当于之前的任务上的算出来的参数重要性对最终结果的贡献会逐渐降低。

P.S. 讲道理我也不知道它为啥要取 online EWC 这个名字，我第一眼看到这个名字还以为它要往 online learning 上靠，结果并没有...



## MAS

**Memory Aware Synapses: Learning What (Not) to Forget.** *Rahaf Aljundi, et al.* ECCV 2018. [[Paper]](https://arxiv.org/pdf/1711.09601.pdf) [[Code]](https://github.com/rahafaljundi/MAS-Memory-Aware-Synapses)

**MAS（Memory Aware Synapses）**


### 参数重要性

对于第 $k$ 个输入数据点 $x_k$，如果对第 $i$ 个参数 $\theta_i$ 做了一个很小的改变 $\delta$，就让模型 $F$ 的输出结果有了很大的变化，就说明 $\theta_i$ 是很重要的。

模型输出对所有参数 $\theta = \{\theta_i\}$ 的变化的变化量可以近似为：

$$
F(x_k;\theta + \delta) - F(x_k; \theta) \approx \sum_i g_i (x_k) \delta_i
$$

$$
\rArr g_i(x_k) \approx \frac{\partial F(x_k)}{\partial \theta_i}
$$

$g_i(x_k)$ 可以被看做参数 $\theta_i$ 的变化对模型对样本 $x_k$ 的输出的影响。可以看到 $g_i(x_k)$ 就是模型函数对参数 $\theta_i$ 的偏导。

重要性 $\Omega_i$ 为所有样本上的偏导的均值：

$$
\Omega_i = \frac{1}{N} \sum_{k=1}^N \| g_i(x_k) \|
$$

每个任务训练完后，都会算一个刚训练完的任务中每个参数的重要性，然后累加到之前的 $\Omega_i$ 上。一直累加可能会让 $\Omega_i$ 变得很大，造成梯度爆炸，于是该论文一作后来的一篇工作 [Task-Free Continual Learning](https://arxiv.org/pdf/1812.03596.pdf) 中用的是迄今为止所有 $\Omega_i$ 的平均值。


### L2 范数

大多数神经网络的输出 $F(x_k;\theta)$ 都是一个 $n$ 维向量，比如分类任务会输出每个类别上的概率。这样在求每个 $g_i(x_k)$ 的时候，算的都是向量的偏导，需要做 $n$ 次反向传播。

为了降低计算复杂度，论文给了另一个可选的方法：对 $F(x_k;\theta)$ 的 [L2 范数](#l2-范数-1)（的平方）求偏导，这样算的就是标量的偏导了，只需要一次反向传播：

$$
\\[2px]
g_i(x_k) = \frac{\partial [\ell_2^2 (F(x_k))]}{\partial \theta_i}
$$


## IS

**Continual Learning Through Synaptic Intelligence.** *Friedemann Zenke, et al.* ICML 2017. [[Paper]](https://arxiv.org/pdf/1703.04200.pdf) [[Code]](https://github.com/ganguli-lab/pathint)

**IS（Intelligent Synapses）**

MAS 算的是参数改变对模型输出的影响，而 IS 算的是参数改变对损失函数的影响：

$$
L(\theta(t) + \delta(t)) - L(\theta(t)) \approx \sum_i g_i (t) \delta_i(t)
$$

$$
\rArr g_i(t) \approx \frac{\partial L}{\partial \theta_i}
$$

其中 $\theta(t)$ 为任务 $t$ 训练完后的参数。如果算一个任务 $\mu-1$ 到任务 $\mu$ 的更新轨迹上所有微小变化的总和，即对更新开始时刻 $t^{\mu-1}$ 到结束时刻 $t^\mu$ 积分：

$$
\begin{aligned}
    \int_{t^{\mu-1}}^{t^\mu} g(t) \delta(t) dt &= \sum_i \int_{t^{\mu-1}}^{t^\mu} g_i(t) \delta_i(t) dt \\
        &= - \sum_i \omega_i^\mu
\end{aligned}
$$

$$
\rArr \omega_i^\mu = - \int_{t^{\mu-1}}^{t^\mu} g_i(t) \delta_i(t) dt
$$

$\omega_i^\mu$ 就是参数 $\theta_i$ 的变化对损失函数输出的影响。在 offline 场景下，$\omega_i^\mu$ 直接就能通过损失函数输出值的变化量算出来。与 EWC 和 MAS 不同的是，IS 还可以在 online 场景下计算 $\omega_i^\mu$，这时 $g_i(t)$ 可以用 $g_i(t) = \frac{\partial L}{\partial \theta_i}$ 来近似，而 $\delta_i(t)$ 就相当于 $\delta_i(t) = \theta_i'(t) = \frac{\partial \theta_i}{\partial t}$。

最后，参数重要性的计算公式为：

$$
\Omega_i^\mu = \sum_{\nu < \mu} \frac{\omega_\nu^\mu}{(\Delta_i^\nu)^2 + \xi}
$$

其中 $\Delta_i^\nu = \theta_i(t^\nu) - \theta_i(t^{\nu-1})$ 是为了保证 $\Omega_i^\mu$ 的尺度跟损失函数输出值的尺度是差不多的。为了避免分母为 0 所以加了一个 $\xi$。


## 附录

### 海森矩阵

令 $x = (x_1, x_2, \dots, x_n)$，多元函数 $f(x)$ 在 $x=x_0$ 处的的二阶偏导是一个海森矩阵（Hessian matrix）：

$$
\\[1pt]
f''(x_0) = H = 

\begin{bmatrix}
    \frac{\partial f}{\partial x_1 x_1} & \frac{\partial f}{\partial x_1 x_2} & \dots & \frac{\partial f}{\partial x_1 x_n} \\[5pt]
    \frac{\partial f}{\partial x_2 x_1} & \frac{\partial f}{\partial x_2 x_2} & \dots & \frac{\partial f}{\partial x_2 x_n} \\[5pt]
    \vdots & \vdots & \ddots & \vdots \\[5pt]
    \frac{\partial f}{\partial x_n x_1} & \frac{\partial f}{\partial x_n x_2} & \dots & \frac{\partial f}{\partial x_n x_n} \\
\end{bmatrix}_{x=x_0}
$$


### 泰勒展开

$f(x)$ 在 $x = x_0$ 处的泰勒展开公式为：

$$
f(x) = \frac{f(x_0)}{0!} + \frac{f'(x_0)}{1!} \cdot (x - x_0) + \frac{f''(x_0)}{2!} \cdot (x - x_0)^2 + o(x_0) \\[2px]
$$

$o(x_0)$ 为高阶项。在 $f(x)$ 是多元函数的情况下，一阶导要写成雅克比矩阵（Jacobian matrix），二阶导要写成海森矩阵：

$$
f(x) = \frac{f(x_0)}{0!} + \frac{J_f(x_0)}{1!} \cdot (x - x_0) + (x - x_0)^\top \cdot \frac{H_f(x_0)}{2!} \cdot (x - x_0) + o(x_0) \\[2px]
$$

### L2 范数

向量 $x = [ x_1, x_2, \dots, x_n ]$ 的 L2 范数（L2 norm）为：

$$
\| x \|_2 = \sqrt{\Big ( \sum_{i=1}^n |x_i|^2 \Big )}
$$


## 参考

- [Three Scenarios for Continual Learning.](https://arxiv.org/pdf/1904.07734.pdf) *Gido M. van de Ven, et al.* arXiv 2019.

- [Elastic Weight Consolidation (EWC): Nuts and Bolts.](https://abhishekaich27.github.io/data/WriteUps/EWC_nuts_and_bolts.pdf) *Abhishek Aich.*

- [终身持续学习-可塑权重巩固（Elastic Weight Consolidation）](https://zhuanlan.zhihu.com/p/86365066)

- [Fisher Information Matrix](https://wiseodd.github.io/techblog/2018/03/11/fisher-information/)

- [费雪信息 (Fisher information) 的直观意义是什么？](https://www.zhihu.com/question/26561604)

- [Fisher Information 学习笔记](https://blog.csdn.net/lanran2/article/details/77995062)