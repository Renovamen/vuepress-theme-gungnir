---
layout: post
title: "NLP 不入门直接放弃"
subtitle: "How to give up NLP"
author: "Renovamen"
date: 2018-02-17
header_img: /img/in-post/2018-02-17/header.jpg
catalog: true
tags:
  - NLP
---

来源：[Melanie Tosik（Twitter:@meltomene）列出的 NLP 学习资源清单](https://towardsdatascience.com/how-to-get-started-in-nlp-6a62aa4eaeff)

<!-- more -->

## Online courses

- [Dan Jurafsky & Chris Manning: Natural Language Processing](https://www.youtube.com/playlist?list=PL8FFE3F391203C98C)

- [Stanford CS224d: Deep Learning for Natural Language Processing](http://cs224d.stanford.edu/syllabus.html) [更高级的机器学习算法、深度学习和 NLP 的神经网络架构]

- [Coursera: Introduction to Natural Language Processing](https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR) [密西根大学的 NLP 课程]

## Libraries and open source

- **spaCy** ([website](https://spacy.io), [blog](https://explosion.ai/blog/))	[Python；新兴的开放源码库并自带[炫酷的用法示例](https://spacy.io/usage/spacy-101)、API 文档和[演示应用程序](https://spacy.io/docs/usage/showcase)]

- **Natural Language Toolkit (NLTK)** ([website](http://www.nltk.org/), [book](http://www.nltk.org/book/))	[Python；NLP 实用编程介绍，主要用于教学目的]

- **Stanford CoreNLP** ([website](https://stanfordnlp.github.io/CoreNLP/))	[由 Java 开发的高质量的自然语言分析工具包]

- **AllenNLP** ([website](https://allennlp.org/))	[Python；基于 PyTorch 的 NLP 研究库]

- **fastText** ([website](https://fasttext.cc/))	[C++；高效的文本分类（text classification）和表示学习（representation learning）工具]

## Active blogs

- [language processing blog](https://nlpers.blogspot.com/natural)	（Hal Daumé III）

- [Language Log](http://languagelog.ldc.upenn.edu/nll/)	（Mark Liberman）

- [Google Research blog](https://research.googleblog.com/)

- [Explosion AI blog](https://explosion.ai/blog/)

- [Hugging Face](https://medium.com/huggingface)

- [Sebastian Ruder’s blog](http://ruder.io/#open)

## Books

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/)	（Jurafsky and Martin）[经典的 NLP 教科书，涵盖了所有 NLP 的基础知识，第 3 版即将出版]

- [Foundations of Statistical Natural Language Processing](https://nlp.stanford.edu/fsnlp/)	（Manning and Schütze）[更高级的统计 NLP 方法]

- [Introduction to Information Retrieval](https://nlp.stanford.edu/IR-book/)	（Manning, Raghavan and Schütze）[关于排名/搜索的优秀参考书]

- [Neural Network Methods in Natural Language Processing](https://www.morganclaypool.com/doi/abs/10.2200/S00762ED1V01Y201703HLT037)	（Goldberg）[深入介绍 NLP 的 NN 方法，和相对应的入门书籍]

- [Linguistic Fundamentals for Natural Language Processing](http://www.morganclaypool.com/doi/abs/10.2200/S00493ED1V01Y201303HLT020)	（Bender）[更成功的 NLP 的词法和句法]

- [Deep Learning](http://www.deeplearningbook.org/)	（Goodfellow, Courville and Bengio）[很好的深度学习介绍]

## Miscellaneous

- [How to build a word2vec model in TensorFlow](https://www.tensorflow.org/versions/master/tutorials/word2vec/index.html)	[学习指南]

- [Deep Learning for NLP resources](https://github.com/andrewt3000/dl4nlp)	[按主题分类的关于深度学习的顶尖资源的概述]

- [Last Words: Computational Linguistics and Deep Learning — A look at the importance of Natural Language Processing.](http://mitp.nautil.us/article/170/last-words-computational-linguistics-and-deep-learning)	（Manning）[文章]

- [Natural Language Understanding with Distributed Representation](https://github.com/nyu-dl/NLP_DL_Lecture_Note/blob/master/lecture_note.pdf)	（Cho）[关于 NLU 的 ML / NN 方法的独立讲义]

- [Bayesian Inference with Tears](http://www.isi.edu/natural-language/people/bayes-with-tears.pdf)	（Knight）[教程工作簿]

- [Association for Computational Linguistics](http://aclanthology.info/) （ACL）[期刊选集]

- [Quora: How do I learn Natural Language Processing?](https://www.quora.com/How-do-I-learn-Natural-Language-Processing)

- [Natural Language Understanding and Computational Semantics](https://docs.google.com/document/d/1mkB6KA7KuzNeoc9jW3mfOthv_6Uberxs8l2H7BmJdzg/edit)	（Bowman）[开源的课程大纲和完整幻灯片]

- [fast.ai](http://www.fast.ai/)	[“Making neural nets uncool again”]

## DIY projects and data sets

Nicolas Iderhoff 已经创建了一份[公开、详尽的 NLP 数据集的列表](https://github.com/niderhoff/nlp-datasets)。除了这些，这里还有一些推荐的项目：

- Implement a [part-of-speech (POS) tagger (词性标注)](https://en.wikipedia.org/wiki/Part-of-speech_tagging) based on a [hidden Markov model (HMM) (隐马尔可夫模型)](https://en.wikipedia.org/wiki/Hidden_Markov_model)

- Implement the [CYK algorithm](https://en.wikipedia.org/wiki/CYK_algorithm) for parsing [context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar)

- Implement [semantic similarity (语义相似度)](https://en.wikipedia.org/wiki/Semantic_similarity) between two given words in a collection of text, e.g. [pointwise mutual information (PMI) (点互信息)](https://en.wikipedia.org/wiki/Pointwise_mutual_information)

- Implement a [Naive Bayes classifier (朴素贝叶斯分类器)](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) to [filter spam](https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering)

- Implement a [spell checker](https://en.wikipedia.org/wiki/Spell_checker) based on [edit distances](https://en.wikipedia.org/wiki/Edit_distance) between words

- Implement a [Markov chain (马尔科夫链)](https://en.wikipedia.org/wiki/Markov_chain) text generator

- Implement a [topic model](https://en.wikipedia.org/wiki/Topic_model) using [latent Dirichlet allocation (LDA)](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)

- Use [word2vec](https://code.google.com/archive/p/word2vec/) to generate word embeddings from a large text corpus, e.g. [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Database_download)

- Use [k-means](https://en.wikipedia.org/wiki/K-means_clustering) to cluster [tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) vectors of text, e.g. news articles

- Implement a [named-entity recognizer (NER) (命名实体识别)](https://en.wikipedia.org/wiki/Named-entity_recognition) (also called a name tagger), e.g. following the [CoNLL-2003 shared task](https://www.clips.uantwerpen.be/conll2003/ner/)

## NLP on social media

- Twitter: [#nlproc](https://twitter.com/hashtag/nlproc), [list of NLPers](https://twitter.com/hashtag/nlproc) (by Jason Baldrige)

- Reddit: [/r/LanguageTechnology](https://www.reddit.com/r/LanguageTechnology)

- Medium: [NLP](https://medium.com/tag/nlp)