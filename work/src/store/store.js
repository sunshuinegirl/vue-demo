import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    logoHomeIshide:true,
    loginData:{
        userName:'',
        passport:''
    },
    cityName:'杭州',
    searchValue:''
}
export default new Vuex.Store({
    state
})