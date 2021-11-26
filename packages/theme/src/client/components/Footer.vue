<template>
  <footer class="footer">
    <span v-html="footerHTML" />
  </footer>
</template>

<script setup lang="ts">
import { useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const footerHTML = themeLocale.value.footer;
</script>
