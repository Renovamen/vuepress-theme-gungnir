<template>
  <div class="postlist-wrapper">
    <PostListItem
      v-for="item in sliceSortedPosts"
      :key="item.path"
      :item="item"
    />
    <Pager :data="pagerData" />
  </div>
</template>

<script setup lang="ts">
import type { PageData } from "@vuepress/client";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useThemeLocaleData } from "../composables";
import { getAllPosts, sortPostsByDate } from "../utils";
import Pager from "./Pager.vue";
import PostListItem from "./PostListItem.vue";

const router = useRouter();
const themeLocale = useThemeLocaleData();
const posts = ref<PageData[]>([]);

getAllPosts().then((allPosts) => (posts.value = sortPostsByDate(allPosts)));

const pageIndex = computed(() => {
  const index = router.currentRoute.value.params.id || 1;
  if (isNaN(Number(index))) return 1;
  return Number(index);
});
const maxPageIndex = computed(() =>
  Math.max(1, Math.ceil(posts.value.length / postNumPerPage.value))
);
const pageValidIndex = computed(() =>
  Math.min(pageIndex.value, maxPageIndex.value)
);

const postNumPerPage = computed(
  () => themeLocale.value.postNumPerPage as number
);

const sliceSortedPosts = computed(() => {
  if (posts.value.length === 0) return posts.value;

  const start = (pageValidIndex.value - 1) * postNumPerPage.value;
  return posts.value.slice(
    start,
    Math.min(start + postNumPerPage.value, posts.value.length)
  );
});

const pagerData = computed(() => {
  const next =
    pageValidIndex.value > 1
      ? {
          text: themeLocale.value.homeNext,
          link:
            Math.min(pageIndex.value, maxPageIndex.value) - 1 === 1
              ? "/"
              : `/page/${pageIndex.value - 1}`
        }
      : null;

  const prev =
    pageValidIndex.value < maxPageIndex.value
      ? {
          text: themeLocale.value.homePrev,
          link: `/page/${pageIndex.value + 1}`
        }
      : null;

  return {
    next: next,
    prev: prev
  };
});
</script>
