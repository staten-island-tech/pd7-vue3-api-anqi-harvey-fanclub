<template>
<RouterLink to="/doughnut" id="link">Squirrel Primary Colors - Doughnut Chart</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "DoughnutCard",
    props: {},
    components: { RouterLink }
}
</script>

<style scoped>
.link {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
