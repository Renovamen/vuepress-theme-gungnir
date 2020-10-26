---
layout: post
title: 图像美感评估
subtitle: A Survey on Image Aesthetic Assessment
author: "Renovamen"
date: 2020-02-29
header_img: /img/in-post/2020-02-29/header.jpeg
catalog: true
tags:
  - CV
---

对图像美感评估（Image Aesthetic Assessment）领域的简单调研，到时候大概可以直接复制粘贴进毕业论文里。

<!-- more -->

## Surveys

- **Algorithmic Inferencing of Aesthetics and Emotion in Natural Images: An Exposition.** *Ritendra Datta, Jia Li, and James Z. Wang.* ICIP 2008. [[Paper]](https://www.ri.cmu.edu/pub_files/pub4/datta_ritendra_2008_2/datta_ritendra_2008_2.pdf)

- **On Aesthetics and Emotions in Images: A Computational Perspective.** *Dhiraj Joshi, et al.* IEEE Signal Processing Magazine 2011. [[IEEE]](https://ieeexplore.ieee.org/document/5999579) [[Paper]](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/37213.pdf)

- **Aesthetic Analysis of Images.** 2015. [[Report]](https://eg.uc.pt/bitstream/10316/35507/1/Aesthetic%20Analysis%20of%20Images%20Intermediate%20report.pdf)

- **Image Aesthetic Assessment: An Experimental Survey.** *Yubin Deng, et al.* IEEE Signal Processing Magazine 2017. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/7974874) [[arxiv]](https://arxiv.org/pdf/1610.00838.pdf)

- **A Report: Image Aesthetic Assessment.** *Chunbiao Zhu.* 2018. [[Report]](https://www.researchgate.net/publication/325184839_A_Report_Image_Aesthetic_Assessment)


## Datasets

### Photo.net (PN)

**Algorithmic Inferencing of Aesthetics and Emotion in Natural Images: An Exposition.** *Ritendra Datta, Jia Li, and James Z. Wang.* ICIP 2008. [[Paper]](https://www.ri.cmu.edu/pub_files/pub4/datta_ritendra_2008_2/datta_ritendra_2008_2.pdf)

共 20,278 张图片（[Deng et al. 2017](https://arxiv.org/pdf/1610.00838.pdf)），平均每张图片 12 个评分，评分范围为 0-7，分越高说明图片质量越高。所有图片的平均得分的峰值在分布右侧，说明整体评价偏高。

![photo-net-distribution](/img/in-post/2020-02-29/photo-net-distribution.png)

<p class="desc">PN 数据集的图片平均得分分布</p>

有论文认为 PN 数据集中超过 30% 的图片都被其拍摄者 P 上了一个相框以让它更好看一些，这会导致这些图片的评分偏高（[Marchesotti, et al. 2011](https://ieeexplore.ieee.org/abstract/document/6126444)）。

下载：需要根据 [Dataset File](http://ritendra.weebly.com/aesthetics-datasets.html) 中的索引号去 [photo.net](http://photo.net) 上找图片，有的图片已经被从网上移除了。



### DPChallenge

**Algorithmic Inferencing of Aesthetics and Emotion in Natural Images: An Exposition.** *Ritendra Datta, Jia Li, and James Z. Wang.* ICIP 2008. [[Paper]](https://www.ri.cmu.edu/pub_files/pub4/datta_ritendra_2008_2/datta_ritendra_2008_2.pdf)（依然是这篇论文）

共 16,509 张图片，平均每张图片 205 个评分，评分范围为 0-10，分越高说明图片质量越高。


![dpchallenge-distribution](/img/in-post/2020-02-29/dpchallenge-distribution.png)

<p class="desc">DPChallenge 数据集的图片平均得分分布</p>

**现在大概已经可以被 AVA 数据集所取代。**

下载：需要根据 [Dataset File](http://ritendra.weebly.com/aesthetics-datasets.html) 中的索引号去 [dpchallenge.com](https://www.dpchallenge.com/) 上找图片。


### CUHK-PQ

**Content-based Photo Quality Assessment.** *Wei Luo, Xiaogang Wang, and Xiaoou Tang.* ICCV 2011. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/6126498) [[Paper]](http://mmlab.ie.cuhk.edu.hk/archive/2011/cvpr11_WLuo_XWang_XTang.pdf)

**Content-based Photo Quality Assessment.** *Xiaoou Tang, Wei Luo, and Xiaogang Wang.* TMM 2013. [[IEEE]](https://ieeexplore.ieee.org/document/6544270) [[Paper]](http://mmlab.ie.cuhk.edu.hk/archive/2011/cvpr11_WLuo_XWang_XTang.pdf)

现在有 30,000 左右张图片，每张图片被按内容分为了 7 个类别。美学标注只有“高质量”和“低质量”两个，高低质量图片比例约为 1:3（[Deng et al. 2017](https://arxiv.org/pdf/1610.00838.pdf)）。所以该数据集很难被用来进行评分任务的训练，而且分类难度不算大。因为是直接把从专业摄影网站（dpchallenge.com）和从业余摄影师处收集到的图片混在了一起，所以可能不能代表真实场景（[Murray et al. 2012](http://refbase.cvc.uab.es/files/MMP2012a.pdf)）。

下载：[<i class="fas fa-link"></i> Multimedia Laboratory, CUHK](http://mmlab.ie.cuhk.edu.hk/archive/CUHKPQ/Dataset.htm)


### AVA

**AVA: A Large-Scale Database for Aesthetic Visual Analysis.** *Naila Murray, Luca Marchesotti, Florent Perronnin.* CVPR 2012. [[IEEE]](https://ieeexplore.ieee.org/document/6247954) [[Paper]](http://refbase.cvc.uab.es/files/MMP2012a.pdf) [[Dataset]](https://github.com/mtobeiyf/ava_downloader)

收集并标注了来源于 dpchallenge.com 的超过 250,000 张图片。带有美学质量标注（Aesthetic annotations）（78～549 个评分，评分范围为 0-10，分越高说明图片质量越高）、语义标注（Semantic annotations）（共 66 种）和摄影风格标注（Photographic style annotations）（共 14 种，大概就是所谓的“美学因素”）。是第一个带有详细标注的大型图像美感评估数据集，也是图像美感评估领域公认的基准数据集。

该论文比较了 AVA 与其他数据集：

![compare](/img/in-post/2020-02-29/ava-compare.png)

<p class="desc">AVA 与其他数据集的比较</p>

对于二分类任务，一般认为平均得分高于 $5 + \sigma$ 的图片质量高，低于 $5 + \sigma$ 的图片质量低。

但 AVA 的很多图片后期处理痕迹太重。且绝大多数图片来自于专业摄影者而非普通人，所以 AVA 有较大的 bias（[Kone et al. 2016](https://arxiv.org/pdf/1606.01621.pdf)）。

下载：[<i class="fas fa-link"></i> Github](https://github.com/mtobeiyf/ava_downloader)


### AADB

**Photo Aesthetics Ranking Network with Attributes and Content Adaptation.** *Shu Kong, et al.* ECCV 2016. [[arxiv]](https://arxiv.org/pdf/1606.01621.pdf) [[Project]](https://www.ics.uci.edu/~skong2/aesthetics.html) [[Code]](https://github.com/aimerykong/deepImageAestheticsAnalysis) [[Dataset & Model]](https://drive.google.com/open?id=0BxeylfSgpk1MOVduWGxyVlJFUHM)

收集并标注了来自 [Flickr](https://www.flickr.com/) 的共 10,000 张图片。带有美学质量标注（5 个人评分）和美学因素标注（共 11 种，二分类，算是对 AVA 的补充）。

相比 AVA，AADB 中所有图片都是真实照片，且注意平衡了专业摄影者和普通拍照者的作品数量，且标注了每个评分的标注者 ID（用于消除标不同标注者评价标准的不同所带来的影响）。

该论文还比较了 AADB 与其他数据集：

![compare](/img/in-post/2020-02-29/aadb-compare.png)

<p class="desc">AADB 与其他数据集的比较</p>

但 AADB 的数据量过小，且标注人员过少。

下载：[<i class="fas fa-link"></i> Google Drive](https://drive.google.com/open?id=0BxeylfSgpk1MOVduWGxyVlJFUHM)


### AROD

**Will People Like Your Image? Learning the Aesthetic Space.** *Katharina Schwarz, Patrick Wieschollek, and Hendrik P. A. Lensch.* WACV 2018. [[arxiv]](https://arxiv.org/pdf/1611.05203.pdf) [[Code & Dataset]](https://github.com/cgtuebingen/will-people-like-your-image)


从 [Flickr](https://www.flickr.com/) 上爬了 2004 - 2016 年间的超过 380,000 张图片，及他们的浏览量（views）、评论数、被喜欢次数（faves）、图片标题、在网站上的描述等数据。然后定义了图片的美学质量为：

$$
S(i) \sim \frac{\log F(i)}{\log V(i)}
$$

其中 $V(i)$ 为每张图片的 views，$F(i)$ 为 faves。

相当于用一种类似于无监督标注的方法在试图解决 AVA 的 bias 太重和 AADB 数据量和标注人员过少的问题。

该论文还比较了 AROD 和 AVA 与 AADB：

![compare](/img/in-post/2020-02-29/arod-compare.png)

<p class="desc">AROD 与其他数据集的比较</p>

下载：[<i class="fas fa-link"></i> Github](https://github.com/cgtuebingen/will-people-like-your-image)，`arod/list.txt` 中给出了图片的 URL，格式为 `url;faves;views`。

### GPA

**Gourmet Photography Dataset for Aesthetic Assessment of Food Images.** *Kekai Sheng, et al.* SIGGRAPH 2018. [[Dataset]](https://github.com/Openning07/GPA)

一个用于食物图片美感评估的数据集。从社交媒体和食物分类数据集中收集了共 24,000 张图片，然后人工标注（二分类）。

下载：[<i class="fas fa-link"></i> Github](https://github.com/Openning07/GPA)



### PCCD

**Aesthetic Critiques Generation for Photos.** *Kuang-Yu Chang, Kung-Hung Lu, and Chu-Song Chen.* ICCV 2017. [[IEEE]](https://ieeexplore.ieee.org/document/8237642) [[Paper]](https://www.iis.sinica.edu.tw/~kuangyu/iccv17_aesthetic_critiques.pdf) [[Code]](https://github.com/kunghunglu/DeepPhotoCritic-ICCV17) [[Dataset]](https://github.com/ivclab/DeepPhotoCritic-ICCV17)

首次在图像美学数据集中加入了语言评论信息。包含了来自 [GuruShots](https://gurushots.com/)（一个专业图片评论网站）上的 4235 张图片，和它们的超过 60,000 条评论信息。评论被按角度（如“color & light”、“depth of field”等）分成了 7 类。并且张图片都带有对图片整体和 7 个角度的打分（评分范围为 1-10）。可以说在美学因素的标注上比 AVA 和 AADB 的二分类更详细。

但数据量过少。

~~我并没有找到这个数据集，该论文的 [Github 主页](https://github.com/kunghunglu/DeepPhotoCritic-ICCV17)上似乎也没有。~~ 不久前似乎开源了：[<i class="fas fa-link"></i> Github](https://github.com/ivclab/DeepPhotoCritic-ICCV17)

我也不明白为啥 2017 年的论文 2020 年才开源数据集...


### DPC-Caption

**Aesthetic Attributes Assessment of Images.** *Xin Jin, et al.* ACM MM 2019. [[arxiv]](https://arxiv.org/pdf/1907.04983.pdf) [[Dataset]](https://github.com/BestiVictory/DPC-Captions)

把 AVA 中图片的评论都爬了下来，并按角度分成了 6 类，分类的标准基于从 PCCD 中统计出来的信息。比 PCCD 数据量大得多，但没有每个角度的评分，标注要弱一些。

下载：[<i class="fas fa-link"></i> Github](https://github.com/BestiVictory/DPC-Captions)



### 其他

- **Understanding Aesthetics in Photography Using Deep Convolutional neural Networks.** *Maciej Suchecki and Tomasz Trzciski.* SPA 2017. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/8166855) [[Paper]](http://ii.pw.edu.pl/~ttrzcins/papers/SPA_2017.pdf)


    该论文用的数据集与 AROD 比较类似，从 Flicker 上爬了大概 170 万张图片，定义的美学分数为：

    $$
    \text{score} = \log_2 (n_{\text{views}} + \frac{1}{n_{\text{days}}} + 1)
    $$

    其中 $n_{\text{views}}$ 是图片浏览量，$n_{\text{days}}$ 是距离图片上传日期的天数。

    然而该论文最后给出的数据集地址已经失效了......

    &nbsp;

- **An Image is Worth More than a Thousand Favorites: Surfacing the Hidden Beauty of Flickr Pictures.** *Rossano Schifanella, et al.* ICWSM 2015. [[arxiv]](https://arxiv.org/pdf/1505.03358.pdf) [[Dataset]](http://www.di.unito.it/~schifane/dataset/beauty-icwsm15/#)


    研究的是在人气较低的图片中找出高质量图片，它的数据集包含来自 Flicker 上的约 15,000 张图片，带有语义标注（共 4 种）和美学质量标注（评分范围为 1-5）。

    下载：需要根据[这里](http://www.di.unito.it/~schifane/dataset/beauty-icwsm15/#)的 `flickr_photo_id` 通过 [Flicker API](https://www.flickr.com/services/api/) 去搞图片。



## Papers

### 手工特征

**全局特征：**

- **Classification of Digital Photos Taken by Photographers or Home Users.** *Hanghang Tong, et al.* PCM 2004.
[[Paper]](http://bigeye.au.tsinghua.edu.cn/english/paper/_PCM04_tong.pdf)

    图像美感评估最早的一篇论文，提取了基本的全局低级特征（blurriness、contrast、colorfulness、saliency），然后用 boosting 来区分来自专业摄影师和普通拍照者的照片。

- **Studying Aesthetics in Photographic Images Using a Computational Approach.** *Ritendra Datta, et al.* ECCV 2006. [[Paper]](http://infolab.stanford.edu/~wangz/project/imsearch/Aesthetics/ECCV06/datta.pdf)

    靠直觉（论文原话）提取了 56 维低层和高层特征，用 SVM 搞二分类，用 CART 评估美感分数值。展示了用机器学习进行图像美感分析的可行性，是个里程碑。

- **The Design of High-Level Features for Photo Quality Assessment.** *Yan Ke, Xiaoou Tang, Feng Jing.* CVPR 2006. [[Paper]](http://www-cgi.cs.cmu.edu/~yke/photoqual/cvpr06photo.pdf)

    构造了包括很多高层语义特征在内的 7 维特征，然后用朴素贝叶斯搞二分类。该论文跟上一篇论文都是最早把图像审美问题转换为二分类问题的尝试。

**前景背景对比特征：**

- **Photo and Video Quality Evaluation: Focusing on the Subject.** *Yiwen Luo and Xiaoou Tang.* ECCV 2008. [[Paper]](http://mmlab.ie.cuhk.edu.hk/pdf/luoT_ECCV08.pdf)

    先把主题区域和背景分离，然后考虑了主题区域和背景的清晰度对比度、亮度对比度等特征，最终提取了 5 维特征。分类器分别使用了朴素贝叶斯、SVM 和 Gentle AdaBoost。从它给出的结果来看效果比上面两篇论文提高了很多。它还顺便用这种方法搞了一下视频质量评估。


- **Saliency-enhanced Image Aesthetics Class Prediction.** *Lai-Kuan Wong, Kok-Lim Low.* ICIP 2009. [[IEEE]](https://ieeexplore.ieee.org/document/5413825) [[Paper]](https://projet.liris.cnrs.fr/imagine/pub/proceedings/ICIP-2009/pdfs/0000997.pdf)

    也分离了主题区域和背景，认为主题区域一定是显著区域，所以在提取了主题区域时用了一个显著性模型。而且在考虑前景背景对比特征的同时也考虑了一些全局特征。然后用 SVM 搞二分类。

- **A Framework for Photo-quality Assessment and Enhancement Based on Visual
Aesthetics.** *Subhabrata Bhattacharya, et al.* ACM MM 2010. [[Paper]](http://www.cs.cmu.edu/~rahuls/pub/mm2010-rahuls.pdf)


    **A Holistic Approach to Aesthetic Enhancement of Photographs.** *Subhabrata Bhattacharya, et al.* TOMCCAP 2011. [[Paper]](http://www.cs.cmu.edu/~rahuls/pub/tomccap2011-rahuls.pdf)


    对有单个前景的图片提取了 relative foreground position 作为特征（用分割或显著度提取前景的 visual attention point，然后算它跟四个 stress point 之间的距离），对风景图片提取了 visual weight ratio 作为特征（检测地平线，然后算它跟黄金分割线的差距）。然后用 SVR 来对图片的的美感进行打分（范围为 1-5）。它还能根据上述法则提出增强图片美感的建议。


**通用局部特征：**

- **Aesthetic Quality Classification of Photographs Based on Color Harmony.** *Masashi Nishiyama, et al.* CVPR 2011. [[Paper]](http://research.nii.ac.jp/~imarik/resources/papers/CVPR2012-Nishiyama.pdf)

- **Assessing the Aesthetic Quality of Photographs Using Generic Image Descriptors.** *Luca Marchesotti, et al.* ICCV 2011. [[IEEE]](https://ieeexplore.ieee.org/document/6126444) [[Paper]](http://www.tamaraberg.com/teaching/Fall_13/papers/Marchesotti2011.pdf)

- **A Statistic Approach for Photo Quality Assessment.** *Li-Yun Lo, et al.* ISIC 2012. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/6449719) [[Paper]](http://www.csie.kuas.edu.tw/~jcchen/pdf/A%20Statistic%20Approach%20for%20Photo%20Quality%20Assessment%20.pdf)




### 深度学习

#### 分类

**Multi-column：**

- **RAPID: Rating Pictorial Aesthetics Using Deep Learning.** *Xin Lu, et al.* ACM MM 2014. [[Paper]](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.710.1251&rep=rep1&type=pdf)

    **Rating Image Aesthetics Using Deep Learning.** *Xin Lu, et al.* TMM 2015. [[IEEE]](https://ieeexplore.ieee.org/document/7243357) [[Paper]](http://infolab.stanford.edu/~wangz/project/imsearch/Aesthetics/TMM15/lu.pdf)

    首次用神经网络搞图片美感评估。用了双列 CNN，把全局图像和随机提取出的一个局部 patch 各输入一列 CNN，输出的特征会被联合起来输入分类层进行二分类：
    

    ![rapid-dcnn](/img/in-post/2020-02-29/rapid-dcnn.png)
    
    
    因为数据集用的是有 style 标注的 AVA，该论文还把 style 属性也输入了一列 CNN，相当于最后是 3 列 CNN：

    ![rapid-style-cnn](/img/in-post/2020-02-29/rapid-style-cnn.png)


- **Deep Multi-Patch Aggregation Network for Image Style, Aesthetics, and Quality Estimation.** *Xin Lu, et al.* ICCV 2015. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/7410476/) [[Paper]](http://infolab.stanford.edu/~wangz/project/imsearch/Aesthetics/ICCV15/lu.pdf)

    只用了 patch 作为输入。从图片中随机提取一些 patch，用一组 CNN 对每个 patch 提取特征，然后把所有 patch 的特征聚合起来，最后把特征输进 soft-max 层进行二分类。

    ![dma-net](/img/in-post/2020-02-29/dma-net.png)


- **A-Lamp: Adaptive Layout-Aware Multi-Patch Deep Convolutional Neural.** *Shuang Ma, et al.* CVPR 2017. [[Paper]](http://openaccess.thecvf.com/content_cvpr_2017/papers/Ma_A-Lamp_Adaptive_Layout-Aware_CVPR_2017_paper.pdf) [[arxiv]](https://arxiv.org/pdf/1704.00248.pdf)


    上一篇论文的 patch 是随机提取的，它们可能大量重叠，或者不能覆盖图片的关键信息。所以该论文用了一个显著性模型提取了显著度最高、更多样、重叠部分更少的一些 patch。

    同时该论文还用了另一个显著性模型来提取出图片中的主要物体，从而利用了图片中的物体布局信息。

    ![alamp](/img/in-post/2020-02-29/alamp.png)

- **Attention-based Multi-Patch Aggregation for Image Aesthetic Assessment.** *Kekai Sheng, et al.* ACM MM 2018. [[Paper]](http://chongyangma.com/publications/am/2018_am_paper.pdf) [[Code]](https://github.com/Openning07/MPADA)

    在聚合不同 patch 的特征时使用了 attention 机制。


- **Brain-Inspired Deep Networks for Image Aesthetics Assessment.** *Zhangyang Wang, et al.* arXiv 2016. [[arxiv]](https://arxiv.org/pdf/1601.04155.pdf)

- **Composition-preserving Deep Photo Aesthetics Assessment.** *Long Mai, et al.* CVPR 2016.
[[IEEE]](https://ieeexplore.ieee.org/document/7780429) [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Mai_Composition-Preserving_Deep_Photo_CVPR_2016_paper.pdf) [[Project]](http://web.cecs.pdx.edu/~fliu/project/deep-quality/)

    
    因为全连接层的特征数是固定的，所以 CNN 一般会对输入图片的尺寸做固定要求。为了适应这种要求，往往需要对输入图片进行剪裁拉伸等操作，这就会破坏图片的布局、降低图片分辨率、导致图片失真等，从而破坏图片的美感。

    所以该论文提出了一个叫 Multi-Net Adaptive Spatial Pooling ConvNet 的结构，由多个用 adaptive spatial pooling 层替换了普通 pooling 层（卷积层和全连接层之间）的 CNN 组成，每个 CNN 除了 adaptive spatial pooling 不一样其他都一样。每个 CNN 的输入是同一张原始图片，输出是指定大小的特征。最后把所有网络输出的特征聚合起来。

    然后还用了另外一个 CNN 来提取图片的场景特征，跟上述特征一起扔进聚合层聚合。

    ![mna](/img/in-post/2020-02-29/mna.png)

    跟 SPP 有点像：

    **Spatial Pyramid Pooling in Deep Convolutional Networks for Visual Recognition.** *Kaiming He, et al.* TPAMI 2015. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/7005506) [[arxiv]](https://arxiv.org/pdf/1406.4729.pdf) [[Code]](https://github.com/yueruchen/sppnet-pytorch)


**Multi-task：**

- **Deep Aesthetic Quality Assessment with Semantic Information.** *Yueying Kao, Ran He, and Kaiqi Huang.* TIP 2017. [[IEEE]](https://ieeexplore.ieee.org/abstract/document/7814292) [[arxiv]](https://arxiv.org/pdf/1604.04970.pdf)

    用一个 MTCNN 来提取提取美学特征和场景语义信息。


- **Hierarchical Aesthetic Quality Assessment Using Deep Convolutional Neural Networks.** *Yueying Kao, Kaiqi Huang, and Steve Maybank.* Signal Processing: Image Communication 2016. [[Paper]](https://core.ac.uk/download/pdf/141224862.pdf)



- **Visual Aesthetic Quality Assessment with Multi-task Deep Learning.** *Yueying Kao, Ran He, and Kaiqi Huang.* arXiv 2016. [[Paper]](https://www.researchgate.net/profile/Yueying_Kao/publication/301877404_Visual_Aesthetic_Quality_Assessment_with_Multi-task_Deep_Learning/links/573a717108ae9f741b2cad7a/Visual-Aesthetic-Quality-Assessment-with-Multi-task-Deep-Learning.pdf)


- **Photo Aesthetics Ranking Network with Attributes and Content Adaptation.** *Shu Kong, et al.* ECCV 2016. [[arxiv]](https://arxiv.org/pdf/1606.01621.pdf) [[Project]](https://www.ics.uci.edu/~skong2/aesthetics.html) [[Code]](https://github.com/aimerykong/deepImageAestheticsAnalysis) [[Dataset & Model]](https://drive.google.com/open?id=0BxeylfSgpk1MOVduWGxyVlJFUHM)

   提出了 AADB 数据集。


**DBM：**

- **Joint Image and Text Representation for Aesthetics Analysis.** *Ye Zhou, et al.* ACM MM 2016. [[Paper]](http://infolab.stanford.edu/~wangz/project/imsearch/Aesthetics/ACMMM2016/zhou.pdf)

    把 AVA 中所有图片的评论都爬了下来，建了一个叫 AVA-Comments 的数据集。用 DBM 来同时利用图片的视觉特征和评论的文本特征。



#### 评分分布

- **NIMA: Neural Image Assessment.** *Hossein Talebi and Peyman Milanfar.* TIP 2018. [[arxiv]](https://arxiv.org/pdf/1709.05424.pdf) [[Blog]](https://ai.googleblog.com/2017/12/introducing-nima-neural-image-assessment.html) [[Code (Reproduction)]](https://github.com/titu1994/neural-image-assessment)


- **Predicting Aesthetic Score Distribution through Cumulative Jensen-Shannon Divergence.** *Xin Jin, et al.* AAAI 2018. [[Paper]](http://jinxin.me/downloads/papers/028-AAAI2018/ScoreDestribution.pdf) [[Code]](https://github.com/BestiVictory/CJS-CNN)


#### 文字描述

- **Aesthetic Critiques Generation for Photos.** *Kuang-Yu Chang, Kung-Hung Lu, and Chu-Song Chen.* ICCV 2017. [[IEEE]](https://ieeexplore.ieee.org/document/8237642) [[Paper]](https://www.iis.sinica.edu.tw/~kuangyu/iccv17_aesthetic_critiques.pdf) [[Code]](https://github.com/kunghunglu/DeepPhotoCritic-ICCV17) [[Dataset]](https://github.com/ivclab/DeepPhotoCritic-ICCV17)

    在每个角度的数据集上跑了一个图像描述模型（直接用了 [NeuralTalk2](#show-and-tell)），然后用 Attention 把所有模型输出的隐状态融合起来，作为另一个新的 LSTM 的输入，新的 LSTM 的输出就是涵盖了多个角度的描述。（但从论文给的结果来看角度还是比较单一？）

    <img src="/img/in-post/2020-02-29/pccd.png" width="400px" alt="pccd" />

- **Aesthetic Attributes Assessment of Images.** *Xin Jin, et al.* ACM MM 2019. [[arxiv]](https://arxiv.org/pdf/1907.04983.pdf) [[Dataset]](https://github.com/BestiVictory/DPC-Captions)

    搞了一个比 PCCD 大得多的数据集，跑了一个浮夸的模型，输出指定角度的描述。

    ![aman](/img/in-post/2020-02-29/aman.png)


- **Neural Aesthetic Image Reviewer.** *Wenshan Wang, et al.* IET Computer Vision 2019. [[arxiv]](https://arxiv.org/pdf/1802.10240.pdf)

- **Aesthetic Image Captioning From Weakly-Labelled Photographs.** *Koustav Ghosal, Aakanksha Rana, and Aljosa Smolic.* ICCV Workshop 2019. [[Paper]](http://openaccess.thecvf.com/content_ICCVW_2019/papers/CROMOL/Ghosal_Aesthetic_Image_Captioning_From_Weakly-Labelled_Photographs_ICCVW_2019_paper.pdf) [[Code]](https://github.com/V-Sense/Aesthetic-Image-Captioning-ICCVW-2019)