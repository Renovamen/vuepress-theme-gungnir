import type { PageHeader } from "@vuepress/shared";
import { computed } from "vue";
import type { ComputedRef, Ref } from "vue";
import type { SearchIndex, SearchIndexItem } from "../../shared";
import { isQueryMatched } from "../utils";

export interface SearchSuggestion {
  link: string;
  title: string;
  subtitle?: string;
  header?: string;
}

export const useSearchSuggestions = ({
  searchIndex,
  routeLocale,
  query,
  maxSuggestions
}: {
  searchIndex: Ref<SearchIndex>;
  routeLocale: Ref<string>;
  query: Ref<string>;
  maxSuggestions: Ref<number>;
}): ComputedRef<SearchSuggestion[]> => {
  // filter search index of current locale
  const localeSearchIndex = computed(() =>
    searchIndex.value.filter((item) => item.pathLocale === routeLocale.value)
  );

  return computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr) return [];

    const suggestions: SearchSuggestion[] = [];

    const matchPageHeader = (
      searchIndexItem: SearchIndexItem,
      header: PageHeader
    ): SearchSuggestion | false => {
      if (isQueryMatched(searchStr, [header.title])) {
        return {
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          subtitle: searchIndexItem.subtitle,
          header: header.title
        };
      }

      for (const child of header.children) {
        const suggestion = matchPageHeader(searchIndexItem, child);
        if (suggestion) return suggestion;
      }

      return false;
    };

    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions.value) {
        break;
      }

      // we only search for blogs (layout: Post)
      if (searchIndexItem.layout !== "Post") continue;

      // match page title, subtitle and extra fields
      const content = [searchIndexItem.title, ...searchIndexItem.extraFields];
      if (searchIndexItem.subtitle) content.push(searchIndexItem.subtitle);
      if (isQueryMatched(searchStr, content)) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title,
          subtitle: searchIndexItem.subtitle
        });
        continue;
      }

      // match page headers
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions.value) {
          break;
        }

        const suggestion = matchPageHeader(searchIndexItem, header);
        if (suggestion) {
          suggestions.push(suggestion);
          break;
        }
      }
    }

    return suggestions;
  });
};
