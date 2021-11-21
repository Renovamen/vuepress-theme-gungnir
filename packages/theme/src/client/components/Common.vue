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
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page" />

    <Footer v-if="!shouldShowSidebar" />
  </div>
</template>

<script lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { GungnirThemePageFrontmatter } from "../../shared";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import { useSidebarItems, useThemeLocaleData } from "../composables";

export default defineComponent({
  name: "Common",

  components: {
    Navbar,
    Sidebar,
    Footer
  },

  setup() {
    const frontmatter = usePageFrontmatter<GungnirThemePageFrontmatter>();
    const themeLocale = useThemeLocaleData();

    // navbar
    const shouldShowNavbar = computed(
      () =>
        frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
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
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });

    return {
      containerClass,
      onTouchStart,
      onTouchEnd,
      shouldShowNavbar,
      shouldShowSidebar,
      toggleSidebar
    };
  }
});
</script>
