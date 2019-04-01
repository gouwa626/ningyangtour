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
      path: '/wlnews', // 文旅资讯
      name: 'Wlnews',
      component: () => import('components/Wlnews')
    },
    {
      path: '/wlactive', // 文旅资讯
      name: 'Wlactive',
      component: () => import('components/Wlactive')
    },
    {
      path: '/publicserver', // 公共服务
      name: 'Publicserver',
      component: () => import('components/Publicserver')
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
