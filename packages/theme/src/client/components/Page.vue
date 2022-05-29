<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-gungnir-content">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />

    <GungnirGiscus v-if="frontmatter.giscus !== false" :theme="giscusTheme" />
  </main>
</template>

<script setup lang="ts">
import PageMeta from "@theme/PageMeta.vue";
import PageNav from "@theme/PageNav.vue";
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import type { GungnirThemeNormalPageFrontmatter } from "../../shared";
import { useDarkMode, useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<GungnirThemeNormalPageFrontmatter>();
const { isDarkMode } = useDarkMode();

const giscusTheme = computed(() =>
  isDarkMode.value
    ? themeLocale.value.giscusDarkTheme
    : themeLocale.value.giscusLightTheme
);
</script>
