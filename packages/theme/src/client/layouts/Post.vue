<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <div class="post-wrapper">
          <ArticleHeader v-show="page.title" class="post-header" />

          <Page :key="page.path" class="post-content">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </div>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import type { GungnirThemePostFrontmatter } from "../../shared";
import ArticleHeader from "../components/ArticleHeader.vue";
import Common from "../components/Common.vue";
import Page from "../components/Page.vue";
import { useScrollPromise } from "../composables";

const page = usePageData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>
