
<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'Bar',
  components: {
    Bar
  },
  data() {
    return {
        loaded: false,
      data: {
        labels: ['Black', 'Gray', 'Cinnamon'],
        datasets: [{ data: [] }],
      },
      options: {
        responsive: true
      }
    }
  },
  async mounted() {
    try{

        let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
   let dataYep = await res.json()

   const black = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'Black')
this.data.datasets[0].data.push(black.length)
   const gray = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'gray')
   this.data.datasets[0].data.push(gray.length)
   const cinnamon = dataYep.filter((squirrelYes )=> squirrelYes.primary_fur_color === 'cinnamon')
   this.data.datasets[0].data.push(cinnamon.length)
this.loaded = true

    }catch (error){
        console.log(error)
    }
  
}

}
</script>
<template><div>
    <h1></h1>
    <Bar v-if="loaded" :data="data" :options="options" />
</div>

  </template>
  