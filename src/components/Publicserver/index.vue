<template>
   <div>
     <van-nav-bar
        title="公共服务"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="search">
        <van-field v-model="searchVal" placeholder="请输入搜索内容" />
      </div>
      <div class="sub">
        <div class="badge">
          <van-badge-group :active-key="activeKey" @change="onChange">
          <van-badge title="购物" />
          <van-badge title="餐饮"/>
          <van-badge title="住宿" />
          <van-badge title="停车场" />
          <van-badge title="加油站"/>
          <van-badge title="车站" />
          <van-badge title="卫生间"/>
        </van-badge-group>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'Publicserver',
  data() {
    return {
      activeKey: 0,
      searchVal: ''
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onChange(key) {
      this.activeKey = key
    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.search{
  background: #fff;
  padding: 0 20px;
}
.sub{
  display: flex;
  .badge{
    width: 20%;
  }
}
</style>
