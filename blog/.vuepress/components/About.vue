<template>
    <Common class="about-wrapper">
      <div class="header">
        <div class="header__content">
          <div class="header__basic col-md-4">
            <div class="avatar">
              <img :src="$page.frontmatter.avatar">
            </div>
            <h3 class="title">{{ $page.frontmatter.name }}</h3>
            <p class="subname">{{ $page.frontmatter.subname }}</p>
            <div class="sns">
              <div
                v-for="(user, platform) in $themeConfig.SNS"
                class="sns__item">
                <a
                  v-html="snsIcon(platform)"
                  target="_blank"
                  :href="snsLink(user, platform)">
                  {{ snsIcon(platform) }}
                </a>
              </div>
            </div>
          </div>
          <div class="header__info col-md-8">
            <h3 class="title">Biography</h3>
            <div class="bio-info">
              Xiaohan is <del>a dragon lost in human world</del> now a research assistant
              supervised by <a href="http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm" target="_blank">Prof. Tong Lin</a>.
              Before that, she got her bachelor's degree in <a href="http://sse.tongji.edu.cn" target="_blank">Software Engineering</a>
              at <a href="https://www.tongji.edu.cn" target="_blank">Tongji University</a>.
              Her main research interests include Continual Learning and Meta Learning with deep architectures.
              Besides, she is also interested in Natural Language Processing.
            </div>
            <div class="personal-info">
              <div class="col-md-5 interests">
                <p class="subtitle">Interests</p>
                <ul>
                  <li
                    v-for="(item, index) in $page.frontmatter.interests" 
                    :key="`interests-${index}`">
                    <p v-html="item" class="item">{{ item }}</p>
                  </li>
                </ul>
              </div>
              <div class="col-md-7 education">
                <p class="subtitle">Education</p>
                <ul>
                  <li
                    v-for="(item, index) in $page.frontmatter.education"
                    :key="`education-${index}`">
                    <p class="degree">{{ item.degree }}, {{ item.year }}</p>
                    <p class="school">{{ item.school }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Content class="theme-content" />
    </Common>
</template>

<script>
import Common from '@theme/components/Common.vue'

const platform_links = {
  "github": "https://github.com/",
  "linkedin": "https://www.linkedin.com/in/",
  "facebook": "https://www.facebook.com/",
  "twitter": "https://www.twitter.com/",
  "zhihu": "https://www.zhihu.com/people/",
  "weibo": "http://weibo.com/",
  "email": "mailto:"
}

const platform_icons = {
  "github": "<i class='fab fa-github' />",
  "linkedin": "<i class='fab fa-linkedin' />",
  "facebook": "<i class='fab fa-facebook-square' />",
  "twitter": "<i class='fab fa-twitter' />",
  "zhihu": "<i class='fas icon-zhihu'>知</i>",
  "weibo": "<i class='fab fa-weibo' />",
  "email": "<i class='fas fa-envelope' />"
}

export default {
  components: { Common },
  methods: {
    snsLink(user, platform) {
      return platform_links[platform] + user
    },
    snsIcon(platform) {
      return platform_icons[platform]
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.about-wrapper
  .col-md-4
    width 35%
    float left
  .col-md-8
    width: 63%
    float right
  .col-md-5
    width 36%
    float left
  .col-md-7
    width 62%
    float right

  .header
    height 100vh
    position relative
    gungnir-font()
    .title
      font-weight 600
      font-size 2em
      line-height 1.4em
      margin-bottom 30px
      text-align center
    &__content
      position absolute
      width 98.5%
      margin-top -250px
      top 50%
    &__basic
      position absolute
      top 50%
      margin-top -190px
      padding-left 1.5rem
      .avatar
        width 140px
        height 140px
        margin 0 auto
        border-radius 100%
        img
          cursor auto
          padding 5px
          border-radius 100%
          max-width 100%
          transition(transform 1s)
          box-shadow inset 0 0 10px rgba(179, 179, 179, 0.6)
          &:hover
            transform(rotate(360deg))
      .title
        margin-top 65px
      .subname
        font-weight 700
        color var(--text-color-sub)
        text-align center
        margin-top -30px
      .sns
        text-align center
        margin 55px 0
        &__item
          width 11%
          display inline-block
          > a
            text-decoration none
            color var(--accent-color)
            i
              font-size 33px
              transition(transform .1s)
            .icon-zhihu
              font-style normal
              font-weight bold
            &:hover i
              transform(scale(1.3))

    &__info
      .title
        max-width 720px
      .bio-info
        max-width 720px
        font-size 19px
        text-align left
        margin 20px 10px 75px
        font-weight 400
      .personal-info
        margin -50px 15px auto
        width 100%
        .subtitle
          margin 15px 0 -10px 0
          font-weight bold
          font-size 20px
          letter-spacing 1.14px
        ul
          padding-left 15px
        .interests li
          margin-bottom -17px
          .item
            font-size 16px
        .education
          .degree
            font-size 18px
            line-height 30px
          .school
            font-size 15px
            line-height 24px
            margin-top -15px
            color var(--text-color-sub)
  
  .theme-content
    min-height 80vh
    gungnir-font()
    h2, h3, h4, h5, h6
      font-weight 700
      text-align center
    p
      font-size 18px !important
      line-height 28px !important
    a.header-anchor
      display none

  @media (max-width: $MQIpad)
    .header
      height auto
      min-height 670px
      padding 0 1rem
      .col-md-4, .col-md-8, .col-md-5, .col-md-7
        width 100%
        position relative
      &__content
        margin-top 350px
        position relative
      &__basic
        padding-left 0
      &__info
        .title, .bio-info
          max-width 100%
    .theme-content
      min-height auto
      padding-top 300px !important
      padding-bottom 100px !important
  
  @media (max-width: $MQMobileNarrow)
    .header
      padding 0 .8rem
      .sns__item
        min-width 13%
      .bio-info
        font-size 18px
      .education
        margin-top 20px
    .theme-content
      padding-top 550px !important
      padding-bottom 50px !important
      
</style>

<style src="@theme/styles/theme.styl" lang="stylus"></style>