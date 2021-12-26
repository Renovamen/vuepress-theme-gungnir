import type { PageData } from "@vuepress/shared";

export interface SearchIndexItem
  extends Pick<PageData, "title" | "headers" | "path"> {
  pathLocale: string;
  extraFields: string[];
  layout?: string;
  subtitle?: string;
}

export type SearchIndex = SearchIndexItem[];
