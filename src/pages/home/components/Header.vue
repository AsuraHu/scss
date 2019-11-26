<template>
  <div class="header">
    <div class="header-left">
      <i class="el-icon-arrow-left" style="font-size: 24px;"></i>
    </div>
    <div class="header-input">
      <i class="el-icon-search" style="font-size: 18px;"></i>
      <span>输入城市游玩主题</span>
    </div>
    <div class="header-right">
      <span class="right-text">{{this.city}}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    height: .86rem
    line-height: .86rem
    display: flex
    background-color: $bgcolor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .el-icon-arrow-left
        display: block
        height: .86rem
        line-height: .86rem
        text-align: center
    .header-right
      width: 1.24rem
      float: right
      text-align: center
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
