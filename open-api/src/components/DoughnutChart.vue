<template>
  <div class="chart">
    <RouterLink to="/">Back to Main</RouterLink>
    <br />
    <RouterLink to="/bar">To Bar</RouterLink>
    <h2>Squirrel Primary Colors - Doughnut Chart</h2>
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
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#7B888E', '#9c4722', '#282d30']
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      const squirrelData = await res.json()
      const gray = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Gray')
      this.chartData.datasets[0].data.push(gray.length)

      const cinnamon = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Cinnamon')
      this.chartData.datasets[0].data.push(cinnamon.length)

      const black = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Black')
      this.chartData.datasets[0].data.push(black.length)

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>

<style scoped>
h2 {
  color: #7a6e63;
  font-size: 2rem;
  text-align: center;
}
h2:hover {
  text-decoration: underline;
  transition: 1s;
  color: #7a6e63;
  font-size: 2.5rem;
}
</style>
