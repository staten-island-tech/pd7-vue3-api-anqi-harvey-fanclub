<template>
  <div></div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
