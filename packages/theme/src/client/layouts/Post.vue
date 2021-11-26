<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <div
          class="post-wrapper"
          :class="{ 'show-catalog': shoudleShowCatalog }"
        >
          <ArticleHeader v-show="page.title" class="post-header" />

          <Page :key="page.path" class="post-content">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>

          <Pager :data="pagerData" />

          <Catalog
            v-if="shoudleShowCatalog"
            :headers="headers"
            :active-link="state.activeLink"
            :class="{ fixed: state.isFixed }"
            :style="{ top: `${state.catalogTop}px !important` }"
          />
        </div>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { pageData, usePageData, usePageFrontmatter } from "@vuepress/client";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch
} from "vue";
import { useRouter } from "vue-router";
import type { GungnirThemePostFrontmatter, PostPageData } from "../../shared";
import ArticleHeader from "../components/ArticleHeader.vue";
import { Catalog } from "../components/Catalog";
import Common from "../components/Common.vue";
import Page from "../components/Page.vue";
import Pager from "../components/Pager.vue";
import { useScrollPromise, useThemeLocaleData } from "../composables";
import { getAllPosts, sortPostsByDateWithPager } from "../utils";

const page = usePageData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();
const themeLocale = useThemeLocaleData();
const router = useRouter();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

// catalog
const shoudleShowCatalog = computed(
  () =>
    (themeLocale.value.catalog || frontmatter.value.catalog) &&
    pageData.value.headers.length > 0
);

const pageHeaders = computed(() =>
  shoudleShowCatalog.value ? pageData.value.headers : []
);
const flattenHeaders = (item: any) => {
  return item.children.length > 0
    ? [item].concat(...item.children.map(flattenHeaders))
    : item;
};
const headers = computed(() =>
  [].concat(...pageHeaders.value.map(flattenHeaders))
);
const state = reactive({
  headerHeight: 0,
  screenWidth: 0,
  catalogTop: 0,
  activeLink: "",
  isFixed: false
});

const catalogTopAbsolute = 40;
const catalogTopFixed = 80;

const handleScroll = () => {
  // active link
  for (let i = headers.value.length - 1; i >= 0; i--) {
    const slug = (headers.value[i] as any).slug;
    const slugElement = document.querySelector(`#${slug}`) as HTMLElement;
    const headerTop = slugElement ? slugElement.getBoundingClientRect().top : 0;
    if (headerTop <= 100) {
      state.activeLink = slug;
      break;
    }
  }

  // catalog position
  const currentTop = window.pageYOffset;
  if (currentTop > state.headerHeight + catalogTopAbsolute - catalogTopFixed) {
    state.isFixed = true;
    state.catalogTop = catalogTopFixed;
  } else {
    state.isFixed = false;
    state.catalogTop = state.headerHeight + catalogTopAbsolute;
  }
  // $MQMobile
  if (state.screenWidth <= 719) state.catalogTop = -15;
};

const resetCatalogPos = () => {
  const postHeader = document.querySelector(".post-header") as HTMLElement;
  state.headerHeight = postHeader ? postHeader.offsetHeight : 0;
  state.screenWidth = document.body.clientWidth;
  if (state.screenWidth <= 719) state.catalogTop = -15;
  // $MQMobile
  else state.catalogTop = state.headerHeight + catalogTopAbsolute;
};

// reset catalog's position after navigation
let unregisterRouterHook;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  resetCatalogPos();
  window.onresize = () => {
    return (() => {
      resetCatalogPos();
      handleScroll();
    })();
  };

  unregisterRouterHook = router.afterEach(() => {
    resetCatalogPos();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterRouterHook();
});

// pager
const posts = ref<PostPageData[]>([]);
getAllPosts().then(
  (allPosts) => (posts.value = sortPostsByDateWithPager(allPosts))
);

const postIndex = computed(() =>
  posts.value.findIndex((item) => item.path === router.currentRoute.value.path)
);
const pagerData = computed(() => {
  if (postIndex.value === -1) return {};

  const next = posts.value[postIndex.value].next;
  if (next) next.text = themeLocale.value.postNext;

  const prev = posts.value[postIndex.value].prev;
  if (prev) prev.text = themeLocale.value.postPrev;

  return {
    next: next,
    prev: prev
  };
});
</script>
