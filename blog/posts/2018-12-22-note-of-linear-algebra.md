---
layout: post
title: "线性代数笔记"
subtitle: 'Note of Linear Algebra'
author: "Renovamen"
date: 2018-12-22
header_img: /img/in-post/2018-12-22/header.jpg
catalog: true
tags:
  - Math
---

MIT 18.06 / Stanford CS229 (Linear Algebra 部分)

<!-- more -->

# 1.矩阵乘法

## 1.1 向量 x 向量

1. 有向量 $x,y \in R^n$，$x^Ty$ 被称为**向量内积（Inner Product）**或**点积（Dot Product）**，结果为一个实数。 

    $$
    x^Ty \in R^n = 

    \left[
      \begin{matrix}
        x_1 & x_2 & ... & x_n
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        y_1  \\
        y_2  \\
        \vdots  \\
        y_n
      \end{matrix}
    \right]

    = \sum_{i=1}^n x_i y_i
    $$

    注：$x^Ty = y^Tx$ 始终成立。

2. 有向量 $x \in R^n, y \in R^m$，$xy^T \in R^{m \times n}$ 被称为**向量外积（Outer Product）**，结果为一个矩阵，其中 $(xy^T)_{ij} = x_i y_i$。

    $$
    xy^T \in R^{m \times n} = 

    \left[
      \begin{matrix}
        x_1  \\
        x_2  \\
        ...  \\
        x_m
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        y_1 & y_2 & ... & y_n
      \end{matrix}
    \right]

    = 
    
    \left[
      \begin{matrix}
        x_1y_1 & x_1y_2 & \cdots & x_1y_n \\
        x_2y_1 & x_2y_2 & \cdots & x_2y_n \\
        \vdots & \vdots & \ddots & \vdots \\
        x_my_1 & x_my_2 & \cdots & x_my_n
      \end{matrix}
    \right]
    $$

## 1.2 矩阵 x 向量

有矩阵 $A \in R^{m \times n}$，向量 $x \in R^n$，它们的积是一个向量 $Ax \in R^m$。有两种理解矩阵与向量的乘法的方式：

1. 行列内积

    如果按行写 $A$，可以把 $Ax$ 表示为：

    $$
    y = Ax = 

    \left[
      \begin{matrix}
        - & a_1^T  & - \\
        - & a_2^T  & - \\
          & \vdots & \\
        - & a_m^T  & -
      \end{matrix}
    \right]x = 

    \left[
      \begin{matrix}
        a_1^Tx \\
        a_2^Tx \\
        \vdots \\
        a_m^Tx
      \end{matrix}
    \right]
    $$

    可以看出 $y$ 的第 $i$ 行是 $A$ 的第 $i$ 行和 $x$ 的内积，即 $y_i = a_i^T x$。

2. 整列相乘

    把 $A$ 按列表示：

    $$
    y = Ax = 

    \left[
      \begin{matrix}
          | &   | &        &   | \\
        a_1 & a_2 & \cdots & a_n \\
          | &   | &        &   |
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        x_1 \\
        x_2 \\
        \vdots \\
        x_n
      \end{matrix}
    \right] = 

    [ a^1 ] x_1 + [ a^2 ] x_2 + \cdots + [ a^n ] x_n
    $$

    可以看到，$y$ 是 $A$ 的列的线性组合，其中线性组合的系数由 $x$ 的元素给出。
  
也可以在左侧乘以行向量，写为 $y^T = x^T A$，其中 $ A \in R^{m \times n}, x \in R^m, y \in R^n $。也有两种理解方式：

1. 把 $A$ 按列表示：

    $$
    y^T = x^T A = 

    x^T

    \left[
      \begin{matrix}
          | &   | &        &   | \\
        a_1 & a_2 & \cdots & a_n \\
          | &   | &        &   |
      \end{matrix}
    \right]
    
    =

    \left[
      \begin{matrix}
        x^T a^1 & x^T a^2 & \cdots & x^T a^n
      \end{matrix}
    \right]
    $$

    可以看出 $y^T$ 的第 $i$ 个元素为 $x$ 和 $A$ 的第 $i$ 列的内积。

