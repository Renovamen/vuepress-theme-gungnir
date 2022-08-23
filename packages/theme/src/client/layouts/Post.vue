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
import { usePageData } from "@vuepress/client";
import { useScroll } from "@vueuse/core";
import { computed, onBeforeUnmount, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { Catalog } from "../components/Catalog";
import {
  useBlog,
  useCatalog,
  useScrollPromise,
  useThemeLocaleData
} from "../composables";

const page = usePageData();
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
  catalogTop: 0,
  activeLink: "",
  isFixed: false
});

const catalogTopAbsolute = 40;
const catalogTopFixed = 80;

const resetCatalogPosition = () => {
  const header = document.querySelector<HTMLElement>(".post-header");
  state.headerHeight = header?.offsetHeight || 0;
  state.catalogTop = state.headerHeight + catalogTopAbsolute;
};

// reset catalog's position after navigation
let unregisterRouterHook;

onMounted(() => {
  const { y } = useScroll(document);

  const handleScroll = () => {
    // active link
    for (let i = headers.value.length - 1; i >= 0; i--) {
      const slug = (headers.value[i] as any).slug;
      const slugElement = document.querySelector<HTMLElement>(`#${slug}`);
      const headerTop = slugElement
        ? slugElement.getBoundingClientRect().top
        : 0;
      if (headerTop <= 100) {
        state.activeLink = slug;
        break;
      }
    }

    // catalog position
    if (y.value > state.headerHeight + catalogTopAbsolute - catalogTopFixed) {
      state.isFixed = true;
      state.catalogTop = catalogTopFixed;
    } else {
      state.isFixed = false;
      state.catalogTop = state.headerHeight + catalogTopAbsolute;
    }
  };

  watch(y, handleScroll);

  resetCatalogPosition();
  unregisterRouterHook = router.afterEach(resetCatalogPosition);

  window.onresize = () => {
    resetCatalogPosition();
    handleScroll();
  };
});

onBeforeUnmount(() => {
  unregisterRouterHook();
});

// pager
const { post } = useBlog();

const pagerData = computed(() => {
  if (!post.value) return {};

  const next = post.value.info.next;
  if (next) next.text = themeLocale.value.postNext;

  const prev = post.value.info.prev;
  if (prev) prev.text = themeLocale.value.postPrev;

  return {
    next,
    prev
  };
});
</script>
