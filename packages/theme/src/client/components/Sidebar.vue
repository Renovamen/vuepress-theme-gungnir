<template>
  <aside class="sidebar">
    <NavbarItems @toggle-search="$emit('toggle-search')" />
    <slot name="top" />
    <SidebarItems />
    <slot name="bottom" />
  </aside>
</template>

<script setup lang="ts">
import NavbarItems from "@theme/NavbarItems.vue";
import SidebarItems from "@theme/SidebarItems.vue";

defineEmits(["toggle-search"]);
</script>
