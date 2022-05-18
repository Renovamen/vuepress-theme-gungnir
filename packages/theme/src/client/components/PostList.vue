<template>
  <div class="postlist-wrapper">
    <PostListItem v-for="item in slicedPosts" :key="item.path" :item="item" />
    <Pager v-if="pagerData.next || pagerData.prev" :data="pagerData" />
  </div>
</template>

<script setup lang="ts">
import Pager from "@theme/Pager.vue";
import PostListItem from "@theme/PostListItem.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useBlog, useThemeLocaleData } from "../composables";

const router = useRouter();
const themeLocale = useThemeLocaleData();

const pageIndex = computed(() => {
  const index = decodeURI(
    router.currentRoute.value.path.replace(/\/page/g, "").replace(/\//g, "")
  );
  if (index === "") return 1;
  return Number(index);
});

const { slicedPosts, postListPager } = useBlog(pageIndex);

const pagerData = computed(() => {
  const links = postListPager.value;

  const next =
    links && links.next
      ? {
          text: themeLocale.value.homeNext,
          link: links.next
        }
      : null;

  const prev =
    links && links.prev
      ? {
          text: themeLocale.value.homePrev,
          link: links.prev
        }
      : null;

  return {
    next,
    prev
  };
});
</script>
