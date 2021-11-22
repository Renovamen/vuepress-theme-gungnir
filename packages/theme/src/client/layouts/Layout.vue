<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <ArticleHeader v-show="page.title" />
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { usePageData } from "@vuepress/client";
import ArticleHeader from "../components/ArticleHeader.vue";
import Common from "../components/Common.vue";
import Page from "../components/Page.vue";
import { useScrollPromise } from "../composables";

const page = usePageData();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>
