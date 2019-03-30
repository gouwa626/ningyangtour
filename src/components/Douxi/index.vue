<template>
   <div>
     <div v-for="(item,index) in 5" :key="index" class="douxi-wrap">
       <img src="../../assets/logo.png" height="200" >
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

    .title-douxi {
      text-align: center;
    }
  }
  
</style>