2. 整行相乘

    把 $A$ 按行表示：

    $$
    y^T = x^T A = 

    \left[
      \begin{matrix}
        x_1 & x_2 & \cdots & x_n
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        - a_1^T - \\
        - a_2^T - \\
          \vdots \\
        - a_m^T -
      \end{matrix}
    \right]
    
    = x_1 [- a_1^T -] + x_2 [- a_2^T -] + \cdots + x_n [- a_n^T -]
    $$

    可以看出 $y^T$ 是 $A$ 的行的线性组合，其中线性组合的系数由 $x$ 的元素给出。

## 1.3 矩阵 x 矩阵

两个矩阵相乘，其中 $A \in R^{m \times n}, B \in R^{n \times p}$（$A$ 的总列数必须与 $B$ 的总行数相等），则：

$$ 
C = AB \in R^{m \times p}
$$

其中 $C_{ij} = \text{row}_i \times \text{column}_j = \sum_{k=1}^n A_{ik}B_{kj}$。

1. 行列内积

    显然，$C_{ij}$ 等于 $A$ 的第 $i$ 行和 $B$ 的第 $j$ 列的内积：

    $$
    C = AB = 

    \left[
      \begin{matrix}
        - & a_1^T  & - \\
        - & a_2^T  & - \\
          & \vdots & \\
        - & a_m^T  & -
      \end{matrix}
    \right]
    
    \left[
      \begin{matrix}
          | &   | &        &   | \\
        b_1 & b_2 & \cdots & b_p \\
          | &   | &        &   |
      \end{matrix}
    \right]
    
    = 

    \left[
      \begin{matrix}
        a_1^Tb_1 & a_1^Tb_2 & \cdots & a_1^Tb_p \\
        a_2^Tb_1 & a_2^Tb_2 & \cdots & a_2^Tb_p \\
          \vdots &   \vdots & \ddots &   \vdots \\
        a_m^Tb_1 & a_m^Tb_2 & \cdots & a_m^Tb_p
      \end{matrix}
    \right]

    $$


2. 列乘以行

    用列表示 $A$，用行表示 $B$，这时 $C_{ij}$ 等于 $A$ 的第 $i$ 列和 $B$ 的第 $j$ 行的外积的和：

    $$
    C = AB = 

    \left[
      \begin{matrix}
          | &   | &        &   | \\
        a_1 & a_2 & \cdots & a_n \\
          | &   | &        &   |
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        - & b_1^T  & - \\
        - & b_2^T  & - \\
          & \vdots & \\
        - & b_n^T  & -
      \end{matrix}
    \right]
    
    = 

    \sum_{i=1}^n a_ib_i^T
    $$

    这种情况下，$a_i \in R^m$，$b_i \in R^p$，外积 $a_ib_i^T$ 的维度是 $m \times p$，与 $C$ 的维度一致。

    如：

    $$
    \left[
      \begin{matrix}
        2 & 7 \\
        3 & 8 \\
        4 & 9
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        1 & 6 \\
        0 & 0
      \end{matrix}
    \right]

    =

    \left[
      \begin{matrix}
        2 \\
        3 \\
        4
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        1 & 6
      \end{matrix}
    \right]

    +

    \left[
      \begin{matrix}
        7 \\
        8 \\
        9
      \end{matrix}
    \right]

    \left[
      \begin{matrix}
        0 & 0
      \end{matrix}
    \right]

    = 

    \left[
      \begin{matrix}
        2 & 12 \\
        3 & 18 \\
        4 & 24
      \end{matrix}
    \right]
    $$

    每一次都是用列向量与行向量相乘得到一个矩阵，每次得到的矩阵都有特点。如：

    $$
    \begin{bmatrix}
      2 \\
      3 \\
      4
    \end{bmatrix}

    \begin{bmatrix}
      1 & 6
    \end{bmatrix}
    =
    \begin{bmatrix}
      2 & 12 \\
      3 & 18 \\
      4 & 24
    \end{bmatrix}
    $$
    
    矩阵
    $\begin{bmatrix} 
      2 & 12 \\ 
      3 & 18 \\ 
      4 & 24 
    \end{bmatrix}$
    每一列都和向量
    $\begin{bmatrix} 
      2 \\ 
      3 \\ 
      4 
    \end{bmatrix}$
    同向，即列向量都在
    $\begin{bmatrix}
      2 \\ 
      3 \\ 
      4 
    \end{bmatrix}$
    这条直线上，列空间是一条直线。同理，行向量都在
    $\begin{bmatrix}
      1 & 6
    \end{bmatrix}$
    这条直线上，行空间（矩阵行所有可能的线性组合）是一条直线。


