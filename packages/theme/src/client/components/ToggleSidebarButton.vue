<template>
  <div
    class="toggle-sidebar-button"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <VIcon name="bi-layout-sidebar-inset" />
  </div>
</template>

<script setup lang="ts">
import { useThemeLocaleData } from "../composables";

defineEmits(["toggle"]);

const themeLocale = useThemeLocaleData();
</script>
