<template>
  <div
    class="page-header"
    :style="headerImage"
    :class="{ 'style-img': pageInfo.bgImage }"
  >
    <div
      v-if="pageInfo.bgImage && pageInfo.bgImage.mask"
      class="header-mask"
      :style="{ background: pageInfo.bgImage.mask }"
    />
    <h1 class="title">
      {{ pageInfo.title || $page.frontmatter.title }}
    </h1>
    <h3 v-if="pageInfo.subtitle" class="subtitle">
      {{ pageInfo.subtitle }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    pageInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    headerImage() {
      return this.pageInfo.bgImage
        ? {
            backgroundImage: `url(${this.$withBase(
              this.pageInfo.bgImage.path
            )})`
          }
        : {};
    }
  }
};
</script>

<style lang="stylus" scoped>
.page-header
  position relative
  padding 55px 0 0
  .title, .subtitle
    position relative
    text-align center
    z-index 2
    color var(--text-color)
  .title
    font-size 50px
    font-weight bold
    margin-bottom 0
  .subtitle
    font-weight 300
    font-size 18px
  &.style-img
    background-repeat no-repeat
    background-position center
    background-size cover
    position relative
    padding 55px 0
    &::after
      content ""
      width 100%
      height 100%
      top 0
      left 0
      position absolute
      background var(--image-mask-color)
    .header-mask
      width 100%
      height 100%
      position absolute
      margin-top -55px
      z-index 1
    .title, .subtitle
      color #fff
    .title
      font-size 80px
      margin-bottom -15px
      margin-top 0
    .subtitle
      margin-bottom 0

@media (max-width: $MQMobile)
  .page-header
    &.style-img
      padding-left 15px
      padding-right 15px
      .header-mask
        margin-left -15px
      .title
        font-size 50px
</style>
