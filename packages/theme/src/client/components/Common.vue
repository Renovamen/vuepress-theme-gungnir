<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <Navbar
        v-if="shouldShowNavbar"
        :is-sidebar="shouldShowSidebar"
        @toggle-sidebar="toggleSidebar"
      >
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
    </slot>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <Sidebar v-if="!isNotFound">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <div class="page-content">
      <slot name="page" />
    </div>

    <Footer v-if="isNotFound || !shouldShowSidebar" />
  </div>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import type {
  GungnirThemePageData,
  GungnirThemePageFrontmatter
} from "../../shared";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import {
  useResolveRouteWithRedirect,
  useSidebarItems,
  useThemeLocaleData
} from "../composables";

const frontmatter = usePageFrontmatter<GungnirThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();
const page = usePageData<GungnirThemePageData>();
const router = useRouter();

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
);

// 404 page
const isNotFound = computed(
  () =>
    page.value.path === "" &&
    router.currentRoute.value.path.indexOf("/page/") === -1
);

// sidebar
const sidebarItems = useSidebarItems();
const shouldShowSidebar = computed(() => sidebarItems.value.length > 0);
const isSidebarOpen = ref(false);
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
};
const touchStart = { x: 0, y: 0 };

const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
};

const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true);
    } else {
      toggleSidebar(false);
    }
  }
};

// classes
const containerClass = computed(() => [
  {
    "no-navbar": !shouldShowNavbar.value,
    "no-sidebar": !sidebarItems.value.length,
    "sidebar-open": isSidebarOpen.value
  },
  frontmatter.value.pageClass
]);

// close sidebar after navigation
let unregisterRouterHook;

onMounted(() => {
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false);
  });
});

onUnmounted(() => {
  unregisterRouterHook();
});
</script>
