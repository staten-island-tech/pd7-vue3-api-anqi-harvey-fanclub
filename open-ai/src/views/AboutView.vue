<template>
  <div>
    <p v-if="showMessage">This message will show if showMessage is true</p>
    <button @click="showMessage = true">Click me to show the message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false
    }
  }
}
</script>