<template>
  <div>
    <PageHeader :pageInfo="$themeConfig.pageConfig.tags" />
    <Common class="tags-wrapper" :sidebar="false">
      <TagList :currentTag="currentTag" @getCurrentTag="tagClick" />
      <TagPostList :data="posts" :currentTag="currentTag" @currentTag="getCurrentTag" />
    </Common>
  </div>
</template>

<script>
import Common from '@theme/components/Common'
import TagList from '@theme/components/TagList'
import TagPostList from '@theme/components/TagPostList'
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
      tags: [],
      currentTag: '',
      allTagName: ''
    }
  },

  created () {
    this.currentTag = this.$themeLocales.tag.all
    this.allTagName = this.$themeLocales.tag.all
    if (this.$tags.list.length > 0) {
      this.currentTag = this.$route.query.tag ? this.$route.query.tag : this.currentTag
    }
  },

  computed: {
    posts () {
      let posts = getPostsByYear(this.$getAllPosts)
      return posts
    }
  },

  methods: {
    tagClick (tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    },
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.tags-wrapper
  max-width 760px
  margin 0 auto
  padding 1.6rem 2.5rem 0

@media (max-width: $MQMobile)
  .tags-wrapper
    padding 1rem 0.9rem 0
</style>