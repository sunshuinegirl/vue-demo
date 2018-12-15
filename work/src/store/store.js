import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    logoHomeIshide:true,
    cityName:'杭州',
    searchValue:'',
    isLogin:0,
    userData:{
        showUserName:'dpuser_96088667497',
        commont:1,
        store:2,
        group:0
    }
    
}
const mutations = {
    setlogin(state){
        state.isLogin = 1;
    },
    setNologin(state){
        state.isLogin = 0;
    },
    judgeLogin(state){
        if(state.isLogin === 0){
            //未登录
            console.log('进入mutation未登录方法')
            $('.no-login').removeClass('hide');
            $('.has-login').addClass('hide');
        }else if(state.isLogin === 1){
            //已登录
            console.log('进入mutation已登录方法')
            $('.no-login').addClass('hide');
            $('.has-login').removeClass('hide');
        }
        
    }
}
export default new Vuex.Store({
    state,mutations
})