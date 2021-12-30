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
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { GungnirThemePageOptions } from "../../shared";
import Common from "../components/Common.vue";
import PageHeader from "../components/PageHeader.vue";
import TagList from "../components/TagList.vue";
import TagPostList from "../components/TagPostList.vue";
import { useBlog, useTags, useThemeLocaleData } from "../composables";
import { filterPostsByTag, getPostsByYear } from "../utils";

const router = useRouter();
const themeLocale = useThemeLocaleData();
const tag = useTags();
const { posts } = useBlog();

const currentTag = computed(
  () => router.currentRoute.value.params.id || themeLocale.value.showAllTagsText
);

const filteredPosts = computed(() => {
  const tag =
    currentTag.value === themeLocale.value.showAllTagsText
      ? ""
      : (currentTag.value as string);
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
