<template>
   <div>
     <van-nav-bar
        title="文娱活动"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="wlactiveWrap">
        <div class="item" v-for="(item,index) in 10" :key="`${index}`">
          <div class="content">
            <div class="leftimg">
              <img src="../../assets/2.jpg" width="100%">
            </div>
            <div class="righttext">
              <h3>迎新春杨松涛书画展</h3>
              <div class="time">
                <span>@</span>
                <span>2019.2.10-2019.3.10</span>
              </div>
              <div class="address">
                <span>@</span>
                <span>复圣公园广场</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
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
    onClickLeft() {
      this.$router.back()
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.wlactiveWrap{
  box-sizing: border-box;
  padding:10px 20px;
  .item{
    border-bottom:1px solid #e5e5e5;
    .content{
      width: 100%;
      display: flex;
      align-items: center;
      padding:10px 0;
      .leftimg{
        width: 120px;
        height: 120px;
        margin-right: 10px;
        img{
          height: 100%;
        }
      }
      .righttext{
        height: 120px;
        padding: 30px 0;
        box-sizing: border-box;
        h3{
          line-height: 20px;
        }
        div{
          line-height: 20px;
        }
      }
    }
  }
}
</style>
