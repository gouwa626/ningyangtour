<template>
  <div class="myBackbar">
   <van-nav-bar
    :title="title"
    :fixed="fixed"
    :border="border"
    :z-index="zIndex"
    @click-left="onClickLeft"
    @click-right="onClickRight">
    <div class="left" slot="left" v-if="left"></div>
    <div class="right" slot="right" v-if="right"></div>
  </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Backbar', // 全局返回头  默认左侧为箭头  右侧为省略号  未配置修改左右图标
  data() {
    return {

    }
  },
  props: {
    title: { // 传入标题
      type: String,
      default: ''
    },
    left: { // 是否显示左侧小箭头 默认显示
      type: Boolean,
      default: true
    },
    right: { // 是否显示右侧省略号 默认显示
      type: Boolean,
      default: true
    },
    fixed: { // 是否固定在顶部
      type: Boolean,
      default: true
    },
    border: { // 是否显示下边框
      type: Boolean,
      default: false
    },
    zIndex: { // 设置z-index 默认是1
      type: Number,
      default: 1
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.myBackbar{
  /deep/ .van-nav-bar__title{
    color: #333;
    font-size: 18px;
    font-weight: 400;
  }
  /deep/ .van-nav-bar__left{
    top: 30%;
    left: 5px;
  }
  /deep/ .van-nav-bar__right{
    top: 30%;
    right: 9px;
  }
  .left{
    .bg-image('back');
    width: 22px;
    height: 22px;
    background-size: cover;
  }
  .right{
    .bg-image('shaixuan');
    width: 22px;
    height: 22px;
    background-size: cover;
  }
}
</style>