3. 整列相乘

    把 $B$ 用列表示，则可以将 $C$ 的列视为 $A$ 与 $B$ 的列的矩阵向量积（1.2 节）：

    $$
    C = AB = A

    \left[
      \begin{matrix}
          | &   | &        &   | \\
        b_1 & b_2 & \cdots & b_p \\
          | &   | &        &   |
      \end{matrix}
    \right]

    =

    \left[
      \begin{matrix}
          | &   | &        &   | \\
        Ab_1 & Ab_2 & \cdots & Ab_p \\
          | &   | &        &   |
      \end{matrix}
    \right]
    $$

    $c_j = Ab_j$，可以看做 $C$ 的第 $j$ 列是 $A$ 的列向量以 $B$ 的第 $j$ 列作为系数所求得的线性组合。


4. 整行相乘

    把 $A$ 用行表示，则可以将 $C$ 的行视为 $A$ 与 $B$ 的列的矩阵向量积（1.2 节）：

    $$
    C = AB =

    \left[
      \begin{matrix}
        - & a_1^T  & - \\
        - & a_2^T  & - \\
          & \vdots &   \\
        - & a_m^T  & -
      \end{matrix}
    \right] B = 

    \left[
      \begin{matrix}
        - & a_1^TB & - \\
        - & a_2^TB & - \\
          & \vdots &   \\
        - & a_m^TB & -
      \end{matrix}
    \right]
    $$

    $c_i^T = a_i^Tb$，可以看做 $C$ 的第 $i$ 行是 $B$ 的行向量以 $A$ 的第 $i$ 行作为系数所求得的线性组合。

5. 分块乘法

    $$
    \left[
      \begin{array}{c|c}
               A_1 & A_2 \\
        \hline A_3 & A_4
      \end{array}
    \right]
    
    \left[
      \begin{array}{c|c}
               B_1 & B_2 \\
        \hline B_3 & B_4
      \end{array}
    \right]
    
    =
    
    \left[
      \begin{array}{c|c}
               A_1B_1+A_2B_3 & A_1B_2+A_2B_4 \\
        \hline A_3B_1+A_4B_3 & A_3B_2+A_4B_4
      \end{array}
    \right]
    $$

    在分块合适的情况下，可以简化运算。


# 2.矩阵消元

## 2.1 消元法

三元方程组 
$\begin{cases}
  x& + 2y& + z& = 2 \\
  3x& + 8y& + z& = 12 \\
  &4y& + z& = 2
\end{cases}$
对应的矩阵形式 $Ax=b$ 为：

$$
\begin{bmatrix}
  1 & 2 & 1 \\
  3 & 8 & 1 \\
  0 & 4 & 1
\end{bmatrix}
\begin{bmatrix}
  x \\
  y \\
  z
\end{bmatrix}
=
\begin{bmatrix}
  2 \\
  12 \\
  2
\end{bmatrix}
$$


**消元**（$[A \| b]$ 为方程组的**增广矩阵**形式）：

$$
[A \mid b] = 

\left[
  \begin{array}{c c c |c}
    \underline{1} & 2 & 1 & 2 \\
    3             & 8 & 1 & 12 \\
    0             & 4 & 1 & 2
  \end{array}
\right]
\underrightarrow{r_2 - 3r_1}

\left[
  \begin{array}{c c c |c}
    \underline{1} & 2             & 1  & 2 \\
    0             & \underline{2} & -2 & 6 \\
    0             & 4             & 1  & 2
  \end{array}
\right]

\underrightarrow{r_3 - 2r_2}
\left[
  \begin{array}{c c c |c}
    \underline{1} & 2             & 1             & 2 \\
    0             & \underline{2} & -2            & 6 \\
    0             & 0             & \underline{5} & -10
  \end{array}
\right]
$$

下划线的元素为**主元**，主元不能为零。如果在消元时遇到主元位置为零，则需要看它的后面的行对应位置是否为 0，如果不为 0，就交换这两行，将非零数视为主元。

消元失效：如果它后面所有行的对应位置都为 0，则该矩阵**不可逆**，消元法求出的解不唯一。（如：把第三个方程 $z$ 前的系数成 -4，会导致第二步消元时最后一行全部为零，则第三个主元就不存在了，消元就不能继续进行了。）

