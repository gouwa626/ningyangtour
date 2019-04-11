<template>
   <div>
     <Backbar title="文物"></Backbar>
      <div class="search">
        <van-field v-model="searchVal" placeholder="请输入搜索内容">
          <div slot="right-icon" class="sousuo"></div>
        </van-field>
      </div>
      <div class="sub">
        <div class="badge">
          <div class="badgeitem van-hairline--bottom"
          :class="activeKey===item.index?'active':''"
          v-for="item in  badgeData"
          :key="item.index" @click="activeKey = item.index">
            <i class="icon" :class="item.class"></i><span>{{item.title}}</span>
          </div>
        </div>
        <div class="badgesub">
          <MyScroll>
            <div class="badgesubitem" v-for="i in 10">
              <div class="van-hairline--bottom">
                <p class="title">宁阳县鲁为川味堂</p>
                <div class="infoWraper">
                  <div class="info">
                    <i class="phone"></i>
                    <span class="text">0538-88888888</span>
                  </div>
                  <div class="info">
                    <i class="phone"></i>
                    <span class="text">复圣公园北区广场八仙桥街道办事处金阳大街以南</span>
                  </div>
                </div>
              </div>
            </div>
          </MyScroll>
        </div>
      </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MyScroll from 'base/MyScroll'
export default {
  name: 'Publicserver',
  data() {
    return {
      activeKey: 1,
      searchVal: '',
      badgeData: [
        {
          title: '购物',
          index: 1,
          class: 'gouwu'
        },
        {
          title: '餐饮',
          index: 2,
          class: 'canyin'
        },
        {
          title: '住宿',
          index: 3,
          class: 'zhusuxinxi'
        },
        {
          title: '停车场',
          index: 4,
          class: 'tingchechang'
        },
        {
          title: '加油站',
          index: 5,
          class: 'jiayouzhan'
        },
        {
          title: '车站',
          index: 6,
          class: 'gongjiaochezhan'
        },
        {
          title: '卫生间',
          index: 7,
          class: 'weishengjian'
        }
      ]
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    onChange(key) {
      this.activeKey = key
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
.sub{
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  .badge{
    width: 30%;
    height: 100%;
    background: #F6F6F7;
    .active{
      background: #fff;
    }
    .badgeitem{
      height: 14.2%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        width: 20px;
        height: 20px;
        background-size: cover;
        margin-right: 5px;
        &.gouwu{
          .bg-image('gouwu');
        }
        &.canyin{
          .bg-image('canyin');
        }
        &.zhusuxinxi{
          .bg-image('zhusuxinxi');
        }
        &.tingchechang{
          .bg-image('tingchechang');
        }
        &.jiayouzhan{
          .bg-image('jiayouzhan');
        }
        &.gongjiaochezhan{
          .bg-image('gongjiaochezhan');
        }
        &.weishengjian{
          .bg-image('weishengjian');
        }
      }
    }
  }
  .badgesub{
    width: 70%;
    height: 100%;
    position: relative;
    /deep/ .mescroll{
      position: absolute;
      top: 0;
      background: #fff;
    }
    .badgesubitem{
      padding: 20px 0 0 20px;
      .title{
        font-size: 15px;
        font-weight: bold;
        padding-left: 5px;
      }
      .infoWraper{
        margin-top:20px;
        padding-bottom: 10px;
        .info{
          margin-top: 5px;
          display: flex;
          padding-right: 5px;
          font-size: 14px;
          color: #333;
          font-weight: normal;
          .phone{
            flex: 0 0 20px;
            height: 20px;
            .bg-image('dizhi');
            background-size: cover;
            margin-right: 10px;
          }
          .text{
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
