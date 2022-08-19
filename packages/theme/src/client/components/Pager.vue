<template>
  <div class="pager">
    <RouterLink v-if="data.prev" class="prev" :to="data.prev.link">
      {{ data.prev.text }}
      <br v-if="data.prev.title" />
      <span v-if="data.prev.title">
        {{ data.prev.title }}
      </span>
    </RouterLink>

    <RouterLink v-if="data.next" class="next" :to="data.next.link">
      {{ data.next.text }}
      <br v-if="data.next.title" />
      <span v-if="data.next.title">
        {{ data.next.title }}
      </span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
