<template>
  <Common :sidebar="false">
    <PageHeader :page-info="getPageInfo" />
    <div class="tags-wrapper">
      <TagList :current-tag="currentTag" @getCurrentTag="tagClick" />
      <TagPostList :data="posts" />
    </div>
  </Common>
</template>

<script>
import Common from "@theme/components/Common";
import TagList from "@theme/components/TagList";
import TagPostList from "@theme/components/TagPostList";
import PageHeader from "@theme/components/PageHeader";
import { getPostsByYear } from "@theme/utils/posts";

export default {
  components: {
    Common,
    TagPostList,
    TagList,
    PageHeader
  },
  data() {
    return {
      tags: [],
      currentTag: "",
      allTagName: ""
    };
  },

  computed: {
    posts() {
      let posts = getPostsByYear(this.$getAllPosts);
      return posts;
    },
    getPageInfo() {
      let info =
        this.$themeConfig.pages && this.$themeConfig.pages.tags
          ? this.$themeConfig.pages.tags
          : {};
      info.title = this.$themeLocales.tags;
      return info;
    }
  },

  created() {
    this.currentTag = this.$themeLocales.tagAll;
    this.allTagName = this.$themeLocales.tagAll;
    if (this.$tags.list.length > 0) {
      this.currentTag = this.$route.query.tag
        ? this.$route.query.tag
        : this.currentTag;
    }
  },

  methods: {
    tagClick(tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path });
      }
    },
    getCurrentTag(tag) {
      this.$emit("currentTag", tag);
    }
  }
};
</script>

<style lang="stylus">
.tags-wrapper
  max-width 760px
  margin 0 auto
  padding 1.6rem 2.5rem 0

@media (max-width: $MQMobile)
  .tags-wrapper
    padding 1rem 0.9rem 0
</style>

<style src="@theme/styles/theme.styl" lang="stylus"></style>
