<template>
   <div class="publicdetail">
     <Backbar title="购物"></Backbar>
      <div class="swiperWraper">
        <swiper ref="mySwiper"
        :options="swiperOption">
          <swiper-slide v-for="i in 5">
            <img src="/static/images/2.jpg" width="100%" height="163px">
          </swiper-slide>
        </swiper>
      </div>
      <p class="title">
        <span>凌云大厦</span>
        <span>七贤店</span>
      </p>
      <MyScroll>
        <div class="infoitems">
          <div class="item">
            <i class="dizhi"></i>
            <span>南关路世纪城南门东首</span>
          </div>
          <div class="item">
            <i class="dianhua"></i>
            <span>15556699220</span>
          </div>
          <div class="item">
            <i class="shijian"></i>
            <span>周一至周日 10:30-20:30<br>2019-01-28至2019-02-15 休息</span>
          </div>
        </div>
        <div class="infoitems">
          <div class="infotitle ny-twotitle">
            <div class="line"></div>
            <span>商场简介</span>
          </div>
          <p class="text ny-text">过去，旅客来到宁阳。或直奔泰山，或
南去曲阜。如今，宁阳县全域旅游依托
“东山、北水、西平原南蟋蟀”资源优势，
整合资源，做活“旅游+”文章，打造全
域旅游新格局，吸引了大批游客前来。
而在这全域旅游的格局中，复圣公园景
区不断求新求变，全面系统推进复圣文
化核心品牌建设，打造精品旅游景区！</p>
        </div>
      </MyScroll>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
export default {
  name: 'PublicDetail',
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        spaceBetween: 2,
        centeredSlides: true,
        slidesPerView: 'auto'
      }
    }
  },
  mounted() {

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
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
@import '~common/less/variable.less';
.swiperWraper{
  padding:48px 0 10px;
  /deep/ .swiper-slide{
  width: 93%;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  // box-shadow:0px 3px 5px 1px #C7C6D6;
  img{
    box-shadow:0px 3px 6px 1px rgba(199,198,214,1);
    border-radius: 5px;
  }
  }
}
.title{
  padding:0 15px;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  :first-child{
    font-size: 22px;
    font-weight: bold;
  }
  :last-child{
    font-size: 18px;
    font-weight: bold;
    align-self:flex-end;
  }
}
.infoitems{
  margin: 10px;
  padding:10px 0 10px 12px;
  background: #fff;
  box-shadow:0px 1px 4px 1px rgba(235,235,235,1);
  border-radius:5px;
  .item{
    display: flex;
    margin: 15px 0;
    font-weight: normal;
    i{
      width: 20px;
      height: 20px;
      background-size: cover;
      margin-right: 13px;
    }
    .dizhi{
      .bg-image('dizhi')
    }
    .dianhua{
      .bg-image('dianhua')
    }
    .shijian{
      .bg-image('shijian')
    }
    span{
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
  .infotitle{
    display: flex;
    align-items: center;
    .line{
      width: 5px;
      height: 15px;
      background: #7F8FCA;
      border-radius: 5px;
      margin-right: 8px;
    }
  }
  .text{
    padding: 10px 15px 10px 50px;
  }
}
.publicdetail{
  /deep/ .mescroll{
    top: 255px;
  }
}
</style>
