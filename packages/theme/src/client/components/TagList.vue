<template>
  <span
    v-for="(item, index) in tags"
    :key="index"
    class="article-tag"
    :class="{
      active: item.name == currentTag,
      'tag-all': item.path == '/tags/'
    }"
    :style="{ backgroundColor: item.tagColor }"
    @click="router.push(item.path)"
  >
    {{ item.name }}
    <sup v-if="item.path == '/tags/'">{{ posts.length }}</sup>
    <sup v-else>{{ item.pages.length }}</sup>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useBlog, useTags, useThemeLocaleData } from "../composables";

defineProps({
  currentTag: {
    type: String,
    default: ""
  }
});

const themeLocale = useThemeLocaleData();
const router = useRouter();
const tag = useTags();
const { posts } = useBlog();

const tags = computed(() => {
  return [
    { name: themeLocale.value.showAllTagsText, path: "/tags/" },
    ...tag.tagsWithColor.value
  ];
});
</script>
