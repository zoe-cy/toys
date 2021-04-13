<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created () {
    this.$route.push({ name: 'index' })
  }
}
</script>
<style scoped>
</style>
