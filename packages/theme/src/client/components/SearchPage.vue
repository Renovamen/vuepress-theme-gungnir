<template>
  <div class="search-page">
    <span class="search-close" @click="$emit('toggle-search')">
      <VIcon name="chevron-down" scale="1.5" />
    </span>

    <div class="search-box">
      <input
        ref="input"
        aria-label="Search"
        :value="query"
        :placeholder="placeholder"
        autocomplete="off"
        spellcheck="false"
        @input="query = $event.target.value"
        @keyup.enter="goTo(focusIndex)"
        @keyup.up="onArrowUp()"
        @keyup.down="onArrowDown()"
      />
      <ul v-if="showSuggestions" class="suggestions" @mouseleave="unFocus()">
        <li
          v-for="(s, i) in suggestions"
          :key="i"
          class="suggestion"
          :class="{ focused: i === focusIndex }"
          @mousedown="goTo(i)"
          @mouseenter="focusTo(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="suggestion-title">
              {{ s.title || s.path }}
            </span>
            <span v-if="s.subtitle" class="suggestion-subtitle">
              {{ s.subtitle }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useSearchIndex,
  useSearchSuggestions,
  useSuggestionsFocus
} from "@renovamen/vuepress-plugin-search/lib/client";
import { useRouteLocale } from "@vuepress/client";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useThemeLocaleData } from "../composables";

defineEmits(["toggle-search"]);

const themeLocale = useThemeLocaleData();
const router = useRouter();
const routeLocale = useRouteLocale();
const searchIndex = useSearchIndex();

const maxSuggestions = ref(themeLocale.value.searchMaxSuggestions as number);
const input = ref<HTMLInputElement | null>(null);
const query = ref("");
const placeholder = themeLocale.value.searchPlaceholder;

const suggestions = useSearchSuggestions({
  searchIndex,
  routeLocale,
  query,
  maxSuggestions
});
const { focusIndex, focusNext, focusPrev, focusTo, unFocus } =
  useSuggestionsFocus(suggestions);

const showSuggestions = computed(() => !!suggestions.value.length);

const onArrowUp = (): void => {
  if (!showSuggestions.value) return;
  focusPrev();
};

const onArrowDown = (): void => {
  if (!showSuggestions.value) return;
  focusNext();
};

const goTo = (index: number): void => {
  if (!showSuggestions.value) {
    return;
  }

  const suggestion = suggestions.value[index];

  if (!suggestion) {
    return;
  }

  router.push(suggestion.link).then(() => {
    query.value = "";
    focusIndex.value = 0;
  });
};
</script>
