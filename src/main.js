import Vue from 'vue'
import App from './App.vue'

import TypeNav from "@/components/TypeNav";
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)

import router from './router'
//引入仓库进行注册
import store from "@/store";

new Vue({
  render: h => h(App),
  //注册路由，kv一致
  router,
  store
}).$mount('#app')

