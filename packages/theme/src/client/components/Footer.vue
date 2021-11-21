<template>
  <footer class="footer">
    <span v-html="footerHTML" />
  </footer>
</template>

<script setup lang="ts">
import { useThemeLocaleData } from "../composables";

const themeLocaleDataRef = useThemeLocaleData();
const footerHTML = themeLocaleDataRef.value.footer;
</script>
