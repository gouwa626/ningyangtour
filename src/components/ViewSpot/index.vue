<template>
   <div class="viewspotWraper">
      <Backbar title="详情"></Backbar>
      <MyScroll>
        <div class="top">
          <img src="/static/images/2.jpg">
          <div class="topbar">
            <div class="sliderWraper">
              <span>{{audioCurrentTime|showSencond}}</span>
              <div class="vantSlider">
                <van-slider v-model="audioval" @change="onChange" active-color='#A0CBEE' bar-height='3px'/>
              </div>
              <span>{{audioAllTime|showSencond}}</span>
            </div>
            <div class="MyControlWraper">
              <div class="bar" @click="backAudio">
                <i class="zuo"></i>
                <span>10s</span>
              </div>
              <i class="play" @click="playAudio"></i>
              <div class="bar" @click="goAudio">
                <i class="you"></i>
                <span>10s</span>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="title">
            <span>神童山休闲旅游区</span>
            <span>+关注</span>
          </div>
          <p class="ny-text text">过去，旅客来到宁阳或直奔泰山，或南去曲阜。
            如今，宁阳县全域旅游依托“东山、北水、西平
            原南蟋蟀”资源优势，整合资源，做活“旅游+”
            文章，打造全域旅游新格局，吸引了大批游客
            前来。而在这全域旅游的格局中，复圣公园景
            区不断求新求变，全面系统推进复圣文化核心
            品牌建设，打造精品旅游景区！过去，旅客来
            如今，宁阳县全域旅游依托“东山、北水、西平
            原南蟋蟀”资源优势，整合资源，做活“旅游+”
            文章，打造全域旅游新格局，吸引了大批游客
            前来。而在这全域旅游的格局中，复圣公园景
            区不断求新求变，全面系统推进复圣文化核心
            品牌建设，打造精品旅游景区！</p>
        </div>
      </MyScroll>
      <audio ref="audio" src="/static/audio/M500003WjRGk1b3FPN.mp3"></audio>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
import { secondToDate } from 'common/js/contants' // 返回m:s 用于播放显示
export default {
  name: 'ViewSpot',
  data() {
    return {
      audioval: 0,
      audioCurrentTime: 0, // 播放时长
      audioAllTime: 1 // 总时长
    }
  },
  mounted() {
    // 监听audio就绪状态
    this.$refs.audio.oncanplay = () => {
      this.initAudio()
    }
  },
  methods: {
    // 监听audio播放进度
    initAudio() {
      this.audioCurrentTime = this.$refs.audio.currentTime
      this.audioAllTime = this.$refs.audio.duration
      this.$refs.audio.ontimeupdate = () => {
        this.audioCurrentTime = this.$refs.audio.currentTime
        this.audioAllTime = this.$refs.audio.duration
        this.audioval = Number(this.audioCurrentTime) / Number(this.audioAllTime) * 100
      }
    },
    // 用户拖动进度条处理
    onChange(val) {
      this.audioval = val
      let audioAllTime = Number(this.audioAllTime)
      let userval = (val / 100) * audioAllTime
      this.$refs.audio.fastSeek(userval)
    },
    // 播放audio
    playAudio() {
      this.$refs.audio.play()
    },
    // 后退10s
    backAudio() {
      let audioVal = this.audioCurrentTime
      this.$refs.audio.fastSeek(audioVal - 10)
    },
    // 快进10s
    goAudio() {
      let audioVal = this.audioCurrentTime
      this.$refs.audio.fastSeek(audioVal + 10)
    }
  },
  computed: {
    // value() {
    //   return Number(this.audioCurrentTime) / Number(this.audioAllTime) * 100
    // }
  },
  watch: {
  },
  filters: {
    showSencond(val) {
      return secondToDate(val)
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
.viewspotWraper{
  .top{
    margin: 0 13px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    box-shadow:0px 3px 4px 1px rgba(235,235,235,1);
    img{
      width: 100%;
      height: 161px;
      border-radius: 5px 5px 0 0;
    }
    .topbar{
      padding: 15px 10px;
      box-sizing: border-box;
      .sliderWraper{
        display: flex;
        align-items: center;
        .vantSlider{
          flex: 1;
          padding: 0 8px;
          /deep/ .van-slider__button{
            width: 10px;
            height: 10px;
            background: #A0CBEE;
          }
        }
        span{
          width: 33px;
          color: #999;
          font-size: 13px;
        }
      }
      .MyControlWraper{
        display: flex;
        justify-content: space-between;
        padding: 15px 77px 0;
        .play{
          width: 40px;
          height: 40px;
          background-size: cover;
          .bg-image('bofang');
        }
        .bar{
          display: flex;
          flex-direction:column;
          i{
            width: 20px;
            height: 20px;
            background-size: cover;
          }
          .zuo{
            .bg-image('zuo');
          }
          .you{
            .bg-image('you');
          }
          span{
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
  .center{
    margin: 10px 13px;
    padding: 15px 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    box-shadow:0px 3px 4px 1px rgba(235,235,235,1);
    .title{
      display: flex;
      justify-content: space-between;
      color: #333;
      font-weight: normal;
      :first-child{
        font-size: 22px;
        font-weight: bold;
      }
      :last-child{
        font-size: 14px;
        font-weight: 400;
        padding: 3px 8px;
        border: 1px solid #7F8FCA;
        border-radius: 25px;
        box-sizing: border-box;
      }
    }
    .text{
      margin: 10px 2px;
    }
  }
}
</style>
