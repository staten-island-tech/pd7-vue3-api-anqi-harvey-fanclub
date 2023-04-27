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
      squirrelData.forEach((squirrel) => this.chartData.data.push(squirrel.primary_fur_color))
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>
