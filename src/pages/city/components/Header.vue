<template>
  <div>
    <div class="header">
      城市选择
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
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    position: relative
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
