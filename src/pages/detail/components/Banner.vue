<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1604/7e/7ebf319b2473714390.img.jpg_600x330_f3b60ffb.jpg">
      <div class="banner-info">
        <div class="banner-tittle">
          丹景山旅游景区(AA景区)
        </div>
        <div class="banner-number">
          <i class="el-icon-picture"></i>
          5
        </div>
      </div>
    </div>
    <banner-gallery
      :imgs="imgs"
      v-show="isShow"
      @close="clickGalleryHide"
    ></banner-gallery>
  </div>
</template>

<script>
import BannerGallery from 'public/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    BannerGallery
  },
  data () {
    return {
      isShow: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1604/7e/7ebf319b2473714390.img.jpg_r_800x800_8b93819b.jpg', 'http://img1.qunarzz.com/sight/p0/1604/73/737118f14d5adb4990.img.jpg_r_800x800_80ad400d.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.isShow = true
    },
    clickGalleryHide () {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      width: 100%
      display: flex
      justify-content: space-between
      position: absolute
      left: 0
      bottom: 0
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-tittle
        font-size: .32rem
        padding: 0 .2rem
        height: .4rem
        line-height: .4rem
      .banner-number
        margin-right: .2rem
        padding: 0 .4rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background-color: rgba(0, 0, 0, .8)
</style>
