<template>
  <div
    class="page-header"
    :style="headerStyle"
    :class="{ 'use-image': pageInfo.bgImage }"
  >
    <div
      v-if="pageInfo.bgImage && pageInfo.bgImage.mask"
      class="header-mask"
      :style="{ background: pageInfo.bgImage.mask }"
    />
    <h1 class="title">
      {{ pageInfo.title || frontmatter.title }}
    </h1>
    <h3 v-if="pageInfo.subtitle" class="subtitle">
      {{ pageInfo.subtitle }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { usePageFrontmatter, withBase } from "@vuepress/client";
import { computed, toRefs } from "vue";
import type { GungnirThemeNormalPageFrontmatter } from "../../shared";

const props = defineProps({
  pageInfo: {
    type: Object,
    default: () => {
      return {};
    }
  }
});

const { pageInfo } = toRefs(props);
const frontmatter = usePageFrontmatter<GungnirThemeNormalPageFrontmatter>();

const headerStyle = computed(() => {
  return pageInfo.value.bgImage
    ? {
        backgroundImage: `url(${withBase(pageInfo.value.bgImage.path)})`
      }
    : {};
});
</script>
