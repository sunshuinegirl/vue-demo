<template>
    <div>
        <nav class="topnav">
            <div class="top-nav-container clearflx">
                <div class="group home-page ">
                    <span :class="{Hide:logoHomeIshide}">
                        <span class="item">
                            <i class="icon iconfont icon-shouye"></i>
                            大众点评首页
                        </span>
                    </span>
                </div>
                <div class="group nav-menu">
                    <el-button type="text" class="item write-dp">写点评</el-button>
                    <span class="seprate">|</span>
                    <span class="login-container no-login">
                        <el-button class="item" type="text" @click="toLogin()">你好，请登录</el-button>
                        <el-button class="item register" type="text">免费注册</el-button>
                    </span>
                    <el-dropdown trigger="hover" class="item has-login hide">
                        <span class="el-dropdown-link">
                            {{userData.showUserName}}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix">个人设置</el-dropdown-item>
                            <el-dropdown-item class="clearfix">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="seprate">|</span>
                    <el-dropdown trigger="hover" class="item">
                        <span class="el-dropdown-link">
                            个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix">我的点评</el-dropdown-item>
                            <el-dropdown-item class="clearfix">我的收藏</el-dropdown-item>
                            <el-dropdown-item class="clearfix">我的团购</el-dropdown-item>
                            <el-dropdown-item class="clearfix">我的部落</el-dropdown-item>
                            <el-dropdown-item class="clearfix">我的订座</el-dropdown-item>
                            <el-dropdown-item class="clearfix">我的设置</el-dropdown-item>  
                            <el-dropdown-item class="clearfix">酒店订单</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="seprate">|</span>
                    <el-dropdown trigger="hover" class="item">
                        <span class="el-dropdown-link">
                            商户服务<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix">商户中心</el-dropdown-item>
                            <el-dropdown-item class="clearfix">商户合作</el-dropdown-item>
                            <el-dropdown-item class="clearfix">旺铺宝</el-dropdown-item>
                            <el-dropdown-item class="clearfix">免费使用美团排队</el-dropdown-item>
                            <el-dropdown-item class="clearfix">招募餐饮代理</el-dropdown-item>
                            <el-dropdown-item class="clearfix">招募非餐饮代理</el-dropdown-item> 
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="seprate">|</span>
                    <el-dropdown trigger="hover" class="item">
                        <span class="el-dropdown-link">
                            帮助中心<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix">平台规则</el-dropdown-item>
                            <el-dropdown-item class="clearfix">联系客服</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="seprate">|</span>
                    <el-dropdown trigger="hover" class="item">
                        <span class="el-dropdown-link">
                            网站导航<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item class="clearfix">平台规则</el-dropdown-item>
                            <el-dropdown-item class="clearfix">联系客服</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'topnav',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['logoHomeIshide','userData'])
    },
    methods:{
        toLogin(){
            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>
<style>
    @import url("../../../static/css/topNav.css");
    .hide{
        display: none
    }
</style>
