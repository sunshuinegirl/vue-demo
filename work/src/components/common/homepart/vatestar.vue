<template>
    <div class="cate-con-item">
        <div class="cate-item">
            <div class="cate-img">
                <img :src="item.imgurl"/>
            </div>
            <div class="cate-info">
                <span class="shopname">
                    <span class="name-desc">{{item.name}}</span>
                    <span class="shop-tag order">
                        <span :class="{isHide:item.isorder}">
                            <i class="icon iconfont icon-dingdanguanli"></i>
                        </span>
                    </span>
                    <span class="shop-tag part">
                        <span :class="{isHide:item.ispart}">
                            <i class="icon iconfont icon-tubiao-"></i>
                        </span>
                    </span>
                </span>
                <div class="star-info">
                    <el-rate
                        v-model="item.star"
                        disabled
                        text-color="#f90"></el-rate>
                    <span class="comment">{{item.commont}}条点评</span>
                </div>
                <div class="area-info">
                    <span class="regin-name">{{item.address}}</span>
                    <span class="main-name">{{item.label}}</span>
                </div>
                <div class="price">
                    <span>￥{{item.price}}/人</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'vatestar',
    data(){
        return{

        }
    },
    props:{
        item:{type:Object}
    }
}
</script>

<style>
    .el-rate .el-rate__item .el-rate__icon{
        font-size: 12px
    }
</style>

<style lang="less" scoped>
    .cate-con-item{
        height: 190px;
        padding: 0 10px;
        display: inline-block;
        position: relative;
        margin-bottom: 10px;
        .cate-item{
            display: block;
            color: #333;
            .cate-img{
                width: 170px;
                height: 96px;
                display: block;
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%
                }
            }
            .cate-info{
                margin-top: 12px;
                max-width: 170px;
                overflow: hidden;
                text-overflow: ellipsis;
                .shopname{
                    max-width: 170px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    vertical-align: middle;
                    line-height: 18px;
                    display: inline-table;
                    cursor: pointer;
                    .name-desc{
                        display: inline-block;
                        font-size: 16px;
                        color: #333;
                        max-width:120px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-right: 5px;
                        vertical-align: middle;
                        line-height: 19px;
                        padding-top: 1px;
                        word-wrap: normal;
                        white-space: nowrap;
                        &:hover{
                            color: #409EFF
                        }
                    }
                    .shop-tag{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        max-width: 100%;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        vertical-align: middle;
                        .iconfont{
                            font-size: 16px
                        }
                    }
                    .shop-tag.order .iconfont{
                        color: #67C23A;
                    }
                    .shop-tag.part .iconfont{
                        color: #E6A23C;
                    }
                }
                .star-info,.area-info,.price{
                    font-size: 11px;
                    color: #999;
                    margin-top: 6px;
                    line-height: 11px;
                    height: 12px;
                }
                .star-info{
                    .el-rate{
                        float: left;
                        width: 70px;
                        vertical-align: middle;
                        font-size: 12px;
                        letter-spacing: -5px
                    }
                    .comment{
                        margin-left:4px;
                        vertical-align:middle;
                        line-height:13px;
                        white-space: nowrap;
                        word-wrap: normal;
                        text-overflow:ellipsis;
                        overflow: hidden;
                        height:12px;
                        float: right;
                    }
                }
                .area-info{
                    span{
                        display:inline-block;
                        line-height:13px;
                        width:50%;
                        white-space: nowrap;
                        word-wrap: normal;
                        text-overflow:ellipsis;
                        overflow:hidden;
                    }
                    span.main-name{
                        float:left;
                    }
                    span.regin-name{
                        float:right;
                    }
                }
            }
        }
    }
</style>

