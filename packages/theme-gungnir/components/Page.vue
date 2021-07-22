<template>
  <main class="page">
    <ArticleHeader
      v-if="$page.id != 'posts'"
      v-show="$page.title"
      :article-info="$page"
      class="doc-header"
    />
    <Content class="theme-content" />
    <PageEdit />
    <PageNav
      v-if="$page.id != 'posts' && sidebarItems"
      v-bind="{ sidebarItems }"
    />
    <Pager
      v-if="$page.id == 'posts' && getPostIndex != -1"
      :data="getPostPager"
    />
    <!--
      Use prop `key` to update vssue when navigating directly from one
      <Page> to another.
      See here: https://github.com/meteorlxy/vssue/issues/87
    -->
    <Vssue
      v-if="$themeConfig.comment"
      :key="$route.path"
      class="vssue-comment-wrapper"
      :title="$page.title + ' - ' + $site.title"
    />
  </main>
</template>

<script>
import ArticleHeader from "@theme/components/ArticleHeader";
import PageNav from "@theme/components/PageNav";
import PageEdit from "@theme/components/PageEdit";
import Pager from "@theme/components/Pager";

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
    }
  },

  data() {
    return {
      isHasKey: true
    };
  },

  computed: {
    shouldShowComments() {
      const { isShowComments } = this.$frontmatter;
      const { showComment } = this.$themeConfig.valineConfig || {
        showComment: true
      };
      return (
        (showComment !== false && isShowComments !== false) ||
        (showComment === false && isShowComments === true)
      );
    },
    getPostIndex() {
      return this.$getAllPosts.findIndex(
        (item) => item.path == this.$page.path
      );
    },
    getPostPager() {
      const allPosts = this.$getAllPosts;
      const postId = this.getPostIndex;
      return {
        next:
          postId > 0
            ? {
                text: this.$themeLocales.postNext,
                subtext: allPosts[postId - 1].title,
                link: allPosts[postId - 1].path
              }
            : null,
        prev:
          postId < allPosts.length - 1
            ? {
                text: this.$themeLocales.postPrev,
                subtext: allPosts[postId + 1].title,
                link: allPosts[postId + 1].path
              }
            : null
      };
    }
  },

  watch: {
    $route() {
      this.$nextTick(() => {
        this.addCodeBtn();
      });
    }
  },

  mounted() {
    this.addCodeBtn();
  },
  methods: {
    addCodeBtn() {
      // full screen the code blocks
      const codeBlocks = document.querySelectorAll("div[class*='language-']");
      const htmlDom = document.querySelector("html");
      for (let block of codeBlocks) {
        if (this.checkBtn(block)) continue;

        let btn = document.createElement("div");
        btn.classList.add("code-button");

        // click to full screen the code block
        btn.onclick = function () {
          if (block.classList.contains("code-block-fullscreen")) {
            block.classList.remove("code-block-fullscreen");
            htmlDom.classList.remove("screen-fixed");
          } else {
            block.classList.add("code-block-fullscreen");
            htmlDom.classList.add("screen-fixed");
          }
        };

        block.appendChild(btn);
      }
    },
    checkBtn(block) {
      return Object.values(block.children).find((value) => {
        if (value.classList.contains("code-button")) return true;
        return false;
      });
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
@require '../styles/mixins.styl'

.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  display block
  overflow-x hidden
  margin-left $sidebarWidth
  .doc-header
    color var(--text-color)
    padding-top 0
    padding-bottom 0
    .title
      font-weight bold
      line-height 1.1
  .vssue-comment-wrapper
    @extend $wrapper
    padding 2rem 0
    margin-top 3rem

@media (max-width: $MQLarge)
  .page
    .vssue-comment-wrapper
      padding 2rem

@media (max-width: $MQNarrow)
  .page
    margin-left $mobileSidebarWidth

@media (max-width: $MQMobile)
  .page
    padding-top 3rem
    margin-left 0

@media (max-width: $MQMobileNarrow)
  .page
    .vssue-comment-wrapper
      padding 1rem
</style>
