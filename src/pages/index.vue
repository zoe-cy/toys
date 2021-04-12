<template>
  <div class="index">
    <el-container>
      <el-header>
        <t-header></t-header>
        <div class="box clearfix">
           <!-- banner z-index2 tabs z-index99-->
          <banners :bannerList="bannerList"></banners>
          <t-tab></t-tab>
        </div>
      </el-header>
      <el-main class="main">
        <t-hot></t-hot>
      </el-main>
      <el-footer>
        <t-footer></t-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import tHeader from '../components/header'
import banners from '../components/index/banners'
import tTab from '../components/index/tabs'
import tFooter from '../components/footer'
import tHot from '../components/index/hot'
export default {
  components: {
    banners,
    tHeader,
    tFooter,
    tHot,
    tTab
  },
  data () {
    return {
      num: 0,
      bannerList: [{ title: 'goods1', picUrl: require('../assets/news.png') }, { title: 'goods2', picUrl: require('../assets/teas.png') }]
    }
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
}
.el-main {
  text-align: center;
  padding: 0;
  margin: 0 auto;
}
.main {
  width: 1100px!important;
}
.el-footer {
  padding: 0;
  min-width: 1100px;
}
</style>
