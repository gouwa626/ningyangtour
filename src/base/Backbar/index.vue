<template>
   <div class="backWraper">
     <div class="left"  @click="goBack">
       <i>C</i>
       <span>返回</span>
     </div>
     <div class="center">
       {{title}}
     </div>
     <div class="right">
       ...
     </div>
   </div>
</template>

<script>
export default {
  name: 'Backbar',
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    goBack(){
      this.$router.back();
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.backWraper{
  // position:fixed;
  // top:0;
  // left: 0;
  width: 100%;
  height: 44px;
  background: #2b2b2b;
  display:flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
}
  .left{
    width: 20%;
    }
  .center{
    flex:1;
    text-align: center;
  }
  .right{
    width: 20%;
    text-align: right;
  }
</style>
