<template>
  <main class="page" :style="pageStyle">
    <PageHeader v-show="$page.title" :pageInfo="$page" class="page-title" />
    <Content class="theme-content" />
    <PageEdit />
    <PageNav v-if="sidebarItems" v-bind="{ sidebarItems }" />
    <Pager v-if="getPostIndex != -1" :data="getPostPager" />
  </main>
</template>

<script>
import PageHeader from '@theme/components/PageHeader'
import PageNav from '@theme/components/PageNav'
import PageEdit from '@theme/components/PageEdit'
import Pager from '@theme/components/Pager'

export default {
  components: {
    PageHeader,
    PageNav,
    PageEdit,
    Pager
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
    getPostIndex () {
      return this.$getAllPosts.findIndex(item => item.path == this.$page.path)
    },
    getPostPager () {
      const allPosts = this.$getAllPosts
      const postId = this.getPostIndex
      return {
        next: postId > 0 ? {
          text: 'Previous',
          subtext: allPosts[postId - 1].title,
          link: allPosts[postId - 1].path
        } : null,
        prev: postId < (allPosts.length - 1) ? {
          text: 'Previous',
          subtext: allPosts[postId + 1].title,
          link: allPosts[postId + 1].path
        } : null
      }
    }
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
    max-width $contentWidth
    margin 0 auto
    padding 0rem 2.5rem
    color var(--text-color)
    .title
      font-weight bold
      line-height 1.1
    .subtitle
      margin-top -10px
      font-weight 400
      font-size 30px
  .pager
    padding 0rem 2.5rem
    margin-top 30px
    a
      text-align center
      width 45%
      padding 10px 5px
  .comments-wrapper
    @extend $wrapper

@media (max-width: $MQMobile)
  .page
    padding-right 0
    padding-top 3rem
    .page-title, .pager
      padding 0 1rem
</style>