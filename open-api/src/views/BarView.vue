<template>
    <div class="container">
   <App></App>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import App from "../components/ChartComponent.vue"
  </script>
  
  <style scoped>
  .container {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    margin: 2%;
  }
  </style>