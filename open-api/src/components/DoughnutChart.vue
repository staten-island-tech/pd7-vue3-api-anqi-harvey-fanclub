<template>
  <div class="chart">
    <Doughnut v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Gray', 'Cinnamon', 'Black'],
        data: [],
        backgroundColor: ['#7B888E', '#9c4722', '#3b444b']
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      const squirrelData = await res.json()
      const gray = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Gray')
      this.chartData.data.push(gray.length)
      const cinnamon = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Cinnamon')
      this.chartData.data.push(cinnamon.length)
      const black = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Black')
      this.chartData.data.push(black.length)
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData.data)
  }
}
</script>
