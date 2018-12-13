<template>
    <div class="lifetitle">
        <div class="title-pic">
            <i :class="icon"></i>
        </div>
        <div class="title-dec">{{name}}</div>
        <div class="title-tag">
            <template v-for="tag in tags">
                <el-button size="mini">{{tag}}</el-button>
            </template>
        </div>
        <span class="all">
            <el-button type="text" size="mini">全部
                <i class="icon iconfont icon-you-"></i>
            </el-button>
        </span>
    </div>
</template>

<script>
export default {
    name:'catedetailtitle',
    data(){
        return{

        }
    },
    props:{
        name:{type:String},
        tags:{type:Array},
        icon:{type:String}
    }
}
</script>

<style scoped>
.lifetitle{
    height: 30px;
    padding-left: 15px;
    position: relative;
    padding-right: 15px;
    margin-bottom: 20px;
    margin-top: 20px
}
.lifetitle .title-pic{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #E6A23C;
    display: inline-block;
    position: absolute;
    top: 0;
    text-align: center;
    line-height: 30px;
}
.lifetitle .title-pic .iconfont{
    font-size: 20px;
    color: antiquewhite;
}
.lifetitle .title-dec{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    margin-left: 40px;
}
.lifetitle .title-dec,.title-tag{
    display: inline-block;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
}
.lifetitle .all{
    position: absolute;
    right: 19px;
    height: 14px;
    line-height: 14px;
    display: inline-block;
    width: 50px;
}
.lifetitle .all .el-button{
    color: #333;
    margin-right: -3px;
}
.lifetitle .all .el-button:hover{
    color: #409EFF;
}
</style>

