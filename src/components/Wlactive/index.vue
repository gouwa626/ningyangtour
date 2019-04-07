<template>
   <div>
      <div class="wlactiveWrap" v-show="this.$route.name==='Wlactive'">
        <Backbar title="文娱活动"></Backbar>
        <div class="items">
          <div class="item" v-for="(item,index) in 10" :key="`${index}`" @click="jumpToDetail">
            <div class="content">
              <div class="leftimg">
                <img src="../../assets/2.jpg" width="100%">
              </div>
              <div class="righttext">
                <h3>迎新春·杨松涛书画展</h3>
                <div class="time">
                  <i class="icon-time"></i>
                  <span>2019.2.10-2019.3.10</span>
                </div>
                <div class="time">
                  <i class="icon-add"></i>
                  <span>复圣公园广场</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
   </div>
</template>

<script>
import Backbar from 'base/Backbar'
export default {
  name: 'Wlactive',
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
      this.$router.push({name: 'WlactiveDetail'})
    }
  },
  components: {
    Backbar
  }
}
</script>

<style scoped lang='less'>
@import '~common/less/variable.less';
.wlactiveWrap{
  box-sizing: border-box;
  .items{
    padding:46px 13px 0;
    .item{
      background-color: #fff;
      border-radius: 5px;
      .content{
        width: 100%;
        display: flex;
        margin:10px 0;
        padding: 10px;
        box-sizing: border-box;
        .leftimg{
          width: 136px;
          height: 85px;
          margin-right: 10px;
          box-shadow:0px 1px 4px 1px rgba(235,235,235,1);
          img{
            height: 100%;
          }
        }
        .righttext{
          box-sizing: border-box;
          h3{
            line-height: 20px;
            margin-bottom: 15px;
            padding-left: 5px;
            font-size: 15px;
            font-weight:bold;
            color:#333;
          }
          div{
            line-height: 20px;
          }
          .time{
            display: flex;
            align-items: center;
            span{
              font-size: 14px;
              color: #333;
              font-weight: 300;
            }
            i{
              width: 18px;
              height: 18px;
              background-size: cover;
              margin-right: 10px;
            }
            .icon-time{
              .bg-image('time');
            }
            .icon-add{
              .bg-image('dizhi');
            }
          }
        }
      }
    }
  }
}
</style>
