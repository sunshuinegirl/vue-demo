<template>
    <div class="cateContainer">
        <div class="head">
            <span class="allCate">
                <span>{{title}}</span>
                <i class="icon iconfont icon-liebiao"></i>
            </span>
            <el-button type="text">团购</el-button>
            <el-badge value="hot" class="item">
                <el-button type="text">霸王餐</el-button>
            </el-badge>
            <el-button type="text">社区论坛</el-button>
            <el-button type="text">预约订座</el-button>
            <el-badge value="new" class="item">
                <el-button type="text">2018年终盛典</el-button>
            </el-badge>
        </div>
    </div>
</template>

<script>
export default {
    name:'headNav',
    data(){
        return{
            title:'全部分类'
        }
    }
}
</script>

<style scoped>
    .cateContainer{
        width: 100%;
        min-width: 1190px;
        height: 35px;
        background-color: #fff; 
    }
    .head{
        width: 1190px;
        margin: 0 auto;
        height: 35px;
        line-height: 35px;
    }
    .head .allCate{
        display: inline-block;
        box-sizing: border-box;
        width: 210px;
        color: #fff;
        background-color: #409EFF;
        padding-left: 15px;
        font-size: 15px;
        margin-left: 0;
    }
    .head .allCate .iconfont{
        font-size: 26px;
        cursor: pointer;
        position: relative;
        left: 90px;
        top: 5px;
    }
    .head .el-button{
        font-size: 15px;
        margin-left: 50px;
        font-weight: 700;
        color: #333;
        position: relative;
    }
    .head .el-button:hover{
        color: #409EFF;
    }
</style>
