<template>
  <Common :sidebar="false">
    <PageHeader :page-info="getPageInfo" />
    <div class="tags-wrapper">
      <TagList :current-tag="$currentTags.key" @getCurrentTag="tagClick" />
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
      currentTag: "全部"
    };
  },

  computed: {
    posts() {
      let posts = getPostsByYear(this.$currentTags.pages);
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

  methods: {
    getCurrentTag(tag) {
      this.$emit("currentTag", tag);
    },
    tagClick(tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path });
      }
    }
  }
};
</script>

<style src="@theme/styles/theme.styl" lang="stylus"></style>
