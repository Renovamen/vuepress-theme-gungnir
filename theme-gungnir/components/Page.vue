<template>
  <main class="page" :style="pageStyle">
    <ArticleHeader
      v-if="$page.id != 'posts'"
      v-show="$page.title"
      :articleInfo="$page"
      class="article-header" />
    <Content class="theme-content" />
    <PageEdit />
    <PageNav
      v-if="($page.id != 'posts') & sidebarItems"
      v-bind="{ sidebarItems }" />
    <Pager
      v-if="getPostIndex != -1"
      :data="getPostPager" />
    <Vssue
      v-if="$themeConfig.comment"
      :title="$page.title + ' - ' + $site.title"
      class="vssue-comment-wrapper" />
  </main>
</template>

<script>
import ArticleHeader from '@theme/components/ArticleHeader'
import PageNav from '@theme/components/PageNav'
import PageEdit from '@theme/components/PageEdit'
import Pager from '@theme/components/Pager'

export default {
  components: {
    ArticleHeader,
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

  mounted() {
    // full screen the code blocks
    const codeBlocks = document.querySelectorAll("div[class*='language-']")
    const htmlDom = document.querySelector('html')
    for (let block of codeBlocks) {
      let btn = document.createElement('div')
      btn.classList.add('code-button')
      // click to full screen the code block
      btn.onclick = function() {
        if (block.classList.contains('code-block-fullscreen')) {
          block.classList.remove('code-block-fullscreen')
          htmlDom.classList.remove('screen-fixed')
        }
        else {
          block.classList.add('code-block-fullscreen')
          htmlDom.classList.add('screen-fixed')
        }
      }
      block.appendChild(btn)
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
@require '../styles/mixins.styl'

.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  padding-right $catalogWidth
  display block
  .article-header
    max-width $contentWidth
    margin 0 auto
    padding 0rem 2.5rem
    color var(--text-color)
    .title
      font-weight bold
      line-height 1.1
  .pager
    padding 0rem 2.5rem
    margin-top 30px
    a
      text-align center
      width 45%
      padding 10px 5px
  .vssue-comment-wrapper
    @extend $wrapper
    padding 2rem 0
    margin-top 3rem
    @media (max-width: $MQLarge)
      padding 2rem
    @media (max-width: $MQMobileNarrow)
      padding 1rem


@media (max-width: $MQMobile)
  .page
    padding-right 0
    padding-top 3rem
    .article-header, .pager
      padding 0 1rem
</style>