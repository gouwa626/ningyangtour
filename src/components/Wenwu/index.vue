<template>
   <div>
     <Backbar title="文物"></Backbar>
     <div class="subWraper">
       <div class="items" v-for="(item,index) of 10" :key="index">
         <img src="../../assets/logo.png">
         <span class="text">前家庄遗址</span>
       </div>
     </div>
   </div>
</template>

<script>
import Backbar from '@/base/Backbar'
export default {
  name: 'Wenwu',
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
    Backbar
  }
}
</script>

<style scoped lang='less'>
.subWraper{
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.items{
  width: 49%;
  text-align: center;
}
.items img{
  width: 100%;
}
.items:nth-child(odd){
  margin-right: 2%;
}
</style>
