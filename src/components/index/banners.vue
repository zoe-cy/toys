<template>
  <div class="banners">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="item in bannerList"
        :key="item.id"
        :style="{ backgroundImage: 'url('+item.picUrl+')'}"
        @click="toGoodsDetail(item.id)"
      >
       <!-- <img :src="item.picUrl" alt="this is a produnction picture" /> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'banners',
  // props: ['bannerList'],
  data () {
    return {
      bannerList: [{ id: 1, title: 'goods1', picUrl: require('../../assets/news.png') }, { id: 2, title: 'goods2', picUrl: require('../../assets/teas.png') }],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        // loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false
        // },
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    toGoodsDetail (id) {
      this.$router.push({ name: 'goodsDetail', params: { id } })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>
.banners {
  width: 100%;
  height: 500px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
  --swiper-theme-color: rgb(241, 180, 24);
}
.swiper-slide {
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
}
.swiper-button-prev {
  position: absolute;
  left: 210px;
}
</style>
