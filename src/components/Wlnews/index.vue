<template>
   <div>
     <van-nav-bar
        title="文旅专题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="wlztWraper">
        <div class="content" v-for="(item,index) in 10" :key="`${index}`">
          <div class="contimg">
            <img src="../../assets/2.jpg" width="100%">
          </div>
          <p>复圣公园阿克苏觉得卡拉斯发了看法否和五年高考历史发觉睡懒觉啦</p>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'Wlnews',
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
.wlztWraper{
  padding: 20px;
  background: #fff;
  .content{
    width: 100%;
    .contimg{
      width: 100%;
    }
    p{
      margin: 20px 0;
    }
  }
}
</style>
