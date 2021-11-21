<template>
  <div class="postlist-wrapper">
    <PostListItem v-for="item in posts" :key="item.path" :item="item" />
    <!-- <Pager :data="getPagerData" /> -->
  </div>
</template>

<script lang="ts">
import type { PageData } from "@vuepress/client";
import { defineComponent, ref } from "vue";
import { getAllPosts, sortPostsByDate } from "../utils";
import PostListItem from "./PostListItem.vue";

export default defineComponent({
  components: {
    PostListItem
    // Pager
  },

  setup() {
    const posts = ref(<any>[]);

    getAllPosts().then((allPosts) => (posts.value = sortPostsByDate(allPosts)));

    return {
      posts
    };
  }

  // computed: {
  //   getPagerData() {
  //     var pagerData = {};
  //     if (this.$pagination.hasPrev) {
  //       pagerData.next = {};
  //       pagerData.next.text = this.$themeLocales.homePrev;
  //       pagerData.next.link = this.$pagination.prevLink;
  //     }
  //     if (this.$pagination.hasNext) {
  //       pagerData.prev = {};
  //       pagerData.prev.text = this.$themeLocales.homeNext;
  //       pagerData.prev.link = this.$pagination.nextLink;
  //     }
  //     return pagerData;
  //   }
  // }
});
</script>
