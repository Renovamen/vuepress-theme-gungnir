<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />

      <div class="links-wrapper">
        <div
          v-for="(group, groupId) in frontmatter.links"
          :key="`link-group-${groupId}`"
          class="link-section"
        >
          <h2>{{ group.title }}</h2>
          <div class="link-group">
            <div
              v-for="(item, itemId) in group.items"
              :key="`link-${itemId}`"
              class="link-item"
            >
              <div class="content">
                <a :href="item.url" target="_blank" rel="noopener noreferrer">
                  <img :src="$withBase(item.img)" />
                  <span class="sitename">
                    {{ item.sitename }}
                  </span>
                  <div class="desc">
                    {{ item.desc }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import type {
  GungnirThemeLinksPageFrontmatter,
  GungnirThemePageOptions
} from "../../shared";
import { useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<GungnirThemeLinksPageFrontmatter>();

const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.links
      ? themeLocale.value.pages.links
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined) info.title = themeLocale.value.pageText?.links;
  return info;
});
</script>
