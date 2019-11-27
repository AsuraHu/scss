<template>
  <div class="header">
    <div class="header-left">
      <i class="el-icon-arrow-left" style="font-size: 24px;"></i>
    </div>
    <div class="header-input">
      <i class="el-icon-search" style="font-size: 18px;"></i>
      <span>输入城市游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="right-text">{{this.city}}</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      city: 'city'
    })
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    background-color: $bgcolor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .el-icon-arrow-left
        display: block
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .right-text
        display: inline-block
      .el-icon-caret-bottom
        display: inline-block
        margin-left: -.08rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
      background-color: #fff
      border-radius: .1rem
</style>
