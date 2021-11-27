import { defineComponent, h, onMounted, ref } from "vue";
import "./style.css";

export default defineComponent({
  name: "Mermaid",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const mermaidElement = ref<HTMLElement | null>(null);
    const content = ref("");

    onMounted(() => {
      content.value = mermaidElement.value?.dataset.code || "";

      import("mermaid/dist/mermaid.min").then((mermaid) => {
        mermaid.initialize({
          startOnLoad: true
        });
        mermaid.init(undefined, "#" + props.id);
      });
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
