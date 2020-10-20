<template>
  <!-- 公共布局 -->
  <Common class="tag-wrapper" :sidebar="false">
    <!-- 标签集合 -->
    <TagList class="tags" :currentTag="$currentTags.key" @getCurrentTag="tagClick" />
    <!-- 博客列表 -->
    <TagPostList :data="posts" class="list" @currentTag="$currentTags.key" />
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import TagPostList from '@theme/components/TagPostList'
import TagList from '@theme/components/TagList'
import { getPostsByYear } from '@theme/utils/posts'

export default {
  components: {
    Common,
    TagPostList,
    TagList
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
    // 获取当前tag
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
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 4.6rem 1rem 0;
</style>
