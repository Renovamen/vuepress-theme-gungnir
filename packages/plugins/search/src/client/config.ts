import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";
import { SearchPage } from "./components/SearchPage";
import type { SearchPageLocales } from "./components/SearchPage";

import "./styles/vars.css";
import "./styles/search.css";

declare const __SEARCH_LOCALES__: SearchPageLocales;
declare const __SEARCH_HOT_KEYS__: string[];
declare const __SEARCH_MAX_SUGGESTIONS__: number;

const locales = __SEARCH_LOCALES__;
const hotKeys = __SEARCH_HOT_KEYS__;
const maxSuggestions = __SEARCH_MAX_SUGGESTIONS__;

export default defineClientConfig({
  enhance({ app }) {
    // wrap the `<SearchPage />` component with plugin options
    app.component("SearchPage", (props) =>
      h(SearchPage, {
        locales,
        hotKeys,
        maxSuggestions,
        ...props
      })
    );
  }
});
