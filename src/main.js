import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
// import JSONbig from 'json-bigint'

// const str = '{"id": 1253585734669959168}'
// console.log(JSON.parse(str))
// console.log(JSONbig.parse(str).id.toString())

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
