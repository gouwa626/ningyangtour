<template>
   <div class="detailWrap">
    <Backbar title="活动详情"></Backbar>
    <MyScroll>
    <div class="content">
        <p class="title">迎新春·杨松涛书画展</p>
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
    </div>
    </MyScroll>
     <!-- 报名弹出层开始 -->
      <div class="popWrap" v-show="popSheet">
        <div class="opaticy"></div>
          <div class="popSheet">
            <div class="sheet">
              <i class="icon dizhi"></i>
              <span>活动地址:&nbsp;&nbsp;</span>
              <span>金阳大街2890号</span>
            </div>
            <div class="sheet">
              <i class="icon shijian"></i>
              <span>活动时间:&nbsp;&nbsp;</span>
              <span>2019.12.27-2019.3.10</span>
            </div>
            <div class="sheet">
              <i class="icon riqi"></i>
              <span>报名截止:&nbsp;&nbsp;</span>
              <span>2019.3.10 17:00</span>
            </div>
          </div>
      </div>
     <!-- 报名弹出层结束 -->
     <div class="foot">
       <div class="footLeft" @click="showSheet">
         <i class="baoming"></i>
         <span>活动</span>
       </div>
       <div class="footRight">
         <span>报名</span>
       </div>
     </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
export default {
  name: 'WlactiveDetail',
  data() {
    return {
      popSheet: false
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    showSheet() {
      this.popSheet = !this.popSheet
    }
  },
  components: {
    Backbar,
    MyScroll
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.detailWrap{
  background-color: #fff;
  .mescroll{
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
    background-color: #fff;
  }
  .content{
    padding:10px 13px;
    box-sizing: border-box;
    overflow-y: scroll;
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
  .popWrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 49px;
    .opaticy{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.5;
      background: #000;
    }
    .popSheet{
      position: fixed;
      bottom: 49px;
      left: 0;
      right: 0;
      padding:20px 25px;
      background:rgba(246,246,247,1);
      .sheet{
        font-size: 18px;
        margin:25px 0;
        display: flex;
        align-items: center;
        .icon{
          width: 18px;
          height: 18px;
          background-size: cover;
          margin-right: 10px;
          &.dizhi{
            .bg-image('dizhi')
          }
          &.shijian{
            .bg-image('shijian')
          }
          &.riqi{
            .bg-image('riqi')
          }
        }
      }
    }
  }
  .foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    display: flex;
    align-items: center;
    font-size: 18px;
    .footLeft{
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      .baoming{
        width: 16px;
        height: 16px;
        background-size:cover;
        margin-right: 5px;
        .bg-image('baoming');
      }
    }
    .footRight{
      width: 65%;
      height: 100%;
      background: #A0CBEE;
      line-height: 49px;
      text-align: center;
      span{
        color:#fff;
      }
    }
  }
}
</style>
