<template>
    <div class="foot-container">
        <div class="index-foot">
            <div class="foot-links">
                <template v-for="item in items">
                    <div class="links-item">
                        <p class="link-title">{{item.name}}</p>
                        <ul class="link-panel">
                            <li v-for="list in item.lists" class="link-li">
                                <el-button type="text">{{list}}</el-button>
                            </li>
                        </ul>
                    </div>
                </template>
            </div>
            <div class="footer-declare">
                <div>
                    <p class="company-desc">
                        <span class="all-right">©2003-2018 dianping.com, All Rights Reserved.</span>
                        <span>本站发布的所有内容，未经许可，不得转载，详见 
                            <el-button type="text">《知识产权声明》</el-button>
                            <el-button type="text">《用户使用协议》</el-button>
                        </span>
                    </p>
                    <p class="company-desc">
                        增值电信业务经营许可证：沪B2-20040012<span class="all-right">|</span>互联网药品信息服务资格：(沪)-经营性-2017-0007
                    </p>
                    <div class="address">
                        网络文化经营许可证： 沪网文[2017]2375-139号
                        <span class="all-right">|</span>
                        用户举报热线：10100011
                        <span class="all-right">|</span>
                        单位：上海汉涛信息咨询有限公司
                        <span class="all-right">|</span>
                        地址：上海市长宁区安化路492号
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'foot',
    data(){
        return{
            items:[
                {name:'商务合作',lists:['餐饮代理商招募','商企通','聚宝盆商业开放平台','申请扫码点餐','推广服务','美团收银分销商招募','北极星商业开放平台']},
                {name:'公司信息',lists:['媒体报道','关于我们','投资者关系','联系我们','商户诚信公约','招聘','餐饮安全管理办法']},
                {name:'用户帮助',lists:['帮助','用户诚信公约','站务论坛','开发者']}
            ]
        }
    }
}
</script>

<style>
    .foot-container{
        width: 100%;
        min-width: 1190px;
        background: #f0f0f0;
        font-size: 12px;
        margin-top: 20px
    }
    .index-foot{
        width: 1190px;
        margin: 0 auto;
        padding: 30px 0;
    }
    .index-foot .foot-links{
        padding: 20px 0 15px 15px;
        border-bottom: 1px solid #e3e3e3;
        display: flex;
    }
    .index-foot .foot-links .links-item{
        width: 27%;
        display: inline-block;
    }
    .index-foot .foot-links .links-item .link-title{
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
    }
    .index-foot .foot-links .links-item .link-panel{
        margin-top: 10px;
    }
    .index-foot .foot-links .links-item .link-panel .link-li{
        line-height: 15px;
    }
    .index-foot .foot-links .links-item .link-panel .el-button{
        color: #777;
        font-size: 12px;
    }
    .index-foot .foot-links .links-item .link-panel .el-button:hover{
        color: #409EFF;
    }
    .foot-container ul{
        list-style: none
    }
    .index-foot .footer-declare{
        margin-top: 20px;
        text-align: center;
        color: #999;
    }
    .index-foot .footer-declare .company-desc{
        height: 35px;
        line-height: 35px;
    }
    .index-foot .footer-declare .company-desc .el-button{
        color: #999;
    }
    .index-foot .footer-declare .company-desc .el-button:hover{
        color: #409EFF;
    }
</style>
