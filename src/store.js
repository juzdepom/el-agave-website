import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { mainMenu } from './data/Menu'
import { openHours, aboutUs, numbers, supportStudents, deals } from './data/Data'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'https://el-agave-abd9b.firebaseio.com/';

var $http = require('http')


export default new Vuex.Store({
    state: {
        admin: {
            menu: Array,
            openHours: String,
            aboutUs: String,
            numbers: {},
            supportStudents: String,
            deals: String,
        }
    },
    mutations: {
        getData( state ){
            // $http.get('data.json')
            //     .then(response => {
            //         return response.json()
            //     })
            //     .then(data => {
            //         console.log('HERE IS DATA: ', data)
            //     })
            state.admin.menu = mainMenu
            state.admin.openHours = openHours
            state.admin.aboutUs = aboutUs
            state.admin.numbers = numbers
            state.admin.supportStudents = supportStudents
            state.admin.deals = deals
            // console.log('STATE ADMIN: ', state.admin)
            // firebase only allows .json



        }
    },
    actions: {
        getData({ commit, state }){
            // this.$http.post('data.json', state.admin)
            //     then(response => {
            //         console.log(response)
            //     }, error => {
            //         console.log(error)
            //     });
            commit('getData')
        }
    },
    getters: {
        menu( state ){
            return state.admin.menu
        },
        openHours( state ){
            return state.admin.openHours
        },
        aboutUs( state ){
            return state.admin.aboutUs
        },
        numbers( state ){
            return state.admin.numbers
        },
        supportStudents( state ){
            return state.admin.supportStudents
        },
        deals( state ){
            return state.admin.deals
        },
        admin( state ){
            return state.admin
        }
    }

})