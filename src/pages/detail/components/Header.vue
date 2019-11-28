<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="absShow">
      <i class="el-icon-arrow-left" style="font-size: 24px;"></i>
    </router-link>
    <div class="header-fixed" v-show="!absShow" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="header-back">
          <i class="el-icon-arrow-left" style="font-size: 24px;"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      absShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.absShow = false
      } else {
        this.absShow = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background-color: rgba(0, 0, 0, .8)
    color: #fff
  .header-fixed
    z-index: 9
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgcolor
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      .el-icon-arrow-left
        display: block
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
</style>
