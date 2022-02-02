<template>
  <div
    class="toggle-dark-button"
    :title="themeLocale.toggleDarkMode"
    @click="toggleDarkMode"
  >
    <VIcon v-show="currentMode === 'light'" name="fa-sun" />
    <VIcon v-show="currentMode === 'dark'" name="fa-moon" />
    <VIcon v-show="currentMode === 'auto'" name="fa-magic" />
  </div>
</template>

<script setup lang="ts">
import { useDarkMode, useThemeLocaleData } from "../composables";

const modeOptions = ["light", "dark", "auto"];

const themeLocale = useThemeLocaleData();
const { currentMode } = useDarkMode();

const toggleDarkMode = (): void => {
  const currentIndex = modeOptions.indexOf(currentMode.value);
  const nextIndex = (currentIndex + 1) % modeOptions.length;
  currentMode.value = modeOptions[nextIndex];
};
</script>
