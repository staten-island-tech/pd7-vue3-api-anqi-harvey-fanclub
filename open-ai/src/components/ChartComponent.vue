<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
  <button @click="showGraph = true">Click me to show the message</button>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ["Black", "Gray", "Cinnamon"],
        datasets: [{ data: [] }],

      },
      options: {
        responsive: true,
        backgroundColor: ['#000000','#808080', '#D2691E']
      },
    };
  },
  async mounted() {
    let res = await fetch(
      "https://data.cityofnewyork.us/resource/vfnx-vebw.json"
    );
    let dataYep = await res.json();
    console.log(dataYep);
    const black = dataYep.filter(
      (squirrelYes) => squirrelYes.primary_fur_color === "Black"
    );
    this.data.datasets[0].data.push(black.length);
console.log(black.length)
    const gray = dataYep.filter(
      (squirrelYes) => squirrelYes.primary_fur_color === "Gray"
    );
    this.data.datasets[0].data.push(gray.length);
    console.log(dataYep)
    console.log(gray.length)
    console.log(dataYep)

    const cinnamon = dataYep.filter(
      (squirrelYes) => squirrelYes.primary_fur_color === "Cinnamon"
    );
    this.data.datasets[0].data.push(cinnamon.length);
    console.log(cinnamon.length)
  },
};
</script>
