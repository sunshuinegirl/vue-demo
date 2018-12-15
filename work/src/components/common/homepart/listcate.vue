<template>
    <div>
        <div class="listcate">
            <ul class="cate-menu">
                <li v-for="item in menu" @mouseover="showListDetail()" @mouseleave="closeLIst()">
                    <span class="container">
                        <el-button class="first-item" type="text">{{item.name}}</el-button>
                        <template v-for="list in item.items">
                            <el-button type="text">{{list}}</el-button>
                        </template>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'listcate',
    data(){
        return{
            menu:[
                {name:'美食',items:['火锅','人气聚餐']},
                {name:'休闲娱乐',items:['足疗','KTV']},
                {name:'结婚',items:['婚纱摄影','婚礼策划']},
                {name:'电影演出赛事',items:['电影院']},
                {name:'丽人',items:['美发','医学美容']},
                {name:'酒店',items:['五星/豪华','经济连锁']},
                {name:'亲子',items:['亲子摄影','早教中心']},
                {name:'周边游',items:['景点','水上娱乐']},
                {name:'运动健身',items:['健身中心']},
                {name:'购物',items:['综合商场','鞋包服饰']},
                {name:'家装',items:['装修设计','定制家居']},
                {name:'学习培训',items:['外语','音乐']},
                {name:'生活服务',items:['快照','家政']},
                {name:'医疗健康',items:['齿科','体检中心']},
                {name:'爱车',items:['洗车','维修保养']},
                {name:'宠物',items:['宠物店','宠物医院']}
            ]
        }
    },
    methods:{
        showListDetail:()=>{

        },
        closeLIst:()=>{

        }
    }
}
</script>

<style scoped>
    .listcate{
        width: 210px;
        height: 520px;
        background:#383131;
        padding: 4px 0;
    }
    .listcate ul{
        height: 512px;
    }
    .listcate ul li{
        list-style-type: none;
        padding-left: 15px;
        height: 32px;
        width: 195px;
        line-height: 32px
    }
    .listcate  .cate-menu .container{
        display: inline-block;
        width: 185px;
        overflow: hidden;
        clear: both;
        height: 32px;
        line-height: 32px;
    }
    .listcate  .cate-menu .container .el-button{
        padding-left: 10px;
        font-size: 12px;
        float: left;
        color: #ccc;
    }
    .listcate  .cate-menu .container .el-button:hover{
        color:#409EFF
    }
    .listcate  .cate-menu .container .first-item{
        padding-left: 0;
        font-size: 15px;
        text-align: left;
        letter-spacing: 1px;
        color: #fff;
    }
</style>