<template>
  <div class="card">
    <h2>{{ hectare }}</h2>
    <h3>{{ unique_squirrel_id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  hectare: String,
  unique_squirrel_id: Number,
});
</script>

<style lang="scss" scoped></style>
