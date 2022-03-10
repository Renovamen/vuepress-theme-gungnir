<template>
  <div class="custom-container link">
    <AutoLink :item="link" />
    <VIcon :scale="iconScale" :name="icon" />
    <div class="custom-container-title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AutoLink from "@theme/AutoLink.vue";

defineProps({
  title: {
    type: String,
    required: false,
    default: ""
  },
  link: {
    type: String,
    required: false,
    default: "/"
  },
  icon: {
    type: String,
    required: false,
    default: "/"
  },
  iconScale: {
    type: Number,
    required: false,
    default: 1
  }
});
</script>
