<template>
    <div class="palyer needsclick">
      <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      :webkit-playsinline="true"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)">
      </video-player>
      <div class="btn" @click="onClickPlay" v-show="myPlayBtn"></div>
      <div class="top" v-show="videoInfo">
        <div class="date">
          <span>04-01</span>
        </div>
      </div>
      <div class="bottom" v-show="videoInfo">
        <span class="name">宁阳木偶戏视频</span>
        <div class="timer">
          <i class="jinyin"></i>
          <span class="time">12:30</span>
        </div>
      </div>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'MyVideo',
  data() {
    return {
      myPlayBtn: true,
      videoInfo: true,
      playerOptions: {
        height: '150',
        muted: true,
        language: 'zh-CN',
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        },
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      }
    }
  },
  mounted() {

  },
  watch: {

  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay() {
      this.myPlayBtn = false
      this.videoInfo = false
    },
    onClickPlay() {
      let player = this.$refs.videoPlayer.player
      player.play()
      this.myPlayBtn = false
    },
    onPlayerPause() {
      this.myPlayBtn = true
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.palyer{
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  margin: 10px 0 ;
  /deep/ .video-player{
    border-radius: 5px;
    overflow: hidden;
  }
  /deep/ .video-js{
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  /deep/ .vjs-tech{
    // width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  /deep/ .vjs-poster{
    background-size: cover;
    border-radius: 5px;
  }
  /deep/ .vjs-big-play-button{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: none;
  }
  .btn{
    position: absolute;
    .bg-image('shipin');
    width: 45px;
    height: 45px;
    background-size: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .top{
    position: absolute;
    top: 8px;
    left: 7px;
    right: 7px;
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: normal;
    .date{
      background:rgba(60,49,49,0.4);
      padding: 2px 10px;
      box-sizing: border-box;
      color: #fff;
      font-size: 13px;
      border-radius: 25px;
      font-weight: 300;
    }
  }
  .bottom{
    position: absolute;
    bottom: 8px;
    left: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: normal;
    color: #fff;
    .name{
      font-size: 18px;
      font-weight: bold;
    }
    .timer{
      display: flex;
      align-items: center;
      background:rgba(60,49,49,0.4);
      padding: 0px 8px;
      box-sizing: border-box;
      color: #fff;
      font-size: 13px;
      border-radius: 25px;
      font-weight: 300;
      .jinyin{
        width: 20px;
        height: 20px;
        .bg-image('jingyin');
        background-size: cover;
      }
    }
  }
}
</style>
