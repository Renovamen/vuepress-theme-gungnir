<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <div class="timeline-wrapper">
        <TimelinePostList :data="filteredPosts" />
      </div>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import TimelinePostList from "@theme/TimelinePostList.vue";
import { computed } from "vue";
import type { GungnirThemePageOptions } from "../../shared";
import { useBlog, useThemeLocaleData } from "../composables";
import { getPostsByYear } from "../utils";

const themeLocale = useThemeLocaleData();

const { posts } = useBlog();

const filteredPosts = computed(() => {
  return getPostsByYear(posts.value);
});

const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.timelines
      ? themeLocale.value.pages.timelines
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined)
    info.title = themeLocale.value.pageText?.timelines;
  return info;
});
</script>
