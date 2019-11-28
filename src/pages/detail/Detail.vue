<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人2-1'
        }, {
          title: '成人2-2',
          children: [{
            title: '成人2-2-1'
          }]
        }]
      }, {
        title: '儿童票票'
      }, {
        title: '优惠票'
      }, {
        title: '半价票'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
