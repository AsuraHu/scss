<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
        title: '国色天乡·陆地乐园',
        desc: '镇园之宝眼镜蛇过山车'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/1d/e74e796e4e21275427ffdd838619f45f.water.jpg_200x200_d994e778.jpg',
        title: '成都欢乐谷',
        desc: '超级旋转过山车刺激到让你怀疑人生'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '蠢萌企鹅陪你嗨翻这个秋'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        title: '成都海昌极地海洋公园',
        desc: '蠢萌企鹅陪你嗨翻这个秋'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      min-width: 0rem
      flex: 1
      padding: .1rem
      .item-title
        line-height: .54rem
        font-style: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background-color: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
