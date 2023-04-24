<template>
  <div>
    <Doughnut id="doughnut-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
const squirrels = ref('')
async function getSquirrels() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
  console.log(res)
  let data = await res.json()
  console.log(data)
  squirrels.value = data
}
onMounted(() => {
  getSquirrels()
})
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  DoughnutElement,
  CategoryScale,-
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, DoughnutElement, CategoryScale, LinearScale)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: []
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
