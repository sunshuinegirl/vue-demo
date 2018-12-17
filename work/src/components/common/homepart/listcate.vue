<template>
    <div style="position:relative">
        <div class="listcate">
            <ul class="cate-menu" @mouseleave="closeLIst()">
                <li v-for="(item,index) in menu" @mouseover="showListDetail(index)">
                    <span class="container">
                        <el-button class="first-item" type="text">{{item.name}}</el-button>
                        <template v-for="list in item.items">
                            <el-button type="text">{{list}}</el-button>
                        </template>
                    </span>
                    <div class="sec-cate hide">
                        <div class="groups">
                            <div class="group" v-for="group in item.detail">
                                <div class="sec-title">
                                    <span class="channel-title">{{group.subname}}</span>
                                    <el-button class="more-cate" type="text">更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                                </div>
                                <div class="sec-items">
                                    <template v-for="secitems in group.subdetail">
                                        <el-button type="text" class="second-item">{{secitems}}</el-button>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
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
                {name:'美食',items:['火锅','人气聚餐'],detail:[
                    {subname:'菜系',subdetail:['火锅','本帮江浙菜','日本菜','面包甜点','咖啡厅','自助餐','小吃快餐','西餐','韩国料理','其他']},
                    {subname:'热门推荐',subdetail:['刺身','红烧鱼','牛排','烤鱼','三文鱼','意大利面']}
                ]},
                {name:'休闲娱乐',items:['足疗','KTV'],detail:[
                    {subname:'足疗洗浴',subdetail:['足疗按摩','洗浴/汗蒸']},
                    {subname:'玩乐',subdetail:['TKV','酒吧','密室逃脱','轰趴馆','茶馆','私人影院','网吧网咖','DIY手工坊','采摘/农家乐','文化艺术']}
                ]},
                {name:'结婚',items:['婚纱摄影','婚礼策划'],detail:[
                    {subname:'结婚',subdetail:['婚纱摄影','旅拍','婚宴','婚礼策划','婚纱礼服','西装定制','婚戒首饰','彩妆造型','司仪主持','婚礼跟拍']}
                ]},
                {name:'电影演出赛事',items:['电影院'],detail:[
                    {subname:'电影',subdetail:['电影院']},
                    {subname:'演出赛事',subdetail:['演出场馆','剧场/影院','音乐厅/礼堂','艺术中心/文化广场','热门演出','其他电影演出赛事']}
                ]},
                {name:'丽人',items:['美发','医学美容'],detail:[
                    {subname:'丽人',subdetail:['美发','美甲美睫','美容／SPA','瘦身纤体','瑜伽','舞蹈','韩式定妆','祛痘','纹身','化妆品','产后塑形']},
                    {subname:'医学美容',subdetail:['水光针','瘦脸针','抗衰老','双眼皮','玻尿酸','美白嫩肤','肉毒素','白瓷娃娃','激光溶脂','自体脂肪填充','开眼角']}
                ]},
                {name:'酒店',items:['五星/豪华','经济连锁'],detail:[
                    {subname:'高端酒店',subdetail:['五星级/豪华型','四星级/高档型']},
                    {subname:'性价比',subdetail:['三星级/舒适型','经济连锁']},
                    {subname:'特色酒店',subdetail:['情侣酒店','青年旅社','客栈']}
                ]},
                {name:'亲子',items:['亲子摄影','早教中心'],detail:[
                    {subname:'亲子摄影',subdetail:['儿童摄影','孕妇写真','满月照','百天照','上门拍','全家福']},
                    {subname:'亲子游乐',subdetail:['儿童乐园','婴儿游泳','亲子活动','亲子会所','儿童运动馆']},
                    {subname:'幼儿教育',subdetail:['早教中心','幼儿外语','幼儿才艺','幼儿园','托班/托儿所']},
                    {subname:'孕产护理',subdetail:['月子会所','月嫂','开奶催乳']}
                ]},
                {name:'周边游',items:['景点','水上娱乐'],detail:[
                    {subname:'周边玩乐',subdetail:['展馆展览','采摘/农家乐','温泉','动植物园','水上娱乐','滑雪','景点','旅游其他']}
                ]},
                {name:'运动健身',items:['健身中心'],detail:[
                    {subname:'专业健身',subdetail:['健身中心','武术场馆','游泳馆']},
                    {subname:'休闲运动',subdetail:['羽毛球馆','溜冰场','射箭馆','篮球场','桌球馆','网球场','攀岩馆','乒乓球馆','体育场馆','保龄球馆','更多运动']}
                ]},
                {name:'购物',items:['综合商场','鞋包服饰'],detail:[
                    {subname:'购物',subdetail:['综合商场','服饰鞋包','运动户外','珠宝饰品']}
                ]},
                {name:'家装',items:['装修设计','定制家居'],detail:[
                    {subname:'装修设计',subdetail:['装修公司','装修美图','装修资讯']},
                    {subname:'定制家居',subdetail:['全屋定制','家具定制','橱柜']},
                    {subname:'装修建材',subdetail:['地板','瓷砖石材','厨卫洁具','灯饰照明','油漆涂料','集成吊顶']},
                    {subname:'家具家居',subdetail:['成品家具','床品家纺','窗帘','家饰餐厨','智能家居','家用电器']},
                    {subname:'家装卖场',subdetail:['建材卖场','家居卖场','灯饰卖场']}
                ]},
                {name:'学习培训',items:['外语','音乐'],detail:[
                    {subname:'外语留学',subdetail:['英语','日语','韩语','雅思托福','留学申请','其他外语']},
                    {subname:'艺术兴趣',subdetail:['绘画','键盘乐器','弦乐器','书法','乐理声乐','民族乐器','花艺','烘焙','其他音乐培训']},
                    {subname:'职业技术',subdetail:['驾校','美容化妆','会计','厨艺','IT','其他职业技术']},
                    {subname:'升学辅导',subdetail:['全部升学辅导','艺考']}
                ]},
                {name:'生活服务',items:['快照','家政'],detail:[
                    {subname:'生活服务',subdetail:['快照冲印','文印图文','搬家运输','生活配送','家政服务','洗涤护理','生活缴费','社区服务','成人用品']},
                    {subname:'维修回收',subdetail:['家电数码维修','居家维修','回收']},
                    {subname:'周边设施',subdetail:['通信营业厅','售票点','银行','交通','房屋地产','政府机构','丧葬']},
                    {subname:'商业服务',subdetail:['律师服务','财务服务','金融','文化传媒']}
                ]},
                {name:'医疗健康',items:['齿科','体检中心'],detail:[
                    {subname:'医疗健康',subdetail:['口腔齿科','体检中心','医院','药店','中医','宠物医院','整形','妇幼医院','其他医疗']}
                ]},
                {name:'爱车',items:['洗车','维修保养'],detail:[
                    {subname:'爱车',subdetail:['美容洗车','维修保养','摩托车','加油站','停车场','汽车租赁','4S店／汽车销售','配件／车饰','交警队','汽车保险','年检站']}
                ]},
                {name:'宠物',items:['宠物店','宠物医院'],detail:[
                    {subname:'宠物',subdetail:['宠物店','宠物医院']}
                ]}
            ]
        }
    },
    methods:{
        showListDetail:(index)=>{
            $('.cate-menu li').eq(index).css({
                'background':'rgba(255,255,255,.2)'
            }).siblings().css({
                'background':'none'
            })
            $('.cate-menu li').eq(index).find('.sec-cate').removeClass('hide');
            $('.cate-menu li').eq(index).siblings().find('.sec-cate').addClass('hide');
        },
        closeLIst:()=>{
            $('.cate-menu li').find('.sec-cate').addClass('hide');
        }
    }
}
</script>


