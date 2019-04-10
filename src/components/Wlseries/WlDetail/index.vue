<template>
   <div class="detailWrap">
     <Backbar title="文旅专题"></Backbar>
      <!--mescroll滚动区域的基本结构-->
      <MyScroll>
       <div>
        <p class="title">复圣公园景区助力宁阳“旅游+”打造全域旅游新格局!</p>
        <div class="contentImg">
          <img src="../../../assets/2.jpg" width="100%">
        </div>
        <p class="text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
          如今，宁阳县全域旅游依托“东山、北水、西平原
          南蟋蟀”资源优势，整合资源，做活“旅游+”文章，
          打造全域旅游新格局，吸引了大批游客前来。而
          在这全域旅游的格局中，复圣公园景区不断求新
          求变，全面系统推进复圣文化核心品牌建设，打
          造精品旅游景区！</p>
              <p class="smailTilte">全域旅游</p>
              <p class="text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
          如今，宁阳县全域旅游依托“东山、北水、西平原
          南蟋蟀”资源优势，整合资源，做活“旅游+”文章，
          打造全域旅游新格局，吸引了大批游客前来。而
          在这全域旅游的格局中，复圣公园景区不断求新
          求变，全面系统推进复圣文化核心品牌建设，打
          造精品旅游景区！</p>
        </div>
      </MyScroll>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
export default {
  name: 'WlDetail',
  data() {
    return {
    }
  },
  mounted() {
  },
  watch: {

  },
  methods: {
  },
  components: {
    Backbar,
    MyScroll
  }
}
</script>

<style scoped lang='less'>
.detailWrap{
  background-color: #fff;
  position: fixed;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  .mescroll{
    padding:10px 13px;
    box-sizing: border-box;
    position: fixed;
    top: 44px;
    bottom: 0;
    z-index: 11;
    height: auto;
    .title{
      font-size: 22px;
      line-height: 26px;
      font-weight:bold;
      margin-bottom:15px;
    }
    .contentImg{
      margin-bottom:15px;
    }
    .text{
      font-size: 16px;
      line-height: 25px;
    }
    .smailTilte{
      font-size: 16px;
      font-weight: bold;
      line-height: 25px;
      margin-top: 20px;
    }
  }
}
</style>
