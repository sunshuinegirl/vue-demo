<template>
    <div class="outside">
        <div class="block">
            <el-carousel height="300px">
                <el-carousel-item v-for="img in imgs" :key="img.index">
                    <img :src="img.name"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="hot-cate">
            <div class="hot-detail">
                <div class="hot-title">
                    <i class="icon iconfont icon-leimupinleifenleileibie"></i>
                    <el-button type="text">热门分类</el-button>
                </div>
                <ul class="hot-detail-item">
                    <li v-for="cate in hotCate.cate" class="hotItem">
                        <el-button type="text">{{cate.name}}</el-button>
                    </li>
                </ul>
            </div>
            <div class="hot-detail">
                <div class="hot-title">
                    <i class="icon iconfont icon-weizhi"></i>
                    <el-button type="text">热门商圈</el-button>
                </div>
                <ul class="hot-detail-item">
                    <li v-for="market in hotCate.market" class="hotItem">
                        <el-button type="text">{{market.name}}</el-button>
                    </li>
                </ul>
            </div>
            <div class="hot-detail hot-last">
                <div class="hot-title">
                    <i class="icon iconfont icon-jiaotongxinxi"></i>
                    <el-button type="text">地铁线</el-button>
                </div>
                <ul class="hot-detail-item ">
                    <li v-for="line in hotCate.line" class="hotItem">
                        <el-button type="text">{{line.name}}</el-button>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name:'wheel',
    data(){
        return{
            imgs:[
                {name:'../../../static/img/wheel/wheel01.jpg',url:'',index:'1'},
                {name:'../../../static/img/wheel/wheel02.jpg',url:'',index:'2'},
                {name:'../../../static/img/wheel/wheel03.png',url:'',index:'3'},
                {name:'../../../static/img/wheel/wheel04.jpg',url:'',index:'4'},
                {name:'../../../static/img/wheel/wheel05.jpg',url:'',index:'5'}
            ],
            hotCate:{
                cate:[{name:'小吃快餐'},{name:'火锅'},{name:'本帮江浙菜'},{name:'面包甜点'},{name:'日本菜'},{name:'西餐'},{name:'饮品店'},{name:'川菜'},{name:'烧烤'}],
                market:[{name:'湖滨'},{name:'城西银泰'},{name:'下沙'},{name:'武林广场'},{name:'星光大道'},{name:'钱江新城'},{name:'西湖北线/黄龙'},{name:'龙井/虎跑'},{name:'西溪'}],
                line:[{name:'1号线'}]
            }
        }
    }
}
</script>


<style lang="less" scoped>
    .outside{
        .block{
            width: 770px;
            height: 300px;
            overflow: hidden;
            img{
                cursor: pointer;
            }
        }
        .hot-cate{
            background-color: #fff;
            width: 770px;
            height: 186px;
            margin-top: 10px;
            padding-top: 12px;
            padding-bottom: 10px;
            .hot-detail{
                text-align: center;
                display: table-cell;
                border-right: 1px dashed #eee;
                width: 289px;
                .hot-title{
                    border-bottom: 1px dashed #eee;
                    margin: 10px 26px 0;
                    padding-bottom: 21px;
                    height: 19px;
                    line-height: 19px;
                    cursor: pointer;
                    .iconfont{
                        font-size: 22px;
                        color: #409EFF;
                    }
                    .el-button{
                        font-size: 16px;
                        font-weight: 700;
                        color: #333;
                    }
                }
                .hot-detail-item{
                    text-align: left;
                    margin: 15px 26px 0;
                    list-style: none;
                    .hotItem{
                        width: 69px;
                        height: 30px;
                        line-height: 30px;
                        text-align: left;
                        display: inline-block;
                        margin-right: 10px;
                        max-width: 69px;
                        word-wrap: normal;
                        overflow: hidden;
                        .el-button{
                            font-size: 12px;
                            color: #333;
                            width: 69px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            text-align: left;
                            span{
                                text-overflow: ellipsis;
                            }
                            &:hover{
                               color: #409EFF; 
                            }
                        }
                    }
                }
            }
            .hot-last{
                width: 190px;
                border-right: none;
                .hot-detail-item{
                    .hotItem{
                        width: 35px;
                    }
                } 
            }
        }
    }
</style>
