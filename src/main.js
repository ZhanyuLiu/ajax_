import Vue from 'vue'
import App from './App.vue'
import ajax from './ajax/ajax'
Vue.config.productionTip = false

// Vue.use(ajax);

new Vue({
  ajax,
  render: h => h(App),
}).$mount('#app')
