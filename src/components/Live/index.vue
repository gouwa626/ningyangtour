<template>
   <div>
     <Backbar :titleNum="titleData" @active="onChangeActive"></Backbar>
     <div class="search">
        <van-field v-model="searchVal" placeholder="请输入搜索内容">
          <div slot="right-icon" class="sousuo"></div>
        </van-field>
      </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
export default {
  name: 'Live',
  data() {
    return {
      titleData: {
        titleLeft: '活动',
        titleRight: '赛事',
        active: 0 // 传入选中的标题
      },
      searchVal: ''
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    onChangeActive(active) {
      this.titleData.active = active
    }
  },
  components: {
    Backbar
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
</style>
