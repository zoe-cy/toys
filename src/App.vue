<template>
  <div id="app">
    <t-header></t-header>
    <router-view></router-view>
    <t-footer></t-footer>
  </div>
</template>
<script>
import tHeader from './components/header'
import tFooter from './components/footer'
export default {
  components: {
    tHeader,
    tFooter
  },
  created () {
    this.$route.push({ name: 'index' })
  }
}
</script>
<style scoped>
</style>
