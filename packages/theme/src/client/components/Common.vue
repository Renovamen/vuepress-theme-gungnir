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
        @toggle-search="toggleSearch(true)"
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
      <Sidebar @toggle-search="toggleSearch(true)">
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

    <GungnirSearchPage @toggle-search="toggleSearch(false)" />

    <Menu @toggle-sidebar="toggleSidebar" @toggle-catalog="toggleCatalog" />

    <Footer v-if="!shouldShowSidebar" />
  </div>
</template>

<script setup lang="ts">
import Footer from "@theme/Footer.vue";
import Menu from "@theme/Menu.vue";
import Navbar from "@theme/Navbar.vue";
import Sidebar from "@theme/Sidebar.vue";
import { pageData, usePageFrontmatter } from "@vuepress/client";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { GungnirThemePageFrontmatter } from "../../shared";
import { useSidebarItems, useThemeLocaleData } from "../composables";

const frontmatter = usePageFrontmatter<GungnirThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();
const router = useRouter();

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
);

// 404 page
const isNotFound = computed(() => pageData.value.path === "");

// sidebar
const sidebarItems = useSidebarItems();
const shouldShowSidebar = computed(
  () => sidebarItems.value.length > 0 && !isNotFound.value
);
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

const isSearchOpen = ref(false);

const toggleSearch = (to?: boolean): void => {
  isSearchOpen.value = typeof to === "boolean" ? to : !isSearchOpen.value;

  // disable/enable scrolling on html element
  const HTMLDom = document.querySelector<HTMLElement>("html");
  if (isSearchOpen.value) HTMLDom?.classList.add("fixed");
  else HTMLDom?.classList.remove("fixed");

  // auto focus
  if (isSearchOpen.value) {
    setTimeout(function () {
      const searchInput = document.querySelector(
        ".search-page input"
      ) as HTMLInputElement;
      searchInput.focus();
    }, 400);
  }
};

// catalog
const isCatalogOpen = ref(false);
const toggleCatalog = (to?: boolean): void => {
  isCatalogOpen.value = typeof to === "boolean" ? to : !isCatalogOpen.value;
};

// classes
const containerClass = computed(() => [
  {
    "no-navbar": !shouldShowNavbar.value,
    "no-sidebar": !shouldShowSidebar.value,
    "sidebar-open": isSidebarOpen.value,
    "catalog-open": isCatalogOpen.value,
    "search-open": isSearchOpen.value
  },
  frontmatter.value.pageClass
]);

// close sidebar and search page after navigation
let unregisterRouterHook;

onMounted(() => {
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false);
    toggleSearch(false);
  });
});

onUnmounted(() => {
  unregisterRouterHook();
});
</script>
