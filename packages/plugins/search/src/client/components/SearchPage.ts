import { useRouteLocale } from "@vuepress/client";
import type { LocaleConfig } from "@vuepress/shared";
import { computed, defineComponent, h, ref, toRefs } from "vue";
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import {
  useHotKeys,
  useSearchIndex,
  useSearchSuggestions,
  useSuggestionsFocus
} from "../composables";

export type SearchPageLocales = LocaleConfig<{
  placeholder: string;
}>;

export const SearchPage = defineComponent({
  name: "SearchPage",

  props: {
    locales: {
      type: Object as PropType<SearchPageLocales>,
      required: false,
      default: () => ({})
    },

    hotKeys: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },

    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },

  setup(props, { emit }) {
    const { locales, hotKeys, maxSuggestions } = toRefs(props);

    const router = useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex = useSearchIndex();

    const input = ref<HTMLInputElement | null>(null);
    const query = ref("");
    const locale = computed(() => locales.value[routeLocale.value] ?? {});

    const suggestions = useSearchSuggestions({
      searchIndex,
      routeLocale,
      query,
      maxSuggestions
    });
    const { focusIndex, focusNext, focusPrev, focusTo, unFocus } =
      useSuggestionsFocus(suggestions);

    useHotKeys({ input, hotKeys });

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

      // force enable scrolling on html element
      const HTMLDom = document.querySelector<HTMLElement>("html");
      HTMLDom?.classList.remove("fixed");

      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };

    return () =>
      h(
        "div",
        {
          class: "search-page",
          role: "search"
        },
        [
          h(
            "span",
            {
              class: "search-close",
              onClick: (event: MouseEvent) => emit("toggle-search")
            },
            [
              h(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 448 512",
                  width: "28",
                  height: "28",
                  fill: "currentColor"
                },
                [
                  h("path", {
                    d: "M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                  })
                ]
              )
            ]
          ),
          h(
            "div",
            {
              class: "gungnir-search-box"
            },
            [
              h("input", {
                ref: input,
                placeholder: locale.value.placeholder || "$ grep ...",
                autocomplete: "off",
                spellcheck: false,
                value: query.value,
                onInput: (event) => (query.value = event.target.value),
                onKeydown: (event) => {
                  switch (event.key) {
                    case "ArrowUp": {
                      onArrowUp();
                      break;
                    }
                    case "ArrowDown": {
                      onArrowDown();
                      break;
                    }
                    case "Enter": {
                      event.preventDefault();
                      goTo(focusIndex.value);
                      break;
                    }
                  }
                }
              }),
              showSuggestions.value &&
                h(
                  "ul",
                  {
                    class: "suggestions",
                    onMouseleave: () => unFocus()
                  },
                  suggestions.value.map(({ link, title, subtitle }, index) =>
                    h(
                      "li",
                      {
                        class: [
                          "suggestion",
                          {
                            focused: focusIndex.value === index
                          }
                        ],
                        onMouseenter: () => focusTo(index),
                        onMousedown: () => goTo(index)
                      },
                      h(
                        "a",
                        {
                          href: link,
                          onClick: (event) => event.preventDefault()
                        },
                        [
                          h(
                            "span",
                            {
                              class: "suggestion-title"
                            },
                            title || link
                          ),
                          subtitle &&
                            h(
                              "span",
                              { class: "suggestion-subtitle" },
                              subtitle
                            )
                        ]
                      )
                    )
                  )
                )
            ]
          )
        ]
      );
  }
});
