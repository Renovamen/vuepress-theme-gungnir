<template>
  <div class="vuepress-chartjs">
    <canvas :id="id" ref="chartjs"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

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
    const data = JSON.parse(this.code);
    const ctx = this.$refs.chartjs.getContext("2d");
    new Chart(ctx, data);
  }
};
</script>

<style lang="stylus">
.vuepress-chartjs
  margin 30px 0
</style>
