<template>
    <div class="search-out">
        <div class="search-container clearfix">
            <img src="../../../static/img/logo.png" class="logoImg"/>
            <div class="city">
                <i class="icon iconfont icon-yiliaohangyedeICON-"></i>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        {{cityName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="searchBox">
                <span class="searchInput clearfix">
                    <el-input
                        placeholder="搜索商户名、地址、菜名、外卖等"
                        prefix-icon="el-icon-search"
                        v-model="searchValue"
                        size="medium">
                        <el-button slot="append" class="search">{{search}}</el-button>
                    </el-input>
                </span>
                <div class="hotSearch">
                    <span class="hotTips">大家都在搜：</span>
                    <span v-for="item in hotPoints" :key="item.val">
                        <template>
                            <el-button type="text">{{item.name}}</el-button>
                        </template>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'searchNav',
    data(){
        return{
            hotPoints:[
                {name:'嘉里中心',add:'',val:'jia'},
                {name:'来福士',add:'',val:'lai'},
                {name:'万象城',add:'',val:'wan'},
                {name:'外婆家',add:'',val:'wai'},
                {name:'一点点',add:'',val:'yi'},
                {name:'星巴克',add:'',val:'ba'}
            ],
            search:'搜索'
        }
    },
    computed:mapState(['cityName','searchValue'])
}
</script>

<style lang="less" scoped>
    .search-out{
        background-color: #fff;
        width: 100%;
        min-width: 1190px;
        .search-container{
            width: 1190px;
            margin: 0 auto;
            padding: 20px 0 5px;
            .logoImg{
                float: left;
            }
            .city{
                float: left;
                position: relative;
                font-size: 15px;
                line-height: 42px;
                padding: 0 10px;
                margin: 0 0 0 25px;
                z-index: 110;
                vertical-align: middle;
                .iconfont{
                    color: #409EFF;
                }
                &::before{
                    content: "|";
                    position: absolute;
                    left: -10px;
                    color: #e1e1e1;
                }
            }
            .searchBox{
                position: relative;
                float: left;
                margin-left: 85px;
                height: 75px;
                input.el-input__inner{
                    float: left;
                    width: 380px;
                    border: 2px solid #409EFF;
                    font-size: 12px;
                }
                .search{
                    background-color: #409EFF;
                    color: #fff;
                    width: 100px;
                    border-radius: 0;
                    height: 37px;
                }
                .hotSearch{
                    font-size: 12px;
                    overflow: hidden;
                    .hotTips{
                        color: #ccc
                    }
                    .el-button{
                        margin-right: 10px;
                        color: #999;
                        &:hover{
                            color: #409EFF
                        }
                    }
                }
            }
        }
        .clearfix{
            display: block;
            clear: both;
            overflow: hidden;
        }
    }
</style>
