import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index', // 首页
      name: 'Index',
      component: () => import('components/Index')
    },
    {
      path: '/feiyi', // 非遗
      name: 'Feiyi',
      component: () => import('components/Feiyi')
    },
    {
      path: '/wenwu', // 文物
      name: 'Wenwu',
      component: () => import('components/Wenwu')
    },
    {
      path: '/douxi', // 斗蟋
      name: 'Douxi',
      component: () => import('components/Douxi')
    }
  ]
})
