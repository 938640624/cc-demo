import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import './components/cc-jsx/index'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import 'cesium/Widgets/widgets.css'


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.filter('status', function(val, a) {
  return val + a + "全局过滤器"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
