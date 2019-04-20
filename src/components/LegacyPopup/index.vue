<template>
   <div class="popupWraper">
     <!-- <MyScroll> -->
       <div class="item">
         <div class="title">
           <i></i>
           <span class="titleLeft">传统戏曲</span>
           <i class="titleRight" @click="close"></i>
         </div>
         <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="木偶戏" name="1">
            过去，旅客来到宁阳。或直奔泰山，或南去
          如今，宁阳县全域旅游依托“东山、北水、西
          南蟋蟀”资源优势，整合资源，做活“旅游+”
          打造全域旅游新格局，吸引了大批游客前来。
          在这全域旅游的格局中，复圣公园景区不断
          求变，全面系统推进复圣文化核心品牌建设，
          造精品旅游景区
          <div slot="right-icon" class="rightIcon" :class="activeName==='1'?'active':''"></div>
          </van-collapse-item>
          <van-collapse-item title="弦子戏" name="2">
            过去，旅客来到宁阳。或直奔泰山，或南去
          如今，宁阳县全域旅游依托“东山、北水、西
          南蟋蟀”资源优势，整合资源，做活“旅游+”
          打造全域旅游新格局，吸引了大批游客前来。
          在这全域旅游的格局中，复圣公园景区不断
          求变，全面系统推进复圣文化核心品牌建设，
          造精品旅游景区
          <div slot="right-icon" class="rightIcon" :class="activeName==='2'?'active':''"></div>
          </van-collapse-item>
          <van-collapse-item title="拉魂腔" name="3">
            过去，旅客来到宁阳。或直奔泰山，或南去
          如今，宁阳县全域旅游依托“东山、北水、西
          南蟋蟀”资源优势，整合资源，做活“旅游+”
          打造全域旅游新格局，吸引了大批游客前来。
          在这全域旅游的格局中，复圣公园景区不断
          求变，全面系统推进复圣文化核心品牌建设，
          造精品旅游景区
          <div slot="right-icon" class="rightIcon" :class="activeName==='3'?'active':''"></div>
          </van-collapse-item>
        </van-collapse>
       </div>
     <!-- </MyScroll> -->
   </div>
</template>

<script>
import MyScroll from 'base/MyScroll'
export default {
  name: 'LegacyPopup',
  data() {
    return {
      activeName: ''
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  components: {
    MyScroll
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.popupWraper{
  width: 90vw;
  height: 100%;
  /deep/ .mescroll{
    // position: static;
    // width: 100%;
    // height: 100%;
  }
  .item{
    position: relative;
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 13px;
      font-size: 16px;
      font-weight: bold;
      i{
        width: 20px;
        height: 20px;
      }
      .titleRight{
        width: 20px;
        height: 20px;
        .bg-image('./images/sh');
        background-size: cover;
      }
    }
    .rightIcon{
      width: 20px;
      height: 20px;
      .bg-image('./images/xiala-xia');
      background-size: cover;
    }
    .active{
      width: 20px;
      height: 20px;
      .bg-image('./images/xiala-shang');
      background-size: cover;
    }
    /deep/ .van-collapse-item__content{
      .ny-text;
      color: #333;
    }
  }
}
</style>
