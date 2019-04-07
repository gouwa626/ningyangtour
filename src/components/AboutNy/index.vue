<template>
   <div class="aboutWrap">
      <Backbar title="宁阳简介"></Backbar>
      <div class="content">
        <div class="title">山东省</div>
        <div class="ny-onetitle onetitle">
          <i class="icon ningyang"></i>
          <span>宁阳县</span>
        </div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资源优势，整合资源，做活“旅游+”
文章，打造全域旅游新格局，吸引了大批游客前
来。而在这全域旅游的格局中，复圣公园景区不
断求新求变，全面系统推进复圣文化核心品牌建
设，打造精品旅游景区！</p>
        <div class="ny-onetitle onetitle">
          <i class="icon lishi"></i>
          <span>历史</span>
        </div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资</p>
        <div class="ny-onetitle onetitle">
          <i class="icon dili"></i>
          <span>地理环境</span>
        </div>
        <div class="ny-twotitle twotitle">楚位置境域</div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资</p>
        <div class="ny-twotitle twotitle">地形地貌</div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资</p>
        <div class="ny-twotitle twotitle">气候</div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资</p>
        <div class="ny-twotitle twotitle">交通</div>
        <p class="ny-text">过去，旅客来到宁阳。或直奔泰山，或南去曲阜。
如今，宁阳县全域旅游依托“东山、北水、西平
原、南蟋蟀”资</p>
      </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
export default {
  name: 'AboutNy',
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
    Backbar
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.aboutWrap{
  background-color: #fff;
  .content{
    padding:46px 13px 10px 13px;
    box-sizing: border-box;
    overflow-y: scroll;
    .title{
      font-size: 22px;
      font-weight: bold;
      margin:10px 0 30px;
    }
    .onetitle{
      display: flex;
      align-items: center;
      margin: 25px 0 10px;
      .icon{
        width: 20px;
        height: 20px;
        background-size: cover;
        margin-right: 5px;
        &.ningyang{
          .bg-image('ningyang')
        }
        &.lishi{
          .bg-image('lishi')
        }
        &.dili{
          .bg-image('dili')
        }
      }
    }
    .twotitle{
      margin:5px 0;
    }
  }
}
</style>
