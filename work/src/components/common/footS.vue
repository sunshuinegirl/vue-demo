<template>
    <div>
        <div class="foot-container">
            <p class="links">
                <el-button type="text">关于大众点评</el-button>
                |
                <el-button type="text">诚信公约</el-button>
                |
                <el-button type="text">网站帮助</el-button>
                |
                <el-button type="text">网站地图</el-button>
                |
                <el-button type="text">推广服务</el-button>
                |
                <el-button type="text">媒体报道</el-button>
                |
                <el-button type="text">人才招聘</el-button>
                |
                <el-button type="text">最新咨询</el-button>
                |
                <el-button type="text">站务论坛</el-button>
                |
                <el-button type="text">联系我们</el-button>
                |
                <el-button type="text">开发者</el-button>
                |
                <el-button type="text">聚宝盆餐饮开放平台</el-button> 
            </p>
            <p class="right">
                <span style="margin-right:10px">©2003-2018 dianping.com, All Rights Reserved.</span>
                <span>本站发布的所有内容，未经许可，不得转载，详见</span>
                <el-button type="text">《知识产权声明》</el-button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"footS"
}
</script>

<style lang="less" scoped>
    .foot-container{
        width: 1190px;
        margin: 10px auto 0;
        padding: 30px 0;
        .links,.right{
            color: #8c8c8c;
            text-align:center;
            font-size:12px;
            margin-bottom: 10px;
            .el-button{
                color: #8c8c8c;
                margin: 0 7px;
                &:hover{
                    color:#409EFF;
                }
            }
        }
    }
</style>
