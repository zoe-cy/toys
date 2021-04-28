<template>
  <div class="header">
    <div class="box">
      <ul v-if="!isLogin">
        <li class="login"><div>登陆</div></li>
        <li>注册</li>
      </ul>
      <ul v-else>
        <li>会员:<span>name</span></li>
        <li>退出登陆</li>
      </ul>
      <div class="cars" @click="toCart">
        <i class="btn2 iconfont icon-icone6002_"></i>
        <span>购物车<span class="count">({{$store.getters.getAllCount > 100 ? '100+' : $store.getters.getAllCount}})</span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    toCart () {
      this.$router.push({ name: 'cart' })
    }
  }
}
</script>
<style scoped>
.header {
  text-align: center;
  line-height: 50px;
  min-width: 1100px;
  background-color: rgb(56, 55, 55);
}
.box {
  width: 1100px;
  height: 50px;
  margin: 0 auto;
}
ul {
  float: left;
}
ul li {
  float: left;
  width: 100px;
  color: rgb(130, 130, 130);
}
li:hover {
  color: var(--background-color);
}
.login div{
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
  border-right: 1px solid var(--color);
}
.cars {
  float: right;
  width: 150px;
  height: 50px;
  text-align: right;
  color: var(--background-color);
  background: var(--hover-color);
  box-shadow: 0 0 2px 0 rgb(241, 212, 79);
}
.cars:hover {
  background: var(--background-color);
  color: var(--hover-color);
}
.cars i {
  font-size: 28px;
}
.cars>span {
  padding-left: 10px;
}
.count {
  text-align: center;
  display: inline-block;
  width: 50px;
}
</style>
