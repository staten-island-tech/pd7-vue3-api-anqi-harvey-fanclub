<template>
  <div class="chart">
    <DoughnutChart v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'
export default {
  name: 'DoughnutView',
  components: {
    DoughnutChart
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {}
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      const squirrelData = res.json()
      console.log(squirrelData)
      let labels = ['Gray', 'Cinnamon', 'Black']
    } catch {}
  }
}
</script>

<script setup></script>

<style lang="scss" scoped></style>
