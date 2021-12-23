<template>
  <section v-for="(item, index) in data" :key="index">
    <span class="year">{{ item.year }}</span>

    <div v-for="(subItem, subIndex) in item.data" :key="subIndex" class="item">
      <RouterLink :to="subItem.path">
        <p class="title">
          {{ subItem.frontmatter.title }}
        </p>
        <p v-if="subItem.frontmatter.subtitle" class="subtitle">
          {{ subItem.frontmatter.subtitle }}
        </p>
      </RouterLink>
      <hr />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
</script>
