<template>
    <div class="loginright">
        <div class="userlogin">
            <div class="userPic"><img :src="userData.userPic" /></div>
            <div class="userHello">{{ userHello }}</div>
            <div class="useDay">{{userData.userDay}}</div>
            <div class="userOpr">
                <div class="no-login ">
                    <el-button type="primary" size="mini" @click="toLogin()">登录</el-button>
                    <el-button type="primary" size="mini">注册</el-button>
                </div>
                <div class="has-login hide">
                    <span class="log-detail">
                        <div class="info">待点评</div>
                        <div class="info-count">{{userData.commont}}</div>
                    </span>
                    <span class="log-detail">
                        <div class="info">收藏</div>
                        <div class="info-count">{{userData.store}}</div>
                    </span>
                    <span class="log-detail">
                        <div class="info">团购券</div>
                        <div class="info-count">{{userData.group}}</div>
                    </span>
                </div>
            </div>
        </div>

        <div class="vip-info">
            <div class="vip-info-title">
                <span class="list-title" @mouseenter="currentInfo('re')">
                    <span :class="{current:hideData.rehide}">
                        <div class="img">
                            <i class="icon iconfont icon-wenben"></i>
                        </div>
                        <div class="vip-name">热帖</div>
                    </span>
                </span>
                <span class="list-title" @mouseenter="currentInfo('vip')">
                    <span :class="{current:hideData.viphide}">
                        <div class="img">
                            <i class="icon iconfont icon-huiyuanhuangguanguanjun-xianxing"></i>
                        </div>
                        <div class="vip-name">vip排行</div>
                    </span>
                </span>
                <span class="list-title" @mouseenter="currentInfo('house')">
                    <span :class="{current:hideData.househide}">
                        <div class="img">
                            <i class="icon iconfont icon-xiaoxi"></i>
                        </div>
                        <div class="vip-name">部落</div>
                    </span>
                </span>
            </div>
            <div :class="{hide:!hideData.rehide}">
                <div class="hot-post ">
                    <el-button type="text"> 狂送100张100元代金券！付小</el-button>
                    <el-button type="text"> 9月橙V特权火热升级！40000</el-button>
                    <el-button type="text"> 惊呆了是什么让减肥花季少女们管不</el-button>
                    <el-button type="text"> 8月橙V特权！点亮VIP，200</el-button>
                    <el-button type="text"> 狂送100张100元代金券！付小</el-button>
                    <el-button type="text"> 9月橙V特权火热升级！40000</el-button>
                    <el-button type="text"> 惊呆了是什么让减肥花季少女们管不</el-button>
                    <el-button type="text"> 8月橙V特权！点亮VIP，200</el-button>
                </div>
            </div>
            <div :class="{hide:!hideData.viphide}">
                <div class="vip-star">
                    <div class="vip-item">
                        <span class="vip-pic">
                            <img :src="userData.userPic"/>
                        </span>
                        <div class="vip-detail">
                            <span class="vip-name">卡佩落</span>
                            <div class="fans">
                                <span class="comment">优评358</span>
                                <span class="fen">粉丝2682</span>
                            </div>
                        </div>
                    </div>
                    <div class="vip-item">
                        <span class="vip-pic">
                            <img :src="userData.userPic"/>
                        </span>
                        <div class="vip-detail">
                            <span class="vip-name">卡佩落</span>
                            <div class="fans">
                                <span class="comment">优评358</span>
                                <span class="fen">粉丝2682</span>
                            </div>
                        </div>
                    </div>
                    <div class="vip-item">
                        <span class="vip-pic">
                            <img :src="userData.userPic"/>
                        </span>
                        <div class="vip-detail">
                            <span class="vip-name">卡佩落</span>
                            <div class="fans">
                                <span class="comment">优评358</span>
                                <span class="fen">粉丝2682</span>
                            </div>
                        </div>
                    </div>
                    <div class="vip-item">
                        <span class="vip-pic">
                            <img :src="userData.userPic"/>
                        </span>
                        <div class="vip-detail">
                            <span class="vip-name">卡佩落</span>
                            <div class="fans">
                                <span class="comment">优评358</span>
                                <span class="fen">粉丝2682</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{hide:!hideData.househide}">
                <div class="vip-star">
                    <div class="vip-item">
                        <span class="vip-pic">
                            <img :src="userData.userPic"/>
                        </span>
                        <div class="vip-detail">
                            <span class="vip-name">家居装修</span>
                            <div class="fans">
                                <span class="fen">成员：9720</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name:'loginright',
    data(){
        return{
            userHello:'',
            hideData:{
                rehide:true,
                viphide:false,
                househide:false
            }
        }
    },
    methods:{
        ...mapMutations(['judgeLogin']),
        toLogin(){
            this.$router.push({
                path: '/login'
            })
        },
        sayHello(){
            let now = new Date();
            let hour = now.getHours();
            let helloWord;
            if(hour < 6){helloWord = 'Hi，凌晨好！'}
            else if(hour < 9){helloWord = 'Hi，早上好！'}
            else if(hour < 12){helloWord = 'Hi，上午好！'}
            else if(hour < 14){helloWord = 'Hi，中午好！'}
            else if(hour < 17){helloWord = 'Hi，下午好！'}
            else if(hour < 19){helloWord = 'Hi，傍晚好！'}
            else if(hour < 22){helloWord = 'Hi，晚上好！'}
            else{helloWord = 'Hi，夜里好！'}
            this.userHello = helloWord;
        },
        currentInfo(item){
            if(item === 're'){
                this.hideData.rehide = true;
                this.hideData.viphide = false;
                this.hideData.househide = false;
            }else if(item === 'vip'){
                this.hideData.rehide = false;
                this.hideData.viphide = true;
                this.hideData.househide = false;
            }else if(item === 'house'){
                this.hideData.rehide = false;
                this.hideData.viphide = false;
                this.hideData.househide = true;
            }
        }
    },
    computed:{
        ...mapState(['userData'])
    },
    mounted:function(){
        this.sayHello();
        this.judgeLogin();
    }
}
</script>


