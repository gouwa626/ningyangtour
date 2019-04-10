<template>
  <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
    <slot></slot>
  </mescroll-vue>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'MyScroll',
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {
        use: false
      },
      mescrollUp: {
        use: false,
        isBounce: false
      }
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    }
  },
  components: {
    MescrollVue
  }
}
</script>

<style scoped lang='less'>
/*通过fixed固定mescroll的高度*/
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
}
</style>
