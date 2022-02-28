/* eslint-disable no-new */
import Chart from "chart.js/auto";
import { defineComponent, h, onMounted, ref } from "vue";
import JSONfn from "./json-fn";
import "./style.css";

Chart.defaults.maintainAspectRatio = false;

export default defineComponent({
  name: "Chart",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const chartCanvasElement = ref<HTMLCanvasElement | null>(null);
    const chartElement = ref<HTMLElement | null>(null);

    onMounted(() => {
      const content = chartElement.value?.dataset.code || "";
      const data = JSONfn.parse(content);

      const ctx = chartCanvasElement.value?.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      new Chart(ctx, data);
    });

    return () =>
      h(
        "div",
        {
          class: "vuepress-chartjs",
          ref: chartElement
        },
        [
          h("canvas", {
            ref: chartCanvasElement,
            id: props.id,
            height: 400
          })
        ]
      );
  }
});
