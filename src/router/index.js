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
      path: '/aboutny', // 宁阳简介
      name: 'AboutNy',
      component: () => import('components/AboutNy')
    },
    {
      path: '/baoming', // 报名页面
      name: 'BaoMing',
      component: () => import('components/BaoMing')
    },
    {
      path: '/live', // 直播赛事
      name: 'Live',
      component: () => import('components/Live')
    },
    {
      path: '/videov', // 视频列表页面
      name: 'Videov',
      component: () => import('components/Videov')
    },
    {
      path: '/wlactive', // 文娱活动
      name: 'Wlactive',
      component: () => import('components/Wlactive'),
      children: [
        {
          path: 'wlactivedetail', // 文娱活动二级页面
          name: 'WlactiveDetail',
          component: () => import('components/Wlactive/WlactiveDetail')
        }
      ]
    },
    {
      path: '/wlseries', // 文旅专题
      name: 'Wlseries',
      component: () => import('components/Wlseries'),
      children: [
        {
          path: 'wldetail', // 文旅专题二级页面
          name: 'WlDetail',
          component: () => import('components/Wlseries/WlDetail')
        }
      ]
    },
    {
      path: '/publicserver', // 公共服务
      name: 'Publicserver',
      component: () => import('components/Publicserver')
    },
    {
      path: '/viewspot', // 景点详情页面
      name: 'ViewSpot',
      component: () => import('components/ViewSpot')
    },
    {
      path: '/publicdetail', // 公共服务详情
      name: 'PublicDetail',
      component: () => import('components/PublicDetail')
    },
    {
      path: '/legacy', // 非遗
      name: 'Legacy',
      component: () => import('components/Legacy')
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
