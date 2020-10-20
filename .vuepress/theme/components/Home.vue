<template>
  <div class="home-blog">
    <div class="hero" :style="{ 'background-image': bgImagePath }">
      <div class="header-mask" v-if="$themeConfig.bgImage[this.bgImageID].mask" :style="{background: $withBase($themeConfig.bgImage[this.bgImageID].mask)}"></div>
      <div class="header-content" :style="{'opacity': headerOpacity}">
        
        <div class="hero-avatar">
          <img :src="$withBase($themeConfig.authorAvatar)" alt="hero" />
        </div>

        <div class="hero-info">
          <div class="hero-info__text">
            <h1>{{ $themeConfig.author || $title }}</h1>
            <p class="description">{{ $themeConfig.tagline || $description }}</p>
          </div>
        </div>

        <SNS />

        <button class="img-prev" @click="switchImage(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="img-next" @click="switchImage(1)">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="arrow faa-float animated" @click="scrollToPost()"> 
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
      headerOpacity: 1,
    }
  },
  computed: {
    bgImagePath () {
      if(this.$themeConfig.bgImage) {
        var bgPath = "url(" + this.$withBase(this.$themeConfig.bgImage[this.bgImageID].path) + ")"
        return bgPath
      }
      else {
        return 'url(/img/home-bg/default.svg)'
      }
    },
    heroHeight () {
      return document.querySelector('.hero').clientHeight
    }
  },
  mounted() {
    this.bgImageID = Math.floor(Math.random() * this.$themeConfig.bgImage.length)
    window.addEventListener('scroll', this.throttle(this.handleScroll, 50))
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
    },
  }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.home-blog {
  padding: 0;
  padding-bottom: 150px;
  margin: 0px auto;
  .hero { 
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    .header-mask {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
    .header-content {
      z-index: 2;
      
      .hero-avatar {
        position: absolute;
        top: 50%;
        margin-top: -140px;
        left: 50%;
        margin-left: -65px;
        width: 120px;
        height: 120px;

        img {
          cursor: auto;
          padding: 5px;
          border-radius: 100%;
          max-width: 100%;
          transition(all ease 1s);
          box-shadow: inset 0 0 10px #000;
          &:hover {
            transform(rotate(360deg));
          }
        }
      }
      
      .hero-info {
        background: rgba(0, 0, 0, .5);
        padding: 17px;
        letter-spacing: 0;
        border-radius: 10px;
        box-sizing: initial;
        white-space: nowrap;
        width: 36%;
        max-width: 500px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 50%;
        margin-top: 15px;
        &__text {
          padding-top: 0;
          padding-bottom: 0;
          color: white;
          gungnir-font();
          h1 {
            display: block;
            font-size: 25px;
            font-weight: 700;
            line-height: 20px;
            margin-top: 0;
          }
          p {
            font-size: 18px;
            font-weight: 300;
            line-height: 15px;
            margin-bottom: 0;
          }
        }
      }

      .img-prev, 
      .img-next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        margin-top: -30px;
        width: auto;
        padding: 17px 12px;
        color: rgba(255, 255, 255, 0.6);
        background-color: rgba(0, 0, 0, .3);
        border: none;
        outline: none;
        transition(.6s ease);
        i {
          font-size: 16px;
        }
        &:hover {
          color: #fff;
          background-color: rgba(0, 0, 0, .6);
        }
      }
      .img-prev {
        left: 0;
        border-radius: 0 3px 3px 0;
      }
      .img-next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }

      .arrow {
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -14px;
        cursor: pointer;
        i {
          font-size: 28px;
          color: #ffffff;
          transition(.4s ease);
          &:active,
          &:hover {
            color: #a7a7a7;
          }
        }
      }
      @media (max-width: $MQIpad) {
        display: none
      }
    }
  }
  .home-blog-wrapper {
    margin 20px auto 0
    max-width $homePageWidth
  }
}

@media (max-width: $MQIpad) {
  .home-blog-wrapper {
    padding: 0 14px 0 15px;
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 450px
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
