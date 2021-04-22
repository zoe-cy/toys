<template>
  <div class="cars line">
    <div class="box">
      <div class="header">
        <span>购物车</span>
        <span>></span>
        <span class="right">></span>
        <span class="right" @click="toGoodsList('全部商品')">
          继续购物
        </span>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="120"> </el-table-column>
        <el-table-column prop="address" label="单价" show-overflow-tooltip>
        <!-- <el-table-column prop="address" label="数量" show-overflow-tooltip>
        <el-table-column prop="address" label="小计" show-overflow-tooltip>
        <el-table-column prop="address" label="操作" show-overflow-tooltip> -->
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
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
.el-checkbox__inner:hover {
  border-color: var(--hover-color);
}
</style>
