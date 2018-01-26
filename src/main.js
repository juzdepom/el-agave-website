import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

new Vue({
  el: '#app',
  routes,
  store,
  render: h => h(App)
})
