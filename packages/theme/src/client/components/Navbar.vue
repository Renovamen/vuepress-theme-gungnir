<template>
  <header
    ref="navbar"
    class="navbar"
    :class="{
      'is-fixed': isFixed || isSidebar,
      'is-visible': isVisible || isSidebar,
      invert: isInvert
    }"
  >
    <span ref="siteBrand">
      <RouterLink :to="siteBrandLink">
        <span class="site-name">
          {{ siteBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" @toggle-search="$emit('toggle-search')" />
      <slot name="after" />
      <NavbarSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import NavbarItems from "@theme/NavbarItems.vue";
import {
  usePageFrontmatter,
  useRouteLocale,
  useSiteLocaleData
} from "@vuepress/client";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type {
  GungnirThemeNormalPageFrontmatter,
  GungnirThemePostFrontmatter
} from "../../shared";
import { useThemeLocaleData } from "../composables";

defineProps({
  isSidebar: {
    type: Boolean,
    required: true
  }
});

defineEmits(["toggle-search"]);

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<
  GungnirThemeNormalPageFrontmatter | GungnirThemePostFrontmatter
>();
const router = useRouter();

const navbar = ref<HTMLElement | null>(null);
const siteBrand = ref<HTMLElement | null>(null);
const siteBrandLink = computed(() => themeLocale.value.home || "/");
const siteBrandTitle = "$ cd /home/";
const linksWrapperMaxWidth = ref(0);
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {};
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + "px"
  };
});

const previousTop = ref(0);
const isFixed = ref(false);
const isVisible = ref(false);
const isInvert = ref(true);

const path = computed(() => router.currentRoute.value.path);

const handleScroll = () => {
  const currentTop = window.pageYOffset;

  if (currentTop < previousTop.value) {
    // Scrolling up
    if (currentTop > 0 && isFixed.value) isVisible.value = true;
    else {
      isVisible.value = false;
      isFixed.value = false;
    }
  } else {
    // Scrolling down
    isVisible.value = false;
    if (navbar.value && currentTop > navbar.value!.offsetHeight)
      isFixed.value = true;
  }
  previousTop.value = currentTop;
};

const handleInvert = () => {
  let invert = false;

  // Home page
  if (
    frontmatter.value.layout === "HomePage" ||
    path.value.indexOf("/page/") !== -1
  )
    invert = true;

  // Post with header image
  if (
    frontmatter.value.layout === "Post" &&
    (frontmatter.value as GungnirThemePostFrontmatter).useHeaderImage
  )
    invert = true;

  // Tags page with header image
  if (
    path.value.indexOf("/tags") !== -1 &&
    themeLocale.value.pages &&
    themeLocale.value.pages.tags &&
    themeLocale.value.pages.tags.bgImage
  )
    invert = true;

  // Links page with header image
  if (
    path.value.indexOf("/links") !== -1 &&
    themeLocale.value.pages &&
    themeLocale.value.pages.links &&
    themeLocale.value.pages.links.bgImage
  )
    invert = true;

  isInvert.value = invert;
};

// handle navbar color invert after navigation
let unregisterRouterHook;

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719;
  const navbarHorizontalPadding =
    getCssValue(navbar.value, "paddingLeft") +
    getCssValue(navbar.value, "paddingRight");
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT || !navbar.value) {
      linksWrapperMaxWidth.value = 0;
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (siteBrand.value?.offsetWidth || 0);
    }
  };
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);
  window.addEventListener("orientationchange", handleLinksWrapWidth, false);

  handleInvert();
  unregisterRouterHook = router.afterEach(() => {
    handleInvert();
  });

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterRouterHook();
});

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ];
  const num = Number.parseInt(val, 10);
  return Number.isNaN(num) ? 0 : num;
}
</script>
