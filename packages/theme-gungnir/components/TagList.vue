<template>
  <div class="tags">
    <span
      v-for="(item, index) in tags"
      :key="index"
      :class="{
        active: item.name == currentTag,
        'tag-all': item.path == '/tags/'
      }"
      :style="{ backgroundColor: item.tagColor }"
      @click="tagClick(item)"
    >
      {{ item.name }}
      <sup v-if="item.path == '/tags/'">{{ $getAllPosts.length }}</sup>
      <sup v-else>{{ item.pages.length }}</sup>
    </span>
  </div>
</template>

<script>
import { tagCloud } from "@theme/utils/tag-cloud";

export default {
  props: {
    currentTag: {
      type: String,
      default: ""
    }
  },
  computed: {
    tags() {
      var tagList = tagCloud(this.$tags.list);
      return [{ name: this.$themeLocales.tagAll, path: "/tags/" }, ...tagList];
    }
  },
  methods: {
    tagClick(tag) {
      this.$emit("getCurrentTag", tag);
    }
  }
};
</script>
