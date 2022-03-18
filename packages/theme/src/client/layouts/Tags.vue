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
import { useRouter } from "vue-router";
import type { GungnirThemePageOptions } from "../../shared";
import { useBlog, useThemeLocaleData } from "../composables";
import { filterPostsByTag, getPostsByYear } from "../utils";

const router = useRouter();
const themeLocale = useThemeLocaleData();
const { posts } = useBlog();

const currentTag = computed(() => {
  const tagName = decodeURI(
    router.currentRoute.value.path.replace(/\/tags/g, "").replace(/\//g, "")
  );
  if (tagName === "") return themeLocale.value.showAllTagsText;
  else return tagName;
});

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
