<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或者拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgcolor
    .search-input
      width: 100%
      height: .62rem
      padding: 0 .2rem
      box-sizing: border-box
      line-height: .62rem
      text-align: center
      border-radius: .06rem
</style>
