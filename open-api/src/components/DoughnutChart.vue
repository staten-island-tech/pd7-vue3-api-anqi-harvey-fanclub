<template>
  <div>
    <Doughnut id="doughnut-id" :options="options" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted() {
    this.loaded = false
    try {
      const { squirrelData } = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
      console.log('got')
      this.chartdata = squirrelData
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped></style>
