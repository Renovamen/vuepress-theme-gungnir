<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <div class="tags-wrapper">
        <TagList :current-tag="currentTag" />
        <TagPostList :data="filteredPosts" />
      </div>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import TagList from "@theme/TagList.vue";
import TagPostList from "@theme/TagPostList.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { GungnirThemePageOptions } from "../../shared";
import { useBlog, useTags, useThemeLocaleData } from "../composables";
import { filterPostsByTag, getPostsByYear } from "../utils";

const route = useRoute();
const themeLocale = useThemeLocaleData();

const { posts } = useBlog();
const { tags } = useTags();

const currentTag = computed(() => {
  const tagName = tags.value.find((tag) => tag.path === route.path);
  return tagName ? tagName.name : (themeLocale.value.showAllTagsText as string);
});

const filteredPosts = computed(() => {
  const tag =
    currentTag.value === themeLocale.value.showAllTagsText
      ? ""
      : currentTag.value;
  return getPostsByYear(filterPostsByTag(posts.value, tag));
});

const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.tags
      ? themeLocale.value.pages.tags
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined) info.title = themeLocale.value.pageText?.tags;
  return info;
});
</script>
