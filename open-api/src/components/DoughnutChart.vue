<template>
  <div class="chart">
    <Pie v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Gray', 'Cinnamon', 'Black'],
        datasets: [],
        backgroundColor: ['#7B888E', '#9c4722', '#3b444b']
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      const squirrelData = await res.json()
      const gray = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Gray')
      this.chartData.datasets.push(gray.length)

      const cinnamon = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Cinnamon')
      this.chartData.datasets.push(cinnamon.length)

      const black = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Black')
      this.chartData.datasets.push(black.length)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>
