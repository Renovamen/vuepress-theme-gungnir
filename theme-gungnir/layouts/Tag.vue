<template>
  <Common class="tag-wrapper" :sidebar="false">
    <TagList class="tags" :currentTag="$currentTags.key" @getCurrentTag="tagClick" />
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
    padding: 5rem 0.9rem 0;
</style>
