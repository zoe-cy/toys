<template>
  <div class="index">
    <t-header></t-header>
    <div class="main">
      <div class="box clearfix">
      <!-- banner z-index2 tabs z-index99-->
      <banners :bannerList="bannerList"></banners>
      <t-tabs></t-tabs>
    </div>
    </div>
    <t-goodsbox></t-goodsbox>
    <t-footer></t-footer>
  </div>
</template>
<script>
import tHeader from '../components/header'
import tFooter from '../components/footer'
import banners from '../components/index/banners'
import tTabs from '../components/index/tabs'
import tGoodsbox from '../components/goodsBox'
export default {
  components: {
    tHeader,
    tFooter,
    banners,
    tGoodsbox,
    tTabs
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped>
.index {
}
.el-header {
  padding: 0;
  height: 600px !important;
  background-color: rgb(253, 253, 253);
}
.main {
  width: 100%;
  background-color: rgb(253, 253, 253);
}
.box {
  height: 500px;
  width: 1100px;
  position: relative;
  margin: 0 auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-align: center;
}
</style>
