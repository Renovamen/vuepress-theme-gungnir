<template>
  <aside class="sidebar">
    <NavbarLinks @toggle-search="$emit('toggle-search')" />
    <slot name="top" />
    <SidebarItems />
    <slot name="bottom" />
  </aside>
</template>

<script setup lang="ts">
import NavbarLinks from "./NavbarLinks.vue";
import SidebarItems from "./SidebarItems.vue";

defineEmits(["toggle-search"]);
</script>
