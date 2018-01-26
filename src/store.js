import Vue from 'vue'
import Vuex from 'vuex'
import { mainMenu } from './data/Menu'
import { openHours, aboutUs, numbers, supportStudents, deals } from './data/Data'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menu: Array,
        openHours: String,
        aboutUs: String,
        numbers: {},
        supportStudents: String,
        deals: String,
    },
    mutations: {
        getData( state ){
            //axios request.
            state.menu = mainMenu
            state.openHours = openHours
            state.aboutUs = aboutUs
            state.numbers = numbers
            state.supportStudents = supportStudents
            state.deals = deals
        }
    },
    actions: {
        getData({ commit, state }){
            //axios request data from firebase.
            commit('getData')
        }
    },
    getters: {
        menu( state ){
            return state.menu
        },
        openHours( state ){
            return state.openHours
        },
        aboutUs( state ){
            return state.aboutUs
        },
        numbers( state ){
            return state.numbers
        },
        supportStudents( state ){
            return state.supportStudents
        },
        deals( state ){
            return state.deals
        }
    }

})