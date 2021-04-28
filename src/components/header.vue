<template>
  <div class="header">
    <div class="box">
      <div class="logo">
        <img src="../assets/logo.png" @click="toIndex"/>
      </div>
      <div class="nav">
        <ul>
          <li @click="toIndex">Home</li>
          <li @click="toGoodsList('全部商品')">全部商品</li>
          <li @click="toIntro">关于我们</li>
        </ul>
      </div>
      <div class="search">
        <input
          class="ipt"
          type="search"
          placeholder="滚珠"
          autocomplete="true"
          v-model="msg"
        />
        <i class="btn iconfont icon-sousuo" @click="toGoodsList(msg)"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    toIndex () {
      this.$router.push({ name: 'index' })
    },
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category: id } })
    },
    toIntro () {
      this.$router.push({ name: 'intro' })
    }
  }
}
</script>
<style scoped>
.header {
  text-align: center;
  line-height: 100px;
  min-width: 1100px;
  background-color: var(--background-color);
}
.box {
  width: 1100px;
  height: 100px;
  margin: 0 auto;
}
.logo {
  float: left;
  width: 140px;
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
  width: 710px;
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
  color: var(--hover-color);
}
.search {
  float: left;
  height: 100px;
  width: 250px;
  display: flex;
  align-items: center;
}
.search .ipt {
  height: 40px;
  width: 210px;
  border: 1px solid rgb(190, 190, 190);
  border-right: none;
  padding-left: 10px;
}
.search .btn {
  border: 1px solid rgb(190, 190, 190);
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
  border-color: var(--hover-color);
  background-color: var(--hover-color);
  color: var(--background-color);
}
</style>
