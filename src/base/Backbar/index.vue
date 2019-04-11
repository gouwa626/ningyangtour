<template>
  <div class="myBackbar">
   <van-nav-bar
    :fixed="fixed"
    :border="border"
    :z-index="zIndex"
    @click-left="onClickLeft"
    @click-right="onClickRight">
    <div class="left" slot="left" v-if="left"></div>
    <div class="title" slot="title" v-if="title">{{title}}</div>
    <div class="titleNum" slot="title" v-if="titleNum.titleLeft&&titleNum.titleRight">
      <div class="titleLeft" :class="titleNum.active===0?'active':''" @click="handclickActive(0)">{{titleNum.titleLeft}}</div>
      <div class="titleRight" :class="titleNum.active===1?'active':''" @click="handclickActive(1)">{{titleNum.titleRight}}</div>
    </div>
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
    titleNum: {
      // 若需要两个标题  则需传入一个对象包含左右标题名称及选中项 0 左边 1 右边
      type: Object,
      default: function () {
        return {
          titleLeft: '',
          titleRight: '',
          active: '' // 传入选中的标题
        }
      }
    },
    titleLeft: {
      type: String,
      default: ''
    },
    titleRight: {
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
    },
    handclickActive(active) {
      this.$emit('active', active)
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
  .title{
    color: #333;
    font-size: 18px;
    font-weight: 400;
  }
  .right{
    .bg-image('shaixuan');
    width: 22px;
    height: 22px;
    background-size: cover;
  }
  .titleNum{
    width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
