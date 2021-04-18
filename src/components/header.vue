<template>
  <div class="header">
    <div class="box">
      <div class="logo">
        <img src="../assets/logo.png" @click="toIndex"/>
      </div>
      <div class="nav">
        <ul>
          <li
            v-for="item in series"
            :key="item.series_id"
            @click="toGoodsList(item.series_id)"
          >
            {{ item.series }}
          </li>
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
      <div class="cars" @click="toCars">
        <i class="btn2 iconfont icon-icone6002_"></i>
        <span>购物车（{{ num }}）</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      msg: '',
      series: [
        {
          series_id: 1,
          series: '婴儿系列'
        },
        {
          series_id: 2,
          series: '益智系列'
        }
      ]
    }
  },
  methods: {
    toIndex () {
      this.$router.push({ name: 'index' })
    },
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category_id: id } })
    },
    toCars () {
      this.$router.push({ name: 'cars' })
    }
  },
  props: ['tip']
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
