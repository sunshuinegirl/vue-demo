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
        group:0,
        userDay:'登录大众点评，发现品质生活',
        userPic:'../../../static/img/login/hello.png'
    }
    
}
const mutations = {
    setlogin(state){
        state.isLogin = 1;
        state.userData.userDay = '您已使用大众点评1239天';
        state.userData.userPic = '../../../static/img/login/login.png';
    },
    setNologin(state){
        state.isLogin = 0;
        state.userData.userDay = '登录大众点评，发现品质生活';
        state.userData.userPic = '../../../static/img/login/hello.png';
    },
    judgeLogin(state){
        if(state.isLogin === 0){
            //未登录
            $('.no-login').removeClass('hide');
            $('.has-login').addClass('hide');
        }else if(state.isLogin === 1){
            //已登录
            $('.no-login').addClass('hide');
            $('.has-login').removeClass('hide');
        }
        
    }
}
export default new Vuex.Store({
    state,mutations
})