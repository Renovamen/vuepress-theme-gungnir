<template>
  <div class="post-item">
    <div class="post-item__img" @click="$router.push(item.path)">
      <img :src="$withBase(item.frontmatter.headerImage)" />
    </div>
    <div class="else">
      <p v-if="item.frontmatter.date" class="post-item__date">
        {{ formatDateForArticle(item.frontmatter.date) }}
      </p>
      <RouterLink :to="item.path" class="post-item__title">
        <h2>
          {{ item.frontmatter.title }}
        </h2>
        <h3 v-if="item.frontmatter.subtitle">
          {{ item.frontmatter.subtitle }}
        </h3>
      </RouterLink>
      <div class="post-item__content" v-html="getExcerpt(item.excerpt)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDateForArticle } from "../utils";

defineProps({
  item: {
    type: Object,
    required: true
  }
});

const getExcerpt = (excerpt: string) => {
  return excerpt
    .replaceAll("<RouterLink to", "<a href")
    .replaceAll("</RouterLink>", "</a>");
};
</script>
