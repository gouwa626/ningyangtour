<template>
  <div id="app">
    <router-view/>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from 'components/Menu/Menu' // 首屏的底部菜单栏
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="less">
</style>
