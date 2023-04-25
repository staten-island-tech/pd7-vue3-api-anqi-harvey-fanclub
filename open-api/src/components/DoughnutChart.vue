<template>
  <div>
    <Doughnut id="doughnut-id" v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

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
      let squirrelData = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
      const squirrels = await squirrelData.json()
      console.log(squirrels)
      this.chartData = squirrels
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped></style>
