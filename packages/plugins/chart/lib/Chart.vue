<template>
  <div class="vuepress-chartjs">
    <canvas ref="chartjs"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'chart',
  props: {
    code: {
      type: String,
      required: true
    }
  },
  mounted () {
    const data = JSON.parse(this.code);
    const ctx = this.$refs.chartjs.getContext('2d');
    new Chart(ctx, data);
  }
}
</script>

<style lang="stylus">
.vuepress-chartjs
  margin 30px 0
</style>
