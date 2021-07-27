import Vue from 'vue'
import Vuex from 'vuex'
import {
    state,
    mutations,
    actions
} from './store.js'

Vue.use(Vuex)


const store = new Vuex.Store({
    mutations,
    state,
    actions
})


export default store