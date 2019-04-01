<template>
   <div>
    <van-swipe>
      <van-swipe-item v-for="(image, index) in imagesPanel" :key="index">
        <img v-lazy="image" height="200" width="100%"/>
      </van-swipe-item>
    </van-swipe>
    <div >

    </div>
   </div>
</template>

<script>
export default {
  name: 'Index',
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
  components: {

  }
}
</script>

<style scoped lang='less'>

</style>
