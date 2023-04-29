<template>
  <Bar   :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {

      data: {
        labels: ['Black', 'Gray', 'Cinnamon'],
        datasets: [{ data: [] }]
      },
      options: {
        responsive: true
      }
    }
  },
  async mounted(){
    let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
   let dataYep = await res.json()
   const black = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'Black')
this.data.datasets[0].data.push(black.length)
const gray = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'gray')
this.data.datasets[0].data.push(gray.length)
   const cinnamon = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'cinnamon')
   this.data.datasets[0].data.push(cinnamon.length)

  },
}
</script>