<template>
  <div class="custom-container link">
    <AutoLink :item="linkItem"></AutoLink>
    <VIcon v-if="icon !== ''" :scale="iconScale" :name="icon" />
    <div class="custom-container-title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AutoLink from "@theme/AutoLink.vue";
import { computed, toRefs } from "vue";

const props = defineProps({
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
    default: ""
  },
  iconScale: {
    type: Number,
    required: false,
    default: 1
  }
});

const { link } = toRefs(props);

const linkItem = computed(() => ({
  link: link.value,
  icon: false
}));
</script>
