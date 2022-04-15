import { useRouteLocale } from "@vuepress/client";
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from "vue";
import type { VNode } from "vue";
import type { GiscusOptions } from "../shared";

declare const __GISCUS_OPTIONS__: GiscusOptions;
const options = __GISCUS_OPTIONS__;

declare const __SITE_LOCALES__: any;
declare const __SITE_LANG__: string;
const siteLocales = __SITE_LOCALES__;
const siteLang = __SITE_LANG__;

const langMap = {
  "en-us": "en",
  en: "en",
  "zh-cn": "zh-CN",
  cn: "zh-CN",
  "zh-tw": "zh-TW",
  "zh-hant": "zh-TW",
  "zh-hk": "zh-TW",
  fr: "fr",
  es: "es",
  gsw: "gsw",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  pl: "pl",
  ro: "ro"
};

export default defineComponent({
  name: "Giscus",

  props: {
    theme: {
      type: String,
      required: false,
      default: undefined
    },
    lang: {
      type: String,
      required: false,
      default: undefined
    },
    reactionsEnabled: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },

  setup(props) {
    const routeLocale = useRouteLocale();

    const theme = computed(() => props.theme || options.theme || "light");
    const reactionsEnabled = computed(() => {
      if (props.reactionsEnabled === undefined)
        return !(options.reactionsEnabled === false);
      return props.reactionsEnabled;
    });
    const lang = computed(() => props.lang || options.lang || "auto");

    // Handles language switching
    const resolvedLang = computed(() => {
      if (lang.value === "auto") {
        const locale = siteLocales[routeLocale.value];
        const lang = (locale && locale.lang) || siteLang;
        if (lang && langMap[lang.toLowerCase()])
          return langMap[lang.toLowerCase()];
      }
      return langMap[lang.value.toLowerCase()] ?? "en";
    });

    const getScriptElement = () => {
      const element = document.createElement("script");
      element.setAttribute("src", "https://giscus.app/client.js");
      element.setAttribute("data-repo", options.repo);
      element.setAttribute("data-repo-id", options.repoId);
      element.setAttribute("data-category", options.category);
      element.setAttribute("data-category-id", options.categoryId);
      element.setAttribute(
        "data-mapping",
        options.mapping ? options.mapping : "pathname"
      );
      element.setAttribute(
        "data-reactions-enabled",
        reactionsEnabled.value ? "1" : "0"
      );
      element.setAttribute("data-emit-metadata", "0");
      element.setAttribute("data-theme", theme.value);
      element.setAttribute("data-lang", resolvedLang.value);
      if (options.lazyLoad) element.setAttribute("data-loading", "lazy");
      element.setAttribute(
        "crossorigin",
        options.crossorigin ? options.crossorigin : "anonymous"
      );
      element.setAttribute("async", "true");
      return element;
    };

    const scriptElement = ref<HTMLScriptElement>(getScriptElement());

    const updateGiscus = () => {
      const iframe = document.querySelector<HTMLIFrameElement>(
        "iframe.giscus-frame"
      );
      iframe?.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: theme.value,
              lang: resolvedLang.value,
              reactionsEnabled: reactionsEnabled.value
            }
          }
        },
        "https://giscus.app"
      );
    };

    watch([theme, resolvedLang, reactionsEnabled], () => {
      updateGiscus();
    });

    onMounted(() => {
      document.head.appendChild(scriptElement.value);
    });

    onBeforeUnmount(() => {
      document.head.removeChild(scriptElement.value);
    });

    return (): VNode =>
      h("div", {
        class: "giscus"
      });
  }
});
