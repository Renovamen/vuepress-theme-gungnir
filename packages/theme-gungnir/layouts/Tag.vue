<template>
  <Common :sidebar="false">
    <PageHeader :page-info="getPageInfo" />
    <div class="tags-wrapper">
      <TagList
        class="tags"
        :current-tag="$currentTags.key"
        @getCurrentTag="tagClick"
      />
      <TagPostList
        :data="posts"
        class="list"
      />
    </div>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import TagPostList from '@theme/components/TagPostList'
import TagList from '@theme/components/TagList'
import PageHeader from '@theme/components/PageHeader'
import { getPostsByYear } from '@theme/utils/posts'

export default {
  components: {
    Common,
    TagPostList,
    TagList,
    PageHeader
  },

  data () {
    return {
      currentTag: '全部'
    }
  },

  computed: {
    posts() {
      let posts = getPostsByYear(this.$currentTags.pages)
      return posts
    },
    getPageInfo() {
      let info = this.$themeConfig.pages && this.$themeConfig.pages.tags
                  ? this.$themeConfig.pages.tags : {}
      info.title = this.$themeLocales.tags
      return info
    }
  },

  methods: {
    getCurrentTag(tag) {
      this.$emit('currentTag', tag)
    },
    tagClick(tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.tag-wrapper
  max-width 760px
  margin 0 auto
  padding 1.6rem 2.5rem 0

@media (max-width: $MQMobile)
  .tag-wrapper
    padding 1rem 0.9rem 0
</style>
