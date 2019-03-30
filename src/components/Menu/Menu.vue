<template>
  <!-- 首页底部导航组件 -->
  <div class="menu-wrapper border-top" v-show="menuShow">
    <router-link :to="bar.path" tag="div" class="menu-item" v-for="(bar,index) in tabbar" :key="index">
      <!-- <i class="icon" :class="bar.icon"></i> -->
      <span class="text">{{bar.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuShow: true,
      tabbar: [
        {
          name: '首页',
          path: '/index',
          pathName: 'Index',
          icon: 'index',
          dot: false,
          info: ''
        },
        {
          name: '非遗',
          path: '/feiyi',
          pathName: 'Feiyi',
          icon: 'feiyi',
          dot: false,
          info: ''
        },
        {
          name: '文物',
          path: '/wenwu',
          pathName: 'Wenwu',
          icon: 'wenwu',
          dot: false,
          info: ''
        },
        {
          name: '斗蟋',
          path: '/douxi',
          pathName: 'Douxi',
          icon: 'douxi',
          dot: false,
          info: ''
        }
      ]
    }
  },
  watch: {
    $route: 'changeActive'
  },
  created () {
    const toName = this.$route.name
    this.setActive(toName)
  },
  methods: {
    changeActive ({ name }) {
      this.setActive(name)
    },
    setActive (name) {
      if (this.tabbar.findIndex(n => n.pathName === name) === -1) {
        this.menuShow = false
      } else {
        this.menuShow = true
      }
    }
  }
}
</script>

<style scoped lang='less'>

  .menu-wrapper{
    position:fixed;
    left:0;
    bottom:0;
    z-index: 9;
    width: 100%;
    height: 44px;
    display: flex;
    flex-flow: row nowrap;
    background-color: #fff;
    }
    &:before{
      border-color: #cccccc;
      }
    .menu-item{
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      }
      .icon{
        margin-bottom: 5px;
        display: block;
        width: 24px;
        height: 24px;
        background-size: cover;
        }
      .text{
        font-size: 12px;
        font-family: ZoomlaGusong-A101;
        }
</style>
