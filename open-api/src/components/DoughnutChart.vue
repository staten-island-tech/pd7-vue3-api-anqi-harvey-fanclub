<template>
  <div>
    <Doughnut id="DoughnutChart" v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    type: Object,
    required: true,
    default: () => ({
      responsive: true
    }),
    chartData: {
      type: Object,
      required: true
    }
  }
}
</script>
