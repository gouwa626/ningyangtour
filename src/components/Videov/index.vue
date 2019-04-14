<template>
   <div class="videoWraper">
     <Backbar title="视频"></Backbar>
     <div class="search">
        <van-field v-model="searchVal" placeholder="请输入搜索内容">
          <div slot="right-icon" class="sousuo"></div>
        </van-field>
      </div>
      <div class="scroll">
        <MyVideo v-for="i in 3"></MyVideo>
      </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyVideo from 'base/MyVideo'
export default {
  name: 'Videov',
  data() {
    return {
      searchVal: ''
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
    MyVideo
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.search{
  position: fixed;
  top: 46px;
  left: 0;
  right: 0;
  width: 100;
  background: #F6F6F7;
  padding: 10px 25px;
  // height: 44px;
  box-sizing: border-box;
  .sousuo{
    .bg-image('sousuo');
    background-size: cover;
    width: 20px;
    height: 20px;
  }
  /deep/ .van-cell{
    border-radius: 25px;
    padding:5px 15px;
  }
}
.videoWraper{
  .scroll{
    position: fixed;
    top:100px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #F6F6F7;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>
