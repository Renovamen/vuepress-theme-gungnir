<template>
  <div class="home-blog">
    <div class="hero" :style="{ 'background-image': bgImagePath }">
      <div
        class="header-mask"
        v-if="$themeConfig.bgImage[this.bgImageID].mask"
        :style="{background: $themeConfig.bgImage[this.bgImageID].mask}"
      >
      </div>
      <div class="header-content" :style="{'opacity': headerOpacity}">
        
        <div class="hero-avatar hide-on-mobile">
          <img
            :src="$withBase($themeConfig.authorAvatar)" 
            alt="hero" />
        </div>

        <div v-if="$themeConfig.hitokoto" class="hero-bubble">
          <div class="hero-bubble__body">
            <p ref="hitokoto">正在加载一言...</p>
          </div>
          <div class="hero-bubble__tile"></div>
        </div>

        <div class="hero-info">
          <div class="hero-info__text">
            <h1>{{ $themeConfig.author || $title }}</h1>
            <p class="description">{{ $themeConfig.tagline || $description }}</p>
          </div>
        </div>

        <SNS class="hide-on-mobile" />

        <button class="img-prev hide-on-mobile" @click="switchImage(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="img-next hide-on-mobile" @click="switchImage(1)">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="arrow faa-float animated hide-on-mobile" @click="scrollToPost()"> 
          <i class="fas fa-chevron-down"></i>
        </div>

      </div>
    </div>

    <PostList class="home-blog-wrapper" :data="$pagination.pages" />
  </div>
</template>

<script>
import PostList from '@theme/components/PostList'
import SNS from '@theme/components/SNS'

export default {
  components: {
    PostList,
    SNS
  },
  data () {
    return {
      currentPage: 1,
      tags: [],
      bgImageID: 0,
      headerOpacity: 1
    }
  },
  computed: {
    bgImagePath () {
      if(this.$themeConfig.bgImage) {
        var bgPath = `url(${this.$withBase(this.$themeConfig.bgImage[this.bgImageID].path)})`
        return bgPath
      }
      else {
        const defaultImg = require('@theme/assets/default-home-bg.svg')
        return `url(${defaultImg})`
      }
    },
    heroHeight () {
      return document.querySelector('.hero').clientHeight
    }
  },
  mounted() {
    this.bgImageID = Math.floor(Math.random() * this.$themeConfig.bgImage.length)
    window.addEventListener('scroll', this.throttle(this.handleScroll, 50))

    fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = this.$refs.hitokoto
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 50))
  },

  methods: {
    // switch to the next header image
    switchImage(n) {
      let len = this.$themeConfig.bgImage.length
      this.bgImageID = (this.bgImageID + n + len) % len
    },
    scrollToPost() {
      window.scrollTo(0, this.heroHeight)
    },
    handleScroll () {
      var currentTop = window.pageYOffset
      var windowHeight = document.documentElement.clientHeight
      this.headerOpacity = 1 - currentTop * 1.2 / windowHeight
    },
    throttle (func, delay) {
      let timer = null
      let startTime = Date.now()

      return function () {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments

        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        }
        else {
          timer = setTimeout(func, remaining)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.home-blog
  padding 0
  padding-bottom 150px
  margin 0px auto
  .hero
    margin 0 auto
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    text-align center
    overflow hidden
    background-position center
    background-size cover
    .header-mask
      width 100%
      height 100%
      position absolute
      z-index 1

    .header-content
      z-index 2
      .hero-avatar
        position absolute
        top 50%
        margin-top -140px
        left 50%
        margin-left -65px
        width 120px
        height 120px
        img
          cursor auto
          padding 5px
          border-radius 100%
          max-width 100%
          transition(all ease 1s)
          box-shadow inset 0 0 10px #000
          &:hover
            transform(rotate(360deg))
        &:hover + .hero-bubble
          opacity 1
      
      .hero-bubble
        opacity 0
        position absolute
        left 50%
        margin-left 100px
        top 50%
        margin-top -200px
        // float up and down
        animation bubbleFloat 2s infinite
        -webkit-animation bubbleFloat 2s infinite
        animation-timing-function ease-in-out
        -webkit-animation-timing-function ease-in-out
        -webkit-animation-direction alternate
        animation-direction alternate
        transition(opacity .4s)
        &__body
          min-width 150px
          max-width 250px
          min-height 80px
          background rgba(0, 0, 0, .5)
          border-radius 10px
          p
            font-size 15px
            padding 10px 20px
            color #fff
            text-align left
            line-height 1.7
        &__tile
          position absolute
          content ''
          margin-left -23px
          top 0
          margin-top 60px
          width 23px
          height 44px
          border-width 0
          border-style solid
          border-top-width 20px
          border-radius 56px 0 0 0
          color rgba(0, 0, 0, .5)
      @keyframes bubbleFloat
        0%
          transform(translateY(0))
        100%
          transform(translateY(10px))
      @-webkit-keyframes bubbleFloat
        0%
          transform(translateY(0))
        100%
          transform(translateY(10px))

      .hero-info
        background rgba(0, 0, 0, .5)
        padding 17px
        letter-spacing 0
        border-radius 10px
        box-sizing initial
        white-space nowrap
        width 36%
        max-width 500px
        position absolute
        left 0
        right 0
        margin auto
        top 50%
        margin-top 15px
        &__text
          padding-top 0
          padding-bottom 0
          color white
          h1
            display block
            font-size 25px
            font-weight 700
            line-height 20px
            margin-top 0
          p
            font-size 18px
            font-weight 300
            line-height 15px
            margin-bottom 0

      .img-prev, .img-next
        cursor pointer
        position absolute
        top 50%
        margin-top -30px
        width auto
        padding 17px 12px
        color rgba(255, 255, 255, 0.6)
        background-color rgba(0, 0, 0, .3)
        border none
        outline none
        transition(.6s ease)
        i
          font-size 16px
        &:hover
          color #fff
          background-color rgba(0, 0, 0, .6)
      .img-prev
        left 0
        border-radius 0 3px 3px 0
      .img-next
        right 0
        border-radius 3px 0 0 3px

      .arrow
        position absolute
        bottom 50px
        left 50%
        margin-left -14px
        cursor pointer
        i
          font-size 28px
          color #ffffff
          transition(.4s ease)
          &:active,
          &:hover
            color #a7a7a7

  .home-blog-wrapper
    margin 20px auto 0
    max-width $homePageWidth

@media (min-width: $MQIpad)
  .home-blog .hero
    background-attachment fixed
    .hero-info__text
      gungnir-font()

@media (max-width: $MQIpad)
  .home-blog
    .hide-on-mobile
      display none
    .hero
      height auto !important
      padding 150px 0
      .hero-info
        background transparent !important
        width auto !important
        position relative !important
        &__text h1
          font-size 80px !important
    .home-blog-wrapper
      padding 0 13px 0 14px

@media (max-width: $MQMobile)
  .home-blog
    .hero
      padding 80px 0 60px
      .header-mask
        margin-top -1.2rem
      .hero-info__text h1
        font-size 50px !important
</style>