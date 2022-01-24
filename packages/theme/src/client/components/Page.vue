<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-gungnir-content">
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />

    <Giscus v-if="isGiscus" :theme="giscusTheme" />
  </main>
</template>

<script setup lang="ts">
import PageMeta from "@theme/PageMeta.vue";
import PageNav from "@theme/PageNav.vue";
import { computed, resolveComponent } from "vue";
import { useDarkMode } from "../composables";

const isGiscus = typeof resolveComponent("Giscus") !== "string";
const isDarkMode = useDarkMode();
const giscusTheme = computed(() =>
  isDarkMode.value ? "dark_dimmed" : "light"
);
</script>
