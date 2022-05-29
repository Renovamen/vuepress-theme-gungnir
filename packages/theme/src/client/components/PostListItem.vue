<template>
  <div class="post-item">
    <div class="post-item__img" @click="$router.push(item.path)">
      <img :src="withBase(item.info.headerImage)" />
    </div>
    <div class="else">
      <p class="post-item__date">
        {{ item.info.date ? formateDateString(item.info.date) : "" }}
      </p>
      <RouterLink :to="item.path" class="post-item__title">
        <h2>
          {{ item.info.title }}
        </h2>
        <h3 v-if="item.info.subtitle">
          {{ item.info.subtitle }}
        </h3>
      </RouterLink>
      <div
        class="post-item__content"
        v-html="getExcerpt(item.info.excerpt || '')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "@vuepress/client";
import type { PropType } from "vue";
import type { GungnirThemePostData } from "../../shared";
import { formateDateString } from "../utils";

defineProps({
  item: {
    type: Object as PropType<GungnirThemePostData>,
    required: true
  }
});

const getExcerpt = (excerpt: string) => {
  return excerpt
    .replace(/<RouterLink to/g, "<a href")
    .replace(/<\/RouterLink>/g, "</a>");
};
</script>
