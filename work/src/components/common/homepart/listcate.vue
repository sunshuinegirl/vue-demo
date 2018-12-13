<template>
    <div>
        <div class="listcate">
            <ul class="cate-menu">
                <li v-for="item in menu">
                    <span class="container">
                        <el-button class="first-item" type="text">{{item.name}}</el-button>
                        <template v-for="list in item.items">
                            <el-button type="text">{{list.listName}}</el-button>
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
                {name:'美食',items:[{listName:'火锅'},{listName:'人气聚餐'}]},
                {name:'休闲娱乐',items:[{listName:'足疗'},{listName:'KTV'}]},
                {name:'结婚',items:[{listName:'婚纱摄影'},{listName:'婚礼策划'}]},
                {name:'电影演出赛事',items:[{listName:'电影院'}]},
                {name:'丽人',items:[{listName:'美发'},{listName:'医学美容'}]},
                {name:'酒店',items:[{listName:'五星/豪华'},{listName:'经济连锁'}]},
                {name:'亲子',items:[{listName:'亲子摄影'},{listName:'早教中心'}]},
                {name:'周边游',items:[{listName:'景点'},{listName:'水上娱乐'}]},
                {name:'运动健身',items:[{listName:'健身中心'}]},
                {name:'购物',items:[{listName:'综合商场'},{listName:'鞋包服饰'}]},
                {name:'家装',items:[{listName:'装修设计'},{listName:'定制家居'}]},
                {name:'学习培训',items:[{listName:'外语'},{listName:'音乐'}]},
                {name:'生活服务',items:[{listName:'快照'},{listName:'家政'}]},
                {name:'医疗健康',items:[{listName:'齿科'},{listName:'体检中心'}]},
                {name:'爱车',items:[{listName:'洗车'},{listName:'维修保养'}]},
                {name:'宠物',items:[{listName:'宠物店'},{listName:'宠物医院'}]}
            ]
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