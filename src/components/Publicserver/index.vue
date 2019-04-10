<template>
   <div>
     <Backbar title="文物"></Backbar>
      <div class="search">
        <van-field v-model="searchVal" placeholder="请输入搜索内容" />
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
          我是内容
        </div>
      </div>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
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
  padding: 0 20px;
  height: 44px;
}
.sub{
  position: fixed;
  top: 90px;
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
  }
}
</style>
