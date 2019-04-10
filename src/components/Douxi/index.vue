<template>
   <div class="mescroll-touch">
     <div v-for="(item,index) in 5" :key="index" class="douxi-wrap">
       <img src="../../assets/2.jpg" height="200" width="100%">
       <p class="title-douxi">
         2016年蟋蟀世界杯
       </p>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Douxi',
  data () {
    return {

    }
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>
<style scoped lang='less'>
  .douxi-wrap{
    padding: 12px 20px 3px;
    box-sizing: border-box;

    .title-douxi {
      text-align: center;
      margin-top: 5px;
    }
  }
</style>
