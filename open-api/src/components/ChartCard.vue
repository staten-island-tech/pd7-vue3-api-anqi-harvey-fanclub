<template>
  <RouterLink to="/doughnut">Squirrel - Doughnut Chart</RouterLink>
  <br />
  <RouterLink to="/bar">Squirrel - Bar Chart</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'ChartCard',
  props: {},
  components: { RouterLink }
}
</script>

<style scoped></style>
