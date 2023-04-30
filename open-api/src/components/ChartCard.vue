<template>
  <RouterLink to="/doughnut">Squirrel Primary Colors - Doughnut Chart</RouterLink>
  <br />
  <RouterLink to="/bar">Squirrel Primary Colors - Bar Chart</RouterLink>
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
