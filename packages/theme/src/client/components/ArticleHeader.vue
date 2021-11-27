<template>
  <div
    class="article-header"
    :style="headerStyle()"
    :class="{ 'use-image': frontmatter.useHeaderImage }"
  >
    <div
      v-if="frontmatter.useHeaderImage && frontmatter.headerMask"
      class="article-header-mask"
      :style="{ background: frontmatter.headerMask }"
    />

    <div class="article-header-content">
      <div v-if="frontmatter.tags" class="article-tags">
        <span
          v-for="(item, index) in frontmatter.tags"
          :key="index"
          class="tag"
          :class="{ active: currentTag == item }"
          @click.stop="goTagPage(item)"
        >
          {{ item }}
        </span>
      </div>

      <h1 class="article-title">
        {{ frontmatter.title }}
      </h1>

      <p v-if="frontmatter.subtitle" class="article-subtitle">
        {{ frontmatter.subtitle }}
      </p>

      <div class="article-icons">
        <div
          v-if="frontmatter.author || themeLocale.personalInfo.name"
          class="article-icon"
        >
          <VIcon name="user" scale="0.8" />
          <span>{{ frontmatter.author || themeLocale.personalInfo.name }}</span>
        </div>

        <div v-if="frontmatter.date" class="article-icon">
          <VIcon name="calendar" scale="0.8" />
          <span>{{ formatDateForArticle(frontmatter.date) }}</span>
        </div>

        <div v-if="page.readingTime" class="article-icon">
          <VIcon name="timer" />
          <span>{{ page.readingTime.minutes }} min</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter, withBase } from "@vuepress/client";
import { useRouter } from "vue-router";
import type {
  GungnirThemePageData,
  GungnirThemePostFrontmatter
} from "../../shared";
import { useThemeLocaleData } from "../composables";
import { formatDateForArticle } from "../utils/resolveTime";

defineProps({
  currentTag: {
    type: String,
    default: ""
  }
});

const router = useRouter();
const page = usePageData<GungnirThemePageData>();
const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();

console.log(page.value.readingTime);

const goTagPage = (tag: string) => {
  if (router.currentRoute.value.path !== `/tags/${tag}/`) {
    router.push({ path: `/tags/${tag}/` });
  }
};

// post header style
const headerStyle = () => {
  const style = {} as any;
  if (frontmatter.value.layout === "Post") {
    if (frontmatter.value.useHeaderImage && frontmatter.value.headerImage) {
      style.backgroundImage = `url(${withBase(frontmatter.value.headerImage)})`;
    }
    style.paddingRight = "0";
  }
  return style;
};
</script>
