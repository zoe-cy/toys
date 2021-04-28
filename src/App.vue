<template>
  <div id="app">
    <t-login></t-login>
    <t-header></t-header>
    <router-view></router-view>
    <t-footer></t-footer>
  </div>
</template>
<script>
import tLogin from './components/login'
import tHeader from './components/header'
import tFooter from './components/footer'
export default {
  components: {
    tLogin,
    tHeader,
    tFooter
  },
  created () {
    // this.$router.push({ name: 'index' })
  }
}
</script>
<style scoped>
</style>
