<template>
  <div  class="card">
    <router-link :to="squirrelPath">{{ squirrel.hectare }}</router-link>
    <h3>{{ unique_squirrel_id }}</h3>
  </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  squirrel: Object,
  unique_squirrel_id: Number,
});
const squirrelPath = computed(()=>{
  return `/squirrelPath/${props.squirrel.hectare}`
})
</script>

<style scoped>
.card {
  background-color: white;
  border: 20px solid;
  border-radius: 6%;
  width: 10rem;
  height: 10rem;
  margin: 2%;
  font-size: 1rem;
}
</style>
