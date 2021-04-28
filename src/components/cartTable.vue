<template>
  <table class="cart" width="100%">
        <tr>
          <th width="100">
            全选<span @click.capture="selAllGoods($store.getters.getSelAllGoods)" :class="['iconfont','icon-fangduigou','all-sel',$store.getters.getSelAllGoods?'sel':'']"></span>
          </th>
          <th width="120"></th>
          <th width="220">商品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in $store.state.car" :key="item.id" class="line">
          <td>
            <span :class="['iconfont','icon-fangduigou',item.selected?'sel':'']" @click="selGoods(item.id,item.selected)"></span>
          </td>
          <td>
            <img :src="item.pic_url" />
          </td>
          <td class="goods-title" @click="toGoodsDetail(item.id)">{{item.title}}</td>
          <td>{{item.price}}元</td>
          <td>
            <el-input-number v-model="item.count" @change="handleChange" :min="1" :max="item.goods_num" label="数量" size="small"></el-input-number>
          </td>
          <td>{{$store.getters.getPrice(item.id)}}元</td>
          <td>
            <el-button type="primary" icon="el-icon-delete" size="mini" @click="delGoods(item.id)"></el-button>
          </td>
        </tr>
  </table>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    },
    // 全选按钮
    selAllGoods (flag) {
      this.$store.commit('selAllGoods', flag)
      this.$store.getters.getSelAllGoods = !flag
    },
    // 单选按钮
    selGoods (id, sel) {
      this.$store.commit('selGoods', { id, selected: sel })
    },
    // 删除按钮
    delGoods (id) {
      this.$store.commit('delGoods', id)
    }
  }
}
</script>
<style scoped>
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
.goods-title:hover {
  color: var(--hover-color);
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
</style>
