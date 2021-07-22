<template>
  <Common class="post-container">
    <ArticleHeader
      v-show="$page.title"
      class="post-header"
      :article-info="$page"
      :class="{ 'style-img': $page.frontmatter.header_style == 'image' }"
      :style="pageHeaderStyle"
    >
      <div
        v-if="
          $page.frontmatter.header_style == 'image' &&
          $page.frontmatter.header_mask
        "
        class="header-mask"
        :style="{ background: $page.frontmatter.header_mask }"
      />
    </ArticleHeader>
    <Page />
    <Catalog
      :class="{ fixed: isFixed }"
      :style="{ top: `${catalogTop}px !important` }"
    />
  </Common>
</template>

<script>
import ArticleHeader from "@theme/components/ArticleHeader";
import Common from "@theme/components/Common.vue";
import Catalog from "@theme/components/Catalog";
import Page from "@theme/components/Page.vue";
import { throttle } from "@theme/utils/time";

const catalogTopAbsolute = 40;
const catalogTopFixed = 80;

export default {
  name: "Post",

  components: {
    ArticleHeader,
    Common,
    Catalog,
    Page
  },

  data() {
    return {
      isFixed: false,
      catalogTop: 0,
      headerHeight: 0,
      screenWidth: 0
    };
  },

  computed: {
    pageHeaderStyle() {
      var style = {};
      if (
        this.$page.frontmatter.header_style == "image" &&
        this.$page.frontmatter.header_img
      )
        style = {
          backgroundImage: `url(${this.$withBase(
            this.$page.frontmatter.header_img,
            this.$themeConfig
          )})`
        };
      if (!this.$showCatalog) style.paddingRight = "0";
      return style;
    }
  },

  watch: {
    $route() {
      this.$nextTick(() => {
        this.initCatalog();
      });
    }
  },

  mounted() {
    this.initCatalog();

    const that = this;
    window.onresize = () => {
      return (() => {
        that.headerHeight = document.querySelector(".post-header").offsetHeight;
        that.screenWidth = document.body.clientWidth;
        that.initCatalog();
        that.handleScroll();
      })();
    };
    window.addEventListener("scroll", throttle(this.handleScroll, 50));
  },

  beforeDestroy() {
    window.removeEventListener("scroll", throttle(this.handleScroll, 50));
  },

  methods: {
    initCatalog() {
      this.headerHeight = document.querySelector(".post-header").offsetHeight;
      this.screenWidth = document.body.clientWidth;
      if (this.screenWidth <= 719) this.catalogTop = -15;
      // $MQMobile
      else this.catalogTop = this.headerHeight + catalogTopAbsolute;
    },
    handleScroll() {
      const currentTop = window.pageYOffset;
      if (
        currentTop >
        this.headerHeight + catalogTopAbsolute - catalogTopFixed
      ) {
        this.isFixed = true;
        this.catalogTop = catalogTopFixed;
      } else {
        this.isFixed = false;
        this.catalogTop = this.headerHeight + catalogTopAbsolute;
      }
      // $MQMobile
      if (this.screenWidth <= 719) this.catalogTop = -15;
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/wrapper.styl'

.post-container
  .post-header
    max-width 100%
    position relative
    padding-top 6rem
    background-repeat no-repeat
    background-position center
    background-size cover
    .header-content
      z-index 2
      position relative
      .title, .subtitle, .tags, .icons
        padding 0 2.5rem
      .title
        font-size 50px
        font-weight bold
      .subtitle
        margin-top -10px
        font-weight 400
        font-size 30px
    &.style-img
      padding-top 7.5rem
      padding-bottom 9rem
      .title, .subtitle, .tag, .icon
        color #fff
        border-color #fff
    .header-mask
      width 100%
      height 100%
      position absolute
      margin-top -7.5rem
      z-index 1

  .page
    max-width $contentWidth
    margin 0 auto !important
    padding-bottom 5rem
    padding-top 1rem
    h1
      font-size 50px
    h2, h3, h4, h5, h6
      font-weight bold
    h2
      font-size 30px
    h3
      font-size 24px
    h4
      font-size 21px
    h5
      font-size 19px
      color var(--text-color-sub)
    h6
      font-size 16px
      color var(--text-color-sub)
    a.header-anchor
      opacity 1
    .pager
      padding 0rem 2.5rem
      margin-top 30px
      a
        text-align center
        width 45%
        padding 10px 5px
    .vssue-comment-wrapper
      @extend $wrapper
      margin-top 10rem
      margin-bottom -3rem

  .catalog
    position absolute
    right 1rem
    height 100%
    overflow-y scroll
    &.fixed
      position fixed
      height auto
      bottom 10rem
    &::-webkit-scrollbar
      width 0
      height 0

@media (max-width: $MQLarge)
  .post-container
    .page
      padding-right $catalogWidth
      max-width 100%
    .post-header .header-content
      max-width 100%
      .title, .subtitle, .tags, .icons
        padding 0

@media (max-width: $MQMobile)
  .post-container
    .post-header
      padding-top 4rem
      padding-bottom 0
      .header-content
        .title
          font-size 30px
        .subtitle
          font-size 16px
          margin-top -5px
      &.style-img
        padding-top 3rem
        padding-bottom 4rem
      .header-mask
        margin-top -3.1rem
    .page
      padding-right 0
      h1
        font-size 30px
      h2
        font-size 25px
      h3
        font-size 22px
      h4
        font-size 21px
      h5
        font-size 19px
      h6
        font-size 16px
      .pager
        padding 0 2rem
      .vssue-comment-wrapper
        padding 1rem
        margin-top 13rem
        margin-bottom -5rem
    .catalog
      transition(transform .5s)
      transform(translateX(calc(100% + 2rem)))
      position fixed
      right -2px
      padding-top 2rem
      height 100%
      background-color var(--bg-color)
      z-index 5
      &.open
        transform(translateX(0))
        box-shadow var(--box-shadow)
      &.fixed
        height 100%
      li
        border-left none
        &.active
          border-left 2px solid var(--accent-color)

@media (max-width: $MQMobileNarrow)
  .post-container
    .page .pager
      padding 0 1rem
</style>

<style src="../styles/theme.styl" lang="stylus"></style>
