<template>
  <div class="chart">
    <Doughnut v-if="loaded" :data="chartData" :options="chartOptions" />
    <button @click="getColor()">See By Color</button>
    <button @click="getAge()">See By Age</button>
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
      squirrelColor: false,
      squirrelAge: false,
      chartData: {
        labels: [],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: []
      }
    }
  },
  methods: {
    async getColor() {
      this.squirrelColor = true
      this.squirrelAge = false
      this.loaded = false
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
        const squirrelData = await res.json()
        const gray = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Gray')

        const cinnamon = squirrelData.filter(
          (squirrel) => squirrel.primary_fur_color === 'Cinnamon'
        )

        const black = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Black')
        this.chartData.datasets[0].data = [gray.length, cinnamon.length, black.length]

        this.chartData.labels = ['Gray', 'Cinnamon', 'Black']

        this.chartOptions.backgroundColor = ['#7B888E', '#9c4722', '#3b444b']

        this.loaded = true
      } catch (e) {
        console.error(e)
      }
      console.log(this.chartData)
    },
    async getAge() {
      this.squirrelColor = false
      this.squirrelAge = true
      this.loaded = false
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
        const squirrelData = await res.json()
        const adult = squirrelData.filter((squirrel) => squirrel.age === 'Adult')

        const juvenile = squirrelData.filter(
          (squirrel) => squirrel.primary_fur_color === 'Juvenile'
        )
        this.chartData.datasets[0].data = [adult.length, juvenile.length]

        this.loaded = true

        this.chartData.labels = ['Adult', 'Juvenile']

        this.chartOptions.backgroundColor = ['#b20019', '#272a2b']
      } catch (e) {
        console.error(e)
      }
      console.log(this.chartData)
    }
  }
}
</script>
