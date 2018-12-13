<template>
    <div>
        <topnav></topnav>
        <div class="loginLogo">
            <img class="logoImg" src="../../../static/img/logo.png" />
            <span class="subLogo">登录</span>
        </div>
        <div class="main">
            <div class="login-wrap">
                <div class="mid-out">
                    <div class="mid-in">
                        <div class="tabs">手机密码登录</div>
                        <el-form ref="form" :model="loginData">
                            <el-form-item>
                                <el-input 
                                    v-model="loginData.userName" 
                                    size="small" 
                                    placeholder="手机号"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input 
                                    v-model="loginData.passport" 
                                    type="password"
                                    autocomplete="off"
                                    size="small" 
                                    placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <div class="oprate">
                                    <el-checkbox label="自动登录"></el-checkbox>
                                    <el-button type="text" class="foget">忘记密码</el-button>
                                </div>
                            </el-form-item>
                            <el-form-item style="margin-top:-15px">
                                <el-button 
                                    type="primary" 
                                    :loading="false"
                                    size="small"
                                    style="width:100%">登录</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="auto-wrapper">
                            <ul>
                                <li><i class="icon iconfont icon-qq"></i></li>
                                <li><i class="icon iconfont icon-weixin-copy"></i></li>
                                <li><i class="icon iconfont icon-weibo"></i></li>
                            </ul>
                            <span class="register">注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footS></footS>
    </div>
</template>
<script>
import topnav from '@/components/common/topNav'
import footS from '@/components/common/footS'
import {mapState} from 'vuex'
export default {
    name:"login",
    components:{
        topnav,footS
    },
    data(){
        return{
            
        }
    },
    computed:mapState(['loginData'])
}
</script>
<style scoped>
    .loginLogo{
        height: 48px;
        padding: 20px 0;
        width: 1190px;
        margin: 0 auto;
    }
    .loginLogo .logoImg{
        float: left;
    }
    .loginLogo .subLogo::before{
        position: absolute;
        content: '';
        width: 1px;
        left: 0;
        top: 12px;
        bottom: 20px;
        background: #dcdcdc;
    }
    .loginLogo .subLogo{
        color: #666;
        font-size: 20px;
        height: 32px;
        margin-left: 16px;
        padding: 6px 17px 10px;
        position: relative;
        float: left;
    }
    .main{
        width: 1190px;
        margin: 0 auto;
    }
    .main .login-wrap{
        width: 1190px;
        height: 510px;
        background: url('../../../static/img/login-bg-0e02c95f.png') 96px 47px no-repeat #f7f7f7;
        background-size: 634px 442px;
    }
    .main .login-wrap .mid-out{
        position: relative;
        zoom: 1;
        height: 510px;
        display: table-cell;
        padding-top: 76px;
        left: 818px;
    }
    .main .login-wrap .mid-out .mid-in{
        border: 1px solid #ebebeb;
        width: 290px;
        background: #fff;
        padding: 5px 0;
        padding-top: 25px;
    }
    .main .login-wrap .mid-out .mid-in .tabs{
        margin: 0 auto;
        width: 228px;
        height: 26px;
        color: #333333;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 2px solid #409EFF;
        padding-bottom: 5px;
    }
    .main .login-wrap .mid-out .mid-in .el-form{
        width: 228px;
        margin: 0 auto;
        margin-top: 30px;
        border-bottom: 1px dashed #e0e0e0;
    }
    .main .login-wrap .mid-out .mid-in .el-form .oprate{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: -20px;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper{
        width: 240px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul{
        margin-left: -40px;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul li{
        list-style-type: none;
        float: left;
        width: 40px
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul li i{
        font-size: 30px;
        cursor: pointer;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul li i.icon-qq{
        color: #409EFF;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul li i.icon-weixin-copy{
        color: #67C23A;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper ul li i.icon-weibo{
        color: #F56C6C;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper .register{
        cursor: pointer;
    }
    .main .login-wrap .mid-out .mid-in .auto-wrapper .register:hover{
        text-decoration: underline;
    }
</style>
