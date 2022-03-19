import {
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref
} from "vue";
import "./style.css";
import type { MermaidOptions } from "../shared";

declare const __MERMAID_OPTIONS__: MermaidOptions;
const options = __MERMAID_OPTIONS__;

export default defineComponent({
  name: "Mermaid",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const mermaidElement = ref<HTMLElement>();
    const content = ref("");
    let observer: MutationObserver;

    onMounted(() => {
      content.value = mermaidElement.value?.dataset.code || "";

      Promise.resolve(import("mermaid")).then((mermaid) => {
        const { initialize, init } = mermaid.default;

        const initMermaid = (dark: boolean) => {
          const lightTheme = options.theme ? options.theme : "default";
          const darkTheme = options.darkTheme ? options.darkTheme : "dark";

          initialize({
            startOnLoad: true,
            theme: dark ? darkTheme : lightTheme
          });

          nextTick(() => {
            init(undefined, "#" + props.id);
          });
        };

        if (options.darkSelector && options.darkClass) {
          const element = document.querySelector(
            options.darkSelector
          ) as HTMLElement;
          initMermaid(element.classList.contains(options.darkClass));

          // watching theme change
          observer = new MutationObserver(() => {
            // re render mermaid graphs after theme changing
            // https://github.com/mermaid-js/mermaid/issues/311#issuecomment-332557344
            (mermaidElement.value as HTMLElement).removeAttribute(
              "data-processed"
            );
            (mermaidElement.value as HTMLElement).textContent = content.value;
            initMermaid(
              element.classList.contains(options.darkClass as string)
            );
          });

          observer.observe(element, {
            attributeFilter: ["class"],
            attributes: true
          });
        } else {
          initMermaid(false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (options.darkSelector && options.darkClass) {
        observer.disconnect();
      }
    });

    return () =>
      h(
        "div",
        {
          ref: mermaidElement,
          class: "vuepress-mermaid",
          id: props.id
        },
        content.value
      );
  }
});
