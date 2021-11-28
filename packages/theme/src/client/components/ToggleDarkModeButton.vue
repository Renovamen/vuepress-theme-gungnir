<template>
  <div
    class="toggle-dark-button"
    :title="themeLocale.toggleDarkMode"
    @click="toggleDarkMode"
  >
    <VIcon v-show="!isDarkMode" name="sun" />
    <VIcon v-show="isDarkMode" name="moon" />
  </div>
</template>

<script setup lang="ts">
import { useDarkMode, useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const isDarkMode = useDarkMode();

const toggleDarkMode = (): void => {
  isDarkMode.value = !isDarkMode.value;
};
</script>
