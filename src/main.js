// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/less/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import { Icon, Button, Swipe, SwipeItem, Lazyload, NavBar, Badge, BadgeGroup, Field, Slider, Popup, Collapse, CollapseItem } from 'vant'
import 'vant/lib/index.css'
import 'mescroll.js/mescroll.min.css' // 全局引入mescroll样式

Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.use(NavBar)
Vue.use(Badge)
Vue.use(BadgeGroup)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Slider)
Vue.use(VueAwesomeSwiper)
Vue.use(Popup)
Vue.use(Collapse).use(CollapseItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
