<template>
   <div class="legacyWraper">
     <Backbar :titleNum="titleData" @active="onChangeActive"></Backbar>
      <MyScroll>
        <div class="item" v-for="(item,index) in dataList" :key="index">
          <div class="itemLeft">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </div>
          <i class="itemRight" @click="show=true"></i>
        </div>
        <van-popup v-model="show" :lazy-render="false">
          <LegacyPopup @close="show=false"></LegacyPopup>
        </van-popup>
      </MyScroll>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
import LegacyPopup from '../LegacyPopup'
export default {
  name: 'Legacy',
  data() {
    return {
      titleData: {
        titleLeft: '非遗',
        titleRight: '文物',
        active: 0 // 传入选中的标题
      },
      show: false,
      searchVal: '',
      dataList: [
        {
          name: '传统戏剧',
          icon: 'lianpu'
        },
        {
          name: '民俗',
          icon: 'ms'
        },
        {
          name: '民间音乐',
          icon: 'mjyy'
        },
        {
          name: '传统音乐',
          icon: 'ctyy'
        },
        {
          name: '传统美术',
          icon: 'ctms'
        },
        {
          name: '传统技艺',
          icon: 'ctjy'
        },
        {
          name: '曲艺',
          icon: 'qy'
        },
        {
          name: '传统医药',
          icon: 'yiyao'
        },
        {
          name: '传统体育、游艺与杂技',
          icon: 'ctty'
        }
      ]
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
    Backbar,
    MyScroll,
    LegacyPopup
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.legacyWraper{
  /deep/ .mescroll{

  }
  /deep/ .van-popup{
    box-shadow:0px 2px 2px 0px rgba(203,203,203,0.1);
    border-radius:5px;
  }
  .item{
    margin: 13px;
    background: #fff;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:0px 2px 2px 0px rgba(203,203,203,0.1);
    border-radius:5px;
    .itemLeft{
      display: flex;
      align-items: center;
      i{
        width: 22px;
        height: 22px;
        background-size: cover;
        margin: 0 13px;
      }
      .lianpu{
        .bg-image('./images/lianpu');
      }
      .ms{
        .bg-image('./images/ms');
      }
      .mjyy{
        .bg-image('./images/mjyy');
      }
      .ctyy{
        .bg-image('./images/ctyy');
      }
      .ctms{
        .bg-image('./images/ctms');
      }
      .ctjy{
        .bg-image('./images/ctjy');
      }
      .qy{
        .bg-image('./images/qy');
      }
      .yiyao{
        .bg-image('./images/yiyao');
      }
      .ctty{
        .bg-image('./images/ctty');
      }
    }
    .itemRight{
      width: 20px;
      height: 20px;
      background-size: cover;
      .bg-image('./images/zk');
      margin-right: 13px;
    }
  }
}
</style>
