<template>
  <div class="postlist-wrapper">
    <PostListItem v-for="item in posts" :key="item.path" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { PageData } from "@vuepress/client";
import { onMounted, ref } from "vue";
import { getAllPosts, sortPostsByDate } from "../utils";
import PostListItem from "./PostListItem.vue";

const posts = ref<PageData[]>([]);
getAllPosts().then((allPosts) => (posts.value = sortPostsByDate(allPosts)));
</script>
