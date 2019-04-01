<template>
   <div>
      <van-swipe>
        <van-swipe-item v-for="(image, index) in imagesPanel" :key="index">
          <img v-lazy="image" height="200" width="100%"/>
        </van-swipe-item>
      </van-swipe>
      <BtnRouteIndex></BtnRouteIndex>
   </div>
</template>

<script>
import BtnRouteIndex from './btnRouteIndex';

export default {
  name: 'Index',
  components:{
    BtnRouteIndex
  },
  data () {
    return {
      imagesPanel: [
        require('../../assets/2.jpg'),
        require('../../assets/2.jpg'),
        require('../../assets/2.jpg'),
        require('../../assets/2.jpg'),
        
      ]
    }
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
}
</script>

<style scoped lang='less'>

</style>
