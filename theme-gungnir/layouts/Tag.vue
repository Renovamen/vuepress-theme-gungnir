<template>
  <div>
    <PageHeader :pageInfo="$themeConfig.pageConfig.tags" />
    <Common class="tag-wrapper" :sidebar="false">
      <TagList class="tags" :currentTag="$currentTags.key" @getCurrentTag="tagClick" />
      <TagPostList :data="posts" class="list" @currentTag="$currentTags.key" />
    </Common>
  </div>
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
    posts () {
      let posts = getPostsByYear(this.$currentTags.pages)
      return posts
    }
  },

  methods: {
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    tagClick (tagInfo) {
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
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 1.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 1rem 0.9rem 0;
</style>