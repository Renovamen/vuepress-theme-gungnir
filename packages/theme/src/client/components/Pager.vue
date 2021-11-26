<template>
  <div class="pager-wrapper">
    <div class="pager">
      <RouterLink v-if="data.next" class="next" :to="data.next.link">
        {{ themeLocale.postNext }}<br />
        <span v-if="data.next.title">
          {{ data.next.title }}
        </span>
      </RouterLink>

      <RouterLink v-if="data.prev" class="previous" :to="data.prev.link">
        {{ themeLocale.postPrev }}<br />
        <span v-if="data.prev.title">
          {{ data.prev.title }}
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();

defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
