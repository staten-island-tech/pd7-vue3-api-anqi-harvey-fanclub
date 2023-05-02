<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
  <Bar v-if="showGraphs" :data="data2" :options="options" />
  <button @click="createGraph">Create Graph</button>
  <select type="input" id="input" >
    <option>Age</option>
    <option>Primary Fur Color</option>
  </select>
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
    Bar, Bar
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: [ "Black", "Gray", "Cinnamon"], 
     
        datasets: [{ data: [] }],
      },
      options: {
        responsive: true,
        backgroundColor: ["#000000", "#808080", "#D2691E"],
      },
      showGraphs: false,
      data2: {
        labels: [ "Adult", "Juvenile"], 
     
        datasets: [{ data: [] }],
      },
     

   
    };
    
  },
  methods: {
    async createGraph() {
      let res = await fetch(
        "https://data.cityofnewyork.us/resource/vfnx-vebw.json"
      );
      let dataYep = await res.json();
      console.log(dataYep);
      let inputxd = document.querySelector("#input").value;

      console.log(inputxd);
      if (inputxd === "Primary Fur Color") {
        console.log("hi");
        this.showGraph = true
        this.showGraphs = false

        const black = dataYep.filter(
          (squirrelYes) => squirrelYes.primary_fur_color === "Black"
        );
        this.data.datasets[0].data.push(black.length);

        const gray = dataYep.filter(
          (squirrelYes) => squirrelYes.primary_fur_color === "Gray"
        );
        this.data.datasets[0].data.push(gray.length);

        const cinnamon = dataYep.filter(
          (squirrelYes) => squirrelYes.primary_fur_color === "Cinnamon"
        );
        this.data.datasets[0].data.push(cinnamon.length);
      } else if (inputxd === "Age") {
        console.log("bye");
        this.showGraph = false
        this.showGraphs = true
        const Adult = dataYep.filter(
          (squirrelYes) => squirrelYes.age === "Adult"
        );
        this.data2.datasets[0].data.push(Adult.length);
        const Juvenile = dataYep.filter(
          (squirrelYes) => squirrelYes.age === "Juvenile"
        );
        this.data2.datasets[0].data.push(Juvenile.length);
      }
    },
  },
};
</script>
