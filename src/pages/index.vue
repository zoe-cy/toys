<template>
  <div class="index">
    <el-container>
      <el-header>
        <t-header></t-header>
      </el-header>
      <!-- main -->
      <el-container class="main">
        <!-- banner -->
        <el-container class="container clearfix">
        <!-- banner z-index2-->
        <el-main class="ban">
          <banners :bannerList="bannerList"></banners>
        </el-main>
        <!-- 导航栏 z-index3-->
        <el-main class="tabs">
          <t-tab></t-tab>
        </el-main>
        </el-container>
        <!-- hot -->
        <el-main class="hot">
          <t-hot></t-hot>
        </el-main>
      </el-container>
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
    tTab,
    tFooter,
    tHot
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
  width: 100%!important;
}
.el-header {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  height: 100px !important;
  line-height: 100px;
}
.main {
  height: 800px;
  position: relative;
}
.container {
  width: 1100px;
  height: 500px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  clear: both!important;
}
.container.ban{
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 500px;
}
.container .tabs {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 500px;
  height: 500px;
}
.el-main {
  text-align: center;
  padding: 0;
}
.hot {
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%!important;
  height: 300px;
  background-color: rgba(212, 212, 212, 0.1);
}
.el-footer {
  text-align: center;
  padding: 0;
  line-height: 200px;
}
</style>
