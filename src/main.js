// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// import Element from 'element-ui'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// Vue.use(Element, { size: 'small', zIndex: 3000 })
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
