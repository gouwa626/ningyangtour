<template>
   <div>
    <div class="wlsetiesWrap" v-show="this.$route.name==='Wlseries'">
      <Backbar title="文旅专题"></Backbar>
      <div class="items">
        <div class="item" v-for="(item,index) in 10" :key="`${index}`" @click="jumpToDetail">
          <div class="item-img">
            <img src="../../assets/2.jpg" width="100%">
          </div>
          <p>复圣公园景区助力宁阳“旅游+”，打造全域旅游新格局!</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
export default {
  name: 'Wlseries',
  data() {
    return {

    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    jumpToDetail() {
      this.$router.push({name: 'WlDetail'})
    }
  },
  components: {
    Backbar
  }
}
</script>

<style scoped lang='less'>
.wlsetiesWrap{
  box-sizing: border-box;
  .items{
    padding: 46px 13px 0;
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
