<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, i) in kinds" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="search">
      <input class="ipt" type="search" placeholder="滚珠" autocomplete="true" />
      <i class="btn iconfont icon-sousuo"></i>
    </div>
    <div class="cars">
      <i class="btn2 iconfont icon-icone6002_"></i>
      <span>购物车（{{ num }}）</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      kinds: [
        '婴儿系列',
        '益智系列',
        '拼图系列',
        '轨道系列'
      ]
    }
  },
  methods: {}
}
</script>
<style scoped>
.header {
  text-align: center;
  margin: 0 auto;
  width: 1100px;
  line-height: 100px;
  background-color: rgb(253, 253, 253);
}
.logo {
  float: left;
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
}
.logo img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90px;
}
.nav {
  float: left;
  width: 600px;
  height: 100px;
  padding: 0 49px;
}
.nav ul {
  display: flex;
}
.nav ul li {
  flex: 1;
  font-size: 18px;
}
.nav ul li:hover {
  color: rgb(241, 180, 24);
}
.search {
  float: left;
  height: 100px;
  width: 200px;
  display: flex;
  align-items: center;
}
.search .ipt {
  height: 40px;
  width: 160px;
  border: 1px solid rgb(190, 190, 190);
  padding-left: 10px;
}
.search .btn {
  border: 1px solid rgb(190, 190, 190);
  border-left: none;
  height: 40px;
  width: 39px;
  position: relative;
}
.icon-sousuo::before {
  position: absolute;
  left: 10px;
  bottom: -32px;
  font-size: 20px;
}
.search .btn:hover {
  border-color: rgb(241, 180, 24);
  background-color: rgb(241, 180, 24);
  color: rgb(253, 253, 253);
}
.cars {
  float: left;
  width: 160px;
  height: 100px;
  text-align: right;
}
.cars i {
  font-size: 28px;
}
.cars span {
  padding-left: 10px;
}
</style>
