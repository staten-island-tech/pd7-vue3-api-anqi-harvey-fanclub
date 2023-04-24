<template>
  <div>
 <squirrelCard v-for="(monster, index) in squirrel" :key="monster.hectare" :unique_squirrel_id="monster.unique_squirrel_id" :squirrel="monster">
 </squirrelCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import squirrelCard from "../components/squirrelCard.vue"
const squirrel= ref('') 
async function getSquirrel() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  squirrel.value = data 
   console.log(squirrel.value )
}
onMounted(()=>{
  getSquirrel()
  
})


</script>

<style lang="scss" scoped>

</style>