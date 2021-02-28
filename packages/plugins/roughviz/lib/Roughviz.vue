<template>
  <div class="vuepress-roughviz-container">
    <div :id="id" class="vuepress-roughviz"></div>
  </div>
</template>

<script>
import {
  Bar,
  BarH,
  Donut,
  Line,
  Pie,
  Scatter,
  StackedBar
} from "rough-viz/dist/roughviz.min.js";

export default {
  name: "Roughviz",
  props: {
    id: {
      type: String,
      required: true
    },
    chart: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  mounted() {
    let data = JSON.parse(this.code);
    data.element = `#${this.id}`;

    switch (this.chart) {
      case "bar":
        new Bar(data);
        break;
      case "barh":
        new BarH(data);
        break;
      case "donut":
        new Donut(data);
        break;
      case "line":
        new Line(data);
        break;
      case "pie":
        new Pie(data);
        break;
      case "scatter":
        new Scatter(data);
        break;
      case "stackedbar":
        new StackedBar(data);
        break;
    }
  }
};
</script>

<style lang="stylus">
.vuepress-roughviz-container
  margin 30px 0
  text-align center
  .vuepress-roughviz
    overflow scroll
    display inline-block
</style>
