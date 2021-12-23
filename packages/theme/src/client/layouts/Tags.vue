<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <div class="tags-wrapper">
        <TagList :current-tag="currentTag" />
        <TagPostList :data="posts" />
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
const blog = useBlog();

const currentTag = computed(
  () => router.currentRoute.value.params.id || themeLocale.value.showAllTagsText
);

const posts = computed(() => {
  const tag =
    currentTag.value === "Show All" ? "" : (currentTag.value as string);
  const filteredPost = filterPostsByTag(blog.posts.value, tag);
  return getPostsByYear(filteredPost);
});

const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.tags
      ? themeLocale.value.pages.tags
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined) info.title = themeLocale.value.tagsText;
  return info;
});
</script>