<style lang="less" scoped>
    .hide{
        display: none;
    }
    .listcate{
        width: 210px;
        height: 520px;
        background:#383131;
        padding: 4px 0;
        .cate-menu{
            height: 512px;
            li{
                list-style-type: none;
                padding-left: 15px;
                height: 32px;
                width: 195px;
                line-height: 32px;
                .container{
                    display: inline-block;
                    width: 185px;
                    overflow: hidden;
                    clear: both;
                    height: 32px;
                    line-height: 32px;
                    position: relative;
                    .el-button{
                        padding-left: 10px;
                        font-size: 12px;
                        float: left;
                        color: #ccc;
                        &:hover{
                            color:#409EFF
                        }
                    }
                    .first-item{
                        padding-left: 0;
                        font-size: 15px;
                        text-align: left;
                        letter-spacing: 1px;
                        color: #fff;
                    }
                }
                .sec-cate{
                    position: absolute;
                    height: 524px;
                    width: 395px;
                    z-index: 109;
                    left: 210px;
                    top: 0px;
                    background-color: #fff;
                    box-shadow: 2px 2px 6px rgba(0,0,0, .3);
                    border: 2px solid #409EFF;
                    border-left: none;
                    overflow: hidden;
                    .groups{
                        float: left;
                        padding-bottom: 10px;
                        max-height: 498px;
                        overflow: hidden;
                        margin: 0 34px;
                        .group{
                            line-height: 30px;
                            .sec-title{
                                border-bottom: 1px solid #eee;
                                position: relative;
                                min-width: 327px;
                                margin-bottom: 10px;
                                color: #333;
                                .channel-title{
                                    margin-top: 15px;
                                    display: inline-block;
                                    font-size: 15px;
                                    line-height: 35px;
                                }
                                .more-cate{
                                    position: absolute;
                                    height: 25px;
                                    line-height: 25px;
                                    right: 0;
                                    bottom: 16px;
                                    color: #333;
                                    &:hover{
                                        color: #409EFF;
                                    }
                                }
                            }
                            .second-item{
                                display: inline-block;
                                line-height: 20px;
                                width: 90px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding-right:23px;
                                font-size: 12px;
                                color: #777; 
                                text-align: left;
                                padding: 0px;
                                margin-left: 0;
                                &:hover{
                                    color: #409EFF;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
