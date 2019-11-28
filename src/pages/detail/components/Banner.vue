<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-tittle">
          {{sightName}}
        </div>
        <div class="banner-number">
          <i class="el-icon-picture"></i>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <banner-gallery
      :imgs="gallaryImgs"
      v-show="isShow"
      @close="clickGalleryHide"
    ></banner-gallery>
  </div>
</template>

<script>
import BannerGallery from 'public/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    BannerGallery
  },
  data () {
    return {
      isShow: false
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
