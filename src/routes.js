import App from './App.vue'
import Admin from './Admin.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    { path: '', component: App },
    { path: '/admin', component: Admin }

]

export default new VueRouter({mode: 'history', routes})