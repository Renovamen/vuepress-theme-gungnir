<template>
  <div class="vuepress-chartjs">
    <canvas :id="id" ref="chartjs" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import JSONfn from "json-fn";

Chart.defaults.maintainAspectRatio = false;

export default {
  name: "Chart",
  props: {
    id: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  mounted() {
    const data = JSONfn.parse(this.code);
    const ctx = this.$refs.chartjs.getContext("2d");
    new Chart(ctx, data);
  }
};
</script>

<style lang="stylus">
.vuepress-chartjs
  margin 30px 0
</style>