<style lang="less" scoped>
    .hide{
        display: none;
    }
    .loginright{
        width: 160px;
        height: 518px;
        background: #fff;
        padding: 0 15px;
        .userlogin{
            border-bottom: 1px dashed #eee;
            height: 165px;
            padding-top:16px; 
            .userPic{
                width: 60px;
                height: 60px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .userHello{
                text-align: center;
                color: #333;
                font-size: 12px;
                height: 14px;
                line-height: 14px;
                max-width: 180px;
                white-space: nowrap;
                margin-top: 7px;
            }
            .useDay{
                text-align: center;
                margin: 4px auto 0;
                color: #999;
                height: 14px;
                line-height: 14px;
                font-size: 12px;
            }
            .userOpr{
                text-align: center;
                margin: 5px auto 16px;
                .no-login,.has-login{
                    padding-top: 5px;
                    .log-detail{
                        display: inline-block;
                        cursor: pointer;
                        font-size: 12px;
                        width: 48px;
                        position: relative;
                        &:after{
                            content: '';
                            position: relative;
                            width: 0px;
                            border-right: 1px solid #ccc;
                            top: -25px;
                            right: -25px;
                        }
                        &:last-child{
                            top: -12px
                        }
                        &:last-child:after{
                            display: none;
                        }
                        .info{
                            color: #999;
                            height: 12px;
                            line-height: 12px;
                        }
                        .info-count{
                            color: #333;
                            height: 12px;
                            line-height: 12px;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
        .vip-info{
            width: 160px;
            background: #fff;
            height: 250px;
            padding-top: 18px;
            padding-bottom: 18px;
            .vip-info-title{
                text-align: center;
                margin-bottom: 18px;
                height: 49px;
                .list-title{
                    display: inline-block;
                    color: #777;
                    font-size: 12px;
                    cursor: pointer;
                    width: 48px;
                    height: 47px;
                    .iconfont{
                        font-size: 24px;
                        margin: 0 auto;
                        color: #777;
                    }
                    .vip-name{
                        padding-bottom: 5px;
                        display: inline-block;
                    }
                    .current{
                        .iconfont{
                            color: #409EFF;
                        }
                        .vip-name{
                            color: #409EFF;
                            border-bottom: 2px solid #409EFF;
                        }
                    }
                }
            }
            .hot-post{
                .el-button{
                    font-size: 12px;
                    width: 100%;
                    height: 13px;
                    line-height: 13px;
                    overflow: hidden;
                    margin: 0 auto;
                    color: #999;
                    &:hover{
                        color: #409EFF;
                    }
                }
            }
            .vip-star{
                .vip-item{
                    height: 34px;
                    margin-bottom: 18px;
                    position: relative;
                    .vip-pic{
                        width: 34px;
                        height: 34px;
                        display: inline-block;
                        position: absolute;
                        img{
                            width: 100%;
                            height: 100%
                        }
                    }
                    .vip-detail{
                        font-size: 12px;
                        margin-left: 41px;
                        height: 34px;
                        .vip-name{
                            color: #333;
                            display: inline-block;
                            height: 17px;
                            line-height: 17px
                        }
                        .fans{
                            font-size: 12px;
                            color: #999;
                            height: 17px;
                            line-height: 17px;
                            .fen{
                                border-right: none;
                            }
                            .comment,.fen{
                                height: 12px;
                                line-height: 12px;
                                border-right: 1px solid #ccc;
                                padding-right: 4px;
                                display: inline-block;
                                vertical-align: middle
                            }
                        }
                    }
                }
            }
        }
    }
</style>
