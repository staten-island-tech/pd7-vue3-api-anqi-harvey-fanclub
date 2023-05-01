<template>
  <Bar v-if="showGraph" :data="data" :options="options" />
  <button @click="showGraph = true">Click me to show the message</button>
  <button @click="createGraph">Jaja</button>
  <select type="input" id="input">
    <option>Age</option>
    <option>Fur Color</option>
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
        backgroundColor: ["#000000", "#808080", "#D2691E"],
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
      if (inputxd === "Fur Color") {
        console.log("hi");
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
        const Adult = dataYep.filter(
          (squirrelYes) => squirrelYes.age === "Adult"
        );
        this.data.datasets[0].data.push(Adult.length);
        const Juvenile = dataYep.filter(
          (squirrelYes) => squirrelYes.age === "Juvenile"
        );
        this.data.datasets[0].data.push(Juvenile.length);
      }
    },
  },
};
</script>
