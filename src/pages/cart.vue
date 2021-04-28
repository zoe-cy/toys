<template>
  <div class="cars line">
    <div class="box">
      <div class="header">
        <span>购物车</span>
        <span>></span>
        <span class="right">
          <span @click="toGoodsList('全部商品')">
            继续购物
          </span> >
        </span>
      </div>
      <t-table></t-table>
      <div class="section">
        <span class="left">
          共<span class="active">{{$store.getters.getAllCount}}</span>件商品，
          已选择<span class="active">{{$store.getters.getAllSelCount}}</span>件
        </span>
        <span class="right">
          合计：<span class="active">{{$store.getters.getAllPrice}}元</span>
          <el-button type="warning" plain class="btn">
            去结算
          </el-button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import tTable from '../components/cartTable'
export default {
  components: {
    tTable
  },
  data () {
    return {
    }
  },
  methods: {
    toGoodsList (id) {
      this.$router.push({ name: 'goodsList', params: { category: id } })
    }
  }
}
</script>
<style scoped>
.cars {
  min-width: 1100px;
  min-height: 600px;
  --swiper-theme-color: var(--hover-color);
}
.box {
  width: 1100px;
  margin: 0 auto;
}
.header {
  margin: 0 10px;
  line-height: 80px;
}
.header>span {
  margin: 0 5px;
}
.header .right span {
  margin-right: 10px;
}
.header .right:hover {
  color: var(--hover-color);
}
.cart {
  min-width: 1100px;
  background: var(--background-color);
  line-height: 70px;
}
.cart .line {
  text-align: center;
}
.cart .line td:nth-child(3) {
  text-align: left;
}
.all-sel {
  margin-left: 10px;
  font-weight: normal;
  size: 20px!important;
}
.iconfont {
  size: 20px!important;
}
.sel {
  background-color: var(--hover-color);
  color: var(--background-color);
}
.goods-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/deep/.el-input.is-active .el-input__inner,
/deep/.el-input__inner:focus,
/deep/.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
/deep/.el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled){
  border-color: var(--hover-color);
}
/deep/.el-input-number__decrease:hover,
/deep/.el-input-number__increase:hover {
  color: var(--hover-color);
}
/deep/.el-button--primary:focus,
/deep/.el-button--primary:hover {
  border-color: var(--hover-color);
  background-color: var(--hover-color);
}
/deep/.el-button--primary {
  background-color: var(--background-color);
  color: rgb(95, 95, 95);
  border-color: rgb(214, 212, 212);
}
.cart img {
  width: 100px;
  height: 50px;
  vertical-align: center;
}
.section {
  height: 60px;
  line-height: 60px;
  width: 1100px;
  margin: 40px 0;
  padding: 0 20px;
  background: var(--background-color);
}
.active {
  padding: 0 12px;
}
.btn {
  margin-left: 40px;
  height: 100%;
}
</style>
