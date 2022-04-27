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
            <template #bottom>
              <Pager
                v-if="pagerData.next || pagerData.prev"
                :data="pagerData"
              />
            </template>
          </Page>

          <Catalog
            v-if="shoudleShowCatalog"
            :headers="headers"
            :active-link="state.activeLink"
            :class="{ fixed: state.isFixed }"
            :style="{ top: `${state.catalogTop}px` }"
          />
        </div>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import ArticleHeader from "@theme/ArticleHeader.vue";
import Common from "@theme/Common.vue";
import Page from "@theme/Page.vue";
import Pager from "@theme/Pager.vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import type { GungnirThemePostFrontmatter } from "../../shared";
import { Catalog } from "../components/Catalog";
import {
  useBlog,
  useCatalog,
  useScrollPromise,
  useThemeLocaleData
} from "../composables";

const page = usePageData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();
const themeLocale = useThemeLocaleData();
const router = useRouter();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

// catalog
const shoudleShowCatalog = useCatalog();

const pageHeaders = computed(() =>
  shoudleShowCatalog.value ? page.value.headers : []
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
    const slugElement = document.querySelector<HTMLElement>(`#${slug}`);
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
};

const resetCatalogPosition = () => {
  const postHeader = document.querySelector<HTMLElement>(".post-header");
  state.headerHeight = postHeader ? postHeader.offsetHeight : 0;
  state.screenWidth = document.body.clientWidth;
  state.catalogTop = state.headerHeight + catalogTopAbsolute;
};

// reset catalog's position after navigation
let unregisterRouterHook;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  resetCatalogPosition();
  window.onresize = () => {
    return (() => {
      resetCatalogPosition();
      handleScroll();
    })();
  };

  unregisterRouterHook = router.afterEach(() => {
    resetCatalogPosition();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterRouterHook();
});

// pager
const { post } = useBlog();

const pagerData = computed(() => {
  if (!post.value) return {};

  const next = post.value.next;
  if (next) next.text = themeLocale.value.postNext;

  const prev = post.value.prev;
  if (prev) prev.text = themeLocale.value.postPrev;

  return {
    next: next,
    prev: prev
  };
});
</script>
