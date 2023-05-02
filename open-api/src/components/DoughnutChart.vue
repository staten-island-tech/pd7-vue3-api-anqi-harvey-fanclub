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
      color: false,
      age: false,
      chartData: {
        labels: [],
        datasets: [{ data: [] }],
        backgroundColor: []
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  computed: {
    async getColor() {
      this.chartData.labels.length = 0
      this.chartData.datasets[0].data.length = 0
      this.chartData.backgroundColor.length = 0
      this.color = true
      this.age = false
      this.loaded = false
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
        const squirrelData = await res.json()
        const gray = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Gray')
        this.chartData.datasets[0].data.push(gray.length)

        const cinnamon = squirrelData.filter(
          (squirrel) => squirrel.primary_fur_color === 'Cinnamon'
        )
        this.chartData.datasets[0].data.push(cinnamon.length)

        const black = squirrelData.filter((squirrel) => squirrel.primary_fur_color === 'Black')
        this.chartData.datasets[0].data.push(black.length)

        this.chartData.labels.push('Gray', 'Cinnamon', 'Black')

        this.chartData.backgroundColor.push('#7B888E', '#9c4722', '#3b444b')

        this.loaded = true
        console.log('color')
      } catch (e) {
        console.error(e)
      }
      console.log(this.chartData)
    },
    async getAge() {
      this.chartData.labels.length = 0
      this.chartData.datasets[0].data.length = 0
      this.chartData.backgroundColor.length = 0
      this.color = false
      this.age = true
      this.loaded = false
      try {
        const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
        const squirrelData = await res.json()
        const adult = squirrelData.filter((squirrel) => squirrel.age === 'Adult')
        this.chartData.datasets[0].data.push(adult.length)

        const juvenile = squirrelData.filter(
          (squirrel) => squirrel.primary_fur_color === 'Juvenile'
        )
        this.chartData.datasets[0].data.push(juvenile.length)
        this.loaded = true

        this.chartData.labels.push('Adult', 'Juvenile')

        this.chartData.backgroundColor.push('#b20019', '#272a2b')
      } catch (e) {
        console.error(e)
      }
      console.log(this.chartData)
    }
  }
}
</script>
