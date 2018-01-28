import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import store from './store'

Vue.use(VueResource)

new Vue({
  el: '#app',
  routes,
  store,
  render: h => h(App)
})
