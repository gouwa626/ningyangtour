<template>
   <div>
    <Backbar title="文旅专题"></Backbar>
    <mescroll-vue ref="mescroll" class="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div class="items">
        <div class="item" v-for="(item,index) in 10" :key="`${index}`" @click="jumpToDetail">
          <div class="item-img">
            <img src="../../assets/2.jpg" width="100%">
          </div>
          <p>复圣公园景区助力宁阳“旅游+”，打造全域旅游新格局!</p>
        </div>
      </div>
    </mescroll-vue>
    <router-view></router-view>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'Wlseries',
  data() {
    return {
      mescroll: null, // mescroll实例对象
      dataList: [], // 列表数据
      mescrollDown: {
        use: false
      },
      mescrollUp: {
        use: false,
        isBounce: false
      }
    }
  },
  mounted() {
  },
  watch: {

  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    jumpToDetail() {
      this.$router.push({name: 'WlDetail'})
    }
  },
  components: {
    Backbar,
    MescrollVue
  }
}
</script>

<style scoped lang='less'>
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
  .items{
    padding: 0 13px;
    .item{
      background-color: #fff;
      border-radius: 4px;
      overflow: hidden;
      margin: 10px 0;
      box-shadow:0px 6px 14px 2px rgba(235,235,235,1);
      p{
        font-size: 14px;
        padding: 10px 8px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
}
</style>
