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
          class="article-tag"
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
          v-if="frontmatter.author || personalInfo.name"
          class="article-icon"
        >
          <VIcon name="fa-regular-user" scale="0.9" />
          <span>{{ frontmatter.author || personalInfo.name }}</span>
        </div>

        <div v-if="frontmatter.date" class="article-icon">
          <VIcon name="fa-regular-calendar" scale="0.9" />
          <span>{{ formateDateString(frontmatter.date) }}</span>
        </div>

        <div v-if="page.readingTime" class="article-icon">
          <VIcon name="ri-timer-line" scale="0.9" />
          <span>{{ page.readingTime.minutes }} min</span>
        </div>
      </div>
    </div>
    <div
      v-if="frontmatter.useHeaderImage && frontmatter.headerImageCredit"
      class="article-image-credit"
    >
      {{ themeLocale.headerImageCredit }}
      <a
        v-if="frontmatter.headerImageCreditLink"
        :href="frontmatter.headerImageCreditLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ frontmatter.headerImageCredit }}
      </a>
      <span v-else>{{ frontmatter.headerImageCredit }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter, withBase } from "@vuepress/client";
import { useRouter } from "vue-router";
import type {
  GungnirThemePageData,
  GungnirThemePostFrontmatter,
  PersonalConfig
} from "../../shared";
import { useTagMap, useThemeLocaleData } from "../composables";
import { formateDateString } from "../utils/resolveTime";

defineProps({
  currentTag: {
    type: String,
    default: ""
  }
});

const router = useRouter();
const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();
const page = usePageData<GungnirThemePageData>();
const tagMap = useTagMap();

const goTagPage = (tag: string) => {
  if (router.currentRoute.value.path !== tagMap.value.map[tag].path) {
    router.push({ path: tagMap.value.map[tag].path });
  }
};

// post header style
const headerStyle = () => {
  const style = {} as { backgroundImage: string };
  if (
    frontmatter.value.layout === "Post" &&
    frontmatter.value.useHeaderImage &&
    frontmatter.value.headerImage
  ) {
    style.backgroundImage = `url(${withBase(frontmatter.value.headerImage)})`;
  }
  return style;
};

const personalInfo = themeLocale.value.personalInfo as PersonalConfig;
</script>
