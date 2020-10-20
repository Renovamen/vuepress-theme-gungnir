<template>
  <main class="page" :style="pageStyle">
    <div v-show="$page.title" class="page-title">
      <h1 class="title">{{$page.title}}</h1>
      <h3 v-if="$page.frontmatter.subtitle" class="subtitle">{{$page.frontmatter.subtitle}}</h3>
      <PageInfo :pageInfo="$page"></PageInfo>
    </div>

    <Content class="theme-content" />
    <PageEdit />
    <PageNav v-if="sidebarItems" v-bind="{ sidebarItems }" />
  </main>
</template>

<script>
import PageInfo from '@theme/components/PageInfo'
import PageNav from '@theme/components/PageNav'
import PageEdit from '@theme/components/PageEdit'

export default {
  components: {
    PageInfo,
    PageNav,
    PageEdit
  },

  props: {
    sidebarItems: {
      type: Array,
      default: () => []
    },
    pageStyle: {
      type: Object,
      default() {
        return {
          paddingRight: '0'
        }
      }
    }
  },

  data () {
    return {
      isHasKey: true
    }
  },

  computed: {
    shouldShowComments () {
      const { isShowComments } = this.$frontmatter
      const { showComment } = this.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    },
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  padding-right 14rem
  display block
  .page-title
    max-width: $contentWidth;
    margin: 0 auto;
    padding: 0rem 2.5rem;
    color var(--text-color)
    .title
      font-weight: bold
      line-height: 1.1
    .subtitle
      margin-top: -10px;
      font-weight: 400;
      font-size: 30px;
  .comments-wrapper
    @extend $wrapper

@media (max-width: $MQMobile)
  .page
    padding-right: 0;
    .page-title
      padding: 0 1rem;
</style>