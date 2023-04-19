<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const squirrel = ref(``)
async function getSquirrels() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
  let data = await res.json()
}
</script>

<style lang="scss" scoped></style>