消元后方程组变为 
$\begin{cases}
   x  & +2y & +z  & = 2 \\
      &  2y & -2z & = 6 \\
      &     &  5z & = -10
\end{cases}$

从第三个方程求出 $z=-2$，代入第二个方程求出 $y=1$，再代入第一个方程求出 $x=2$。

## 2.1 消元矩阵




# 8.求解 Ax = b：可解性和解的结构

## 8.1 Ax = b 的解

举例，同上一讲：有 $3 \times 4$ 矩阵 $A$： 

$$
A=
\left[
  \begin{matrix}
    1 & 2 & 2 & 2\\
    2 & 4 & 6 & 8\\
    3 & 6 & 8 & 10
  \end{matrix}
\right]
$$

求 $Ax=b$ 的特解：

写出其增广矩阵（augmented matrix）$[A \mid b]$：

$$
\left[
\begin{array}{c c c c|c}
1 & 2 & 2 & 2 & b_1 \\
2 & 4 & 6 & 8 & b_2 \\
3 & 6 & 8 & 10 & b_3
\end{array}
\right]
\underrightarrow{\text{消元}}
\left[
\begin{array}{c c c c|c}
1 & 2 & 2 & 2 & b_1 \\
0 & 0 & 2 & 4 & b_2-2b_1 \\
0 & 0 & 0 & 0 & b_3-b_2-b_1
\end{array}
\right]
$$

显然，有解的必要条件为 $b_3-b_2-b_1=0$。

### 8.1.1 Ax = b 可解性

讨论 $b$ 满足什么条件才能让方程 $Ax=b$ 有解（solvability condition on $b$）：

1. 从列空间看：当且仅当 $b$ 属于 $A$ 的列空间时；
2. 如果 $A$ 的各行线性组合得到 0 行，则 $b$ 端分量做同样的线性组合，结果也为 0 时，方程才有解。

### 8.1.2 Ax = b 的解结构
1. 特解

    解法：令所有自由变量取 0，则有
    $\Big\lbrace
    \begin{aligned}
      x_1 + 2x_3 & = 1 \\
      2x_3 & = 3
    \end{aligned}$
    ，解得
    $\Big\lbrace
    \begin{aligned}
      x_1 & = -2 \\
      x_3 & = \frac{3}{2}
    \end{aligned}$
   
    代入 $Ax=b$ 求得特解： 
    $x_p=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}$

2. 通解

    令 $Ax=b$ 成立的所有解：
    $\Big\lbrace
    \begin{aligned}
      A x_p & = b \\
      A x_n & = 0
    \end{aligned}
    \quad
      \rightarrow{}
    \quad
    A(x_p+x_n)=b$

    即 $Ax=b$ 的解集为其特解加上零空间。对本例有：

    $$
    x_{\text{complete}}=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}
    +c_1
    \begin{bmatrix}
      -2\\
      1\\
      0\\
      0
    \end{bmatrix}
    +c_2
    \begin{bmatrix}
      2\\
      0\\
      -2\\
      1
    \end{bmatrix}
    $$

## 8.2 秩 r 与 Ax = b 的解关系

对于 $m \times n$ 矩阵 $A$，有矩阵 $A$ 的秩 $r \leq \min(m, n)$。

### 8.2.1 列满秩

主元变量为 $n$，没有自由变量。因为没有自由变量可以赋值，所以列的线性组合得不到 0（因为如果存在非零 $x$ 使 $Ax=0$ 成立，那么 $A$ 中有一列是没有贡献的，既然没有贡献，那么也就不存在列满秩的情况了）。

所以列满秩的解的情况：0 或 1 个特解。

举例：

列满秩 $r=n$ 情况：

$$
A=
\begin{bmatrix}
  1 & 3 \\
  2 & 1 \\
  6 & 1 \\
  5 & 1
\end{bmatrix}
,
R=
\begin{bmatrix}
  1 & 0 \\
  0 & 1 \\
  0 & 0 \\
  0 & 0
\end{bmatrix}
$$

$\text{rank}(A)=2$，要使 $Ax=b, b \neq 0$ 有非零解，$b$ 必须取 $A$ 中各列的线性组合，此时 $A$ 的零空间中只有 $0$ 向量。

**P.S.** 因为行向量是 2 维的，且前两行线性无关，2 维平面中有两个向量线性无关，那该平面的所有向量都可以由这两个向量线性组合得到，所以后面两行一定会是 0 行。

### 8.2.2 行满秩
每行都有主元，不存在 0 行，那么 $b$ 就没有要求，而且有 $n-r$ 个自由变量，所以解有无穷多个。

举例：

行满秩 $r=m$ 情况：

$$
A=
\begin{bmatrix}
  1 & 2 & 6 & 5 \\
  3 & 1 & 1 & 1
\end{bmatrix},

R=
\begin{bmatrix}
  1 & 0 & - & - \\
  0 & 1 & - & -
\end{bmatrix}
$$

$\text{rank}(A)=2$，$\forall b \in R^m$ 都有 $x \neq 0$ 的解，因为此时 $A$ 的列空间为 $R^m$，$b \in R^m$ 恒成立，组成 $A$ 的零空间的自由变量有 $n-r$ 个。


### 8.2.3 行列满秩
代表的是满秩方阵，消元到最简形式是单位矩阵，是一个可逆矩阵，结合 $r=m$ 和 $r=n$ 的解的情况得出此时一定有一个解 $b$，$b$ 满足是 $A$ 向量的线性组合。

举例：

行列满秩情况：$r=m=n$，如：

$$
A=
\begin{bmatrix}
  1 & 2 \\
  3 & 4
\end{bmatrix}
$$

则 $A$ 最终可以化简为 $R=I$，其零空间只包含 $0$ 向量。


### 8.2.4 总结

$$
\begin{array}{c|c|c|c}
  r=m=n & r=n<m & r=m<n & r<m,r<n \\

  R=I & R=\begin{bmatrix}I\\0\end{bmatrix} & R=\begin{bmatrix}I&F\end{bmatrix} & R=\begin{bmatrix}I&F\\0&0\end{bmatrix} \\
  
  \text{1 solution} & \text{0 or 1 solution} & \infty \text{ solution} & \text{0 or } \infty \text{ solution}
\end{array}
$$



# 9. 线性相关性、基、维数

## 9.1 线性相关性

$v_1,\ v_2,\ \cdots,\ v_n$ 是 $m \times n$ 矩阵 $A$ 的列向量：

- 如果 $A$ 零空间中有且仅有 $0$ 向量，则各向量线性无关，$\text{rank}(A)=n$。

- 如果存在非零向量 $c$ 使得 $Ac=0$，则存在线性相关向量，$\text{rank}(A)\lt n$。


## 9.2 基

向量空间 $S$ 中的一组基（basis），具有两个性质：

1. 他们线性无关；
2. 他们可以生成 $S$。

对于向量空间 $R^n$，如果 $n$ 个向量组成的矩阵为可逆矩阵，则这 $n$ 个向量为该空间的一组基，而数字 $n$ 就是该空间的维数（dimension）。


## 9.3 维数

举例：

$$
A=
\begin{bmatrix}
  1 & 2 & 3 & 1 \\
  1 & 1 & 2 & 1 \\
  1 & 2 & 3 & 1
\end{bmatrix}
$$

$A$ 的列向量线性相关，其零空间中有非零向量，所以：

$$
\text{rank}(A)=2=\text{主元存在的列数}=\text{列空间维数}
$$

可以很容易的求得 $Ax=0$ 的两个解，如：

$$
x_1=
\begin{bmatrix}-1 \\
  -1 \\
  1 \\
  0
\end{bmatrix}，
x_2=
\begin{bmatrix}
  -1 \\
  0 \\
  0 \\
  1
\end{bmatrix}
$$

根据前几讲，我们知道特解的个数就是自由变量的个数，所以：

$$
n-\text{rank}(A) = 2 = \text{自由变量存在的列数} = \text{零空间维数}
$$

可以得到：列空间维数 $\dim C(A)=\text{rank}(A)$，零空间维数 $\dim N(A)=n-\text{rank}(A)$。

## 参考

1. [MIT - 18.06 Linear Algebra](http://open.163.com/special/opencourse/daishu.html)

2. [Stanford - CS229 Machine Learning (Linear Algebra)](http://cs229.stanford.edu/summer2019/cs229-linalg.pdf)

3. [Github - zlotus/notes-linear-algebra](https://github.com/zlotus/notes-linear-algebra)

4. [Github - apachecn/18.06-linalg-notes](https://github.com/apachecn/18.06-linalg-notes)