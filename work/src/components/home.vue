<template>
    <div>
        <topnav></topnav>
        <div style="position:relative">
            <searchnav></searchnav>
        </div>
        <div>
            <headnav></headnav>
        </div>
        <div>
            <containerone></containerone>
        </div>
        <div class="categrade">
            <!--美食，休闲娱乐-->
            <div class="cate-part">
                <div class="cate-index cate-food-index">
                    <catedetail 
                        :icon='catepare.food.iconName' 
                        :name='catepare.food.name'
                        :tags='catepare.food.tag'
                        :catedetail='catepare.food.catedetail'
                        ></catedetail>
                </div>
                <div class="cate-index cate-fun-index">
                    <catedetail 
                        :icon='catepare.fun.iconName' 
                        :name='catepare.fun.name'
                        :tags='catepare.fun.tag'
                        :catedetail='catepare.fun.catedetail'
                        ></catedetail>
                </div>
            </div>
            <!--结婚-->
            <div class="cate-part single">
                <catepiclay
                    :icon='catepare.marry.iconName' 
                    :name='catepare.marry.name'
                    :tags='catepare.marry.tag'
                    :imgs='catepare.marry.part'></catepiclay>
            </div>
            <!--丽人，亲子-->
            <div class="cate-part">
                <div class="cate-index cate-food-index">
                    <catedetail 
                        :icon='catepare.beauty.iconName' 
                        :name='catepare.beauty.name'
                        :tags='catepare.beauty.tag'
                        :catedetail='catepare.beauty.catedetail'
                        ></catedetail>
                </div>
                <div class="cate-index cate-fun-index">
                    <catedetail 
                        :icon='catepare.kids.iconName' 
                        :name='catepare.kids.name'
                        :tags='catepare.kids.tag'
                        :catedetail='catepare.kids.catedetail'
                        ></catedetail>
                </div>
            </div>
            <!--家装-->
            <div class="cate-part single">
                <catepiclay
                    :icon='catepare.house.iconName' 
                    :name='catepare.house.name'
                    :tags='catepare.house.tag'
                    :imgs='catepare.house.part'></catepiclay>
            </div>
        </div>
        <!--底部-->
            <foot></foot>
    </div>
</template>

<script>
import topnav from '@/components/common/topNav'
import searchnav from "@/components/common/SearchNav"
import headnav from '@/components/common/headNav'
import containerone from '@/components/pages/homepart/containerone'
import catedetail from '@/components/pages/homepart/catedetail'
import catepiclay from '@/components/pages/homepart/vatepiclay'
import foot from '@/components/common/foot'
import {mapMutations} from 'vuex';
export default {
    name:'home',
    components:{
        topnav,searchnav,headnav,containerone,catedetail,catepiclay,foot
    },
    data(){
        return{
           catepare:{
               food:{
                   iconName:'icon iconfont icon-meishi',
                   name:'美食',
                   tag:['小吃快餐','本帮江浙菜','面包甜点','霸王餐'],
                   catedetail:[
                       {name:'哥老官重庆美蛙鱼头',star:5,commont:4550,label:'川味火锅/麻辣火锅',address:'吴山广场/河坊街',price:133,isorder:true,ispart:true,imgurl:'../../../static/img/food/food01.jpg'},
                       {name:'天伦里餐厅',star:5,commont:3799,label:'浙菜',address:'西湖北线/黄龙',price:258,isorder:true,ispart:false,imgurl:'../../../static/img/food/food02.jpg'},
                       {name:'海底捞火锅',star:5,commont:21988,label:'火锅',address:'庆春路沿线',price:136,isorder:true,ispart:true,imgurl:'../../../static/img/food/food03.jpg'},
                       {name:'锅小二·养心鸡汤锅',star:5,commont:9967,label:'火锅',address:'湖滨',price:103,isorder:true,ispart:false,imgurl:'../../../static/img/food/food04.png'},
                       {name:'茶人村-百年经典演绎杭帮味道',star:5,commont:3153,label:'浙菜',address:'龙井/虎跑',price:128,isorder:true,ispart:false,imgurl:'../../../static/img/food/food05.jpg'},
                       {name:'喜桐锅料理',star:5,commont:35,label:'火锅',address:'凤起路沿线',price:325,isorder:true,ispart:false,imgurl:'../../../static/img/food/food06.jpg'}
                    ]
                },
                fun:{
                   iconName:'icon iconfont icon-xiuxian',
                   name:'休闲娱乐',
                   tag:['按摩/足疗','洗浴/汗蒸','酒吧'],
                   catedetail:[
                       {name:'江南玉璞',star:5,commont:5347,label:'按摩/足疗',address:'星光大道',price:236,isorder:false,ispart:false,imgurl:'../../../static/img/fun/fun01.jpg'},
                       {name:'Xcape异时刻密室逃脱',star:5,commont:4114,label:'密室',address:'武林广场',price:97,isorder:false,ispart:false,imgurl:'../../../static/img/fun/fun02.jpg'},
                       {name:'胤隆汇',star:4.5,commont:14220,label:'洗浴/汗蒸',address:'钱江新城',price:173,isorder:true,ispart:false,imgurl:'../../../static/img/fun/fun03.jpg'},
                       {name:'海茵汇温泉',star:4.5,commont:7138,label:'洗浴/汗蒸',address:'开发区/高教园',price:159,isorder:true,ispart:false,imgurl:'../../../static/img/fun/fun04.jpg'},
                       {name:'御隆汤水世界',star:5,commont:8903,label:'洗浴/汗蒸',address:'下沙',price:93,isorder:true,ispart:false,imgurl:'../../../static/img/fun/fun05.jpg'},
                       {name:'舒脊坊',star:5,commont:14,label:'按摩/足疗',address:'拱墅区',price:153,isorder:true,ispart:false,imgurl:'../../../static/img/fun/fun06.jpg'}
                    ]
                },
                beauty:{
                   iconName:'icon iconfont icon-huazhuangpin',
                   name:'丽人',
                   tag:['美发','美容/SPA','美甲美睫'],
                   catedetail:[
                       {name:'侨治发型',star:5,commont:5778,label:'美发',address:'西湖北线/黄龙',price:847,isorder:false,ispart:false,imgurl:'../../../static/img/beauty/beauty01.jpg'},
                       {name:'苑苑形象设计&美甲',star:5,commont:3859,label:'美发',address:'高新文教区',price:260,isorder:false,ispart:false,imgurl:'../../../static/img/beauty/beauty02.jpg'},
                       {name:'杜尚发型',star:5,commont:1903,label:'美发',address:'下沙',price:224,isorder:true,ispart:false,imgurl:'../../../static/img/beauty/beauty03.jpg'},
                       {name:'自由手艺人',star:5,commont:1196,label:'美发',address:'城西银泰',price:299,isorder:false,ispart:false,imgurl:'../../../static/img/beauty/beauty04.jpg'},
                       {name:'蜜炫造型M.shine',star:5,commont:1882,label:'美发',address:'朝晖地区',price:686,isorder:false,ispart:false,imgurl:'../../../static/img/beauty/beauty05.jpg'},
                       {name:'In Style 造型',star:5,commont:530,label:'美发',address:'凤起路沿线',price:986,isorder:false,ispart:false,imgurl:'../../../static/img/beauty/beauty06.jpg'}
                    ]
                },
                kids:{
                   iconName:'icon iconfont icon-airudiantubiaohuizhi-zhuanqu_qinzichengchang',
                   name:'亲子',
                   tag:['儿童摄影','儿童乐园','早教中心'],
                   catedetail:[
                       {name:'哈妮儿童摄影',star:5,commont:2080,label:'儿童摄影',address:'凤起路沿线',price:2180,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids01.jpg'},
                       {name:'韩国维尼小熊儿童摄影Korea  Winnie Baby Studio',star:5,commont:1517,label:'儿童摄影',address:'吴山广场/河坊街',price:1533,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids02.jpg'},
                       {name:'晨夕儿童摄影',star:5,commont:847,label:'亲子照',address:'天城路沿线',price:787,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids03.jpg'},
                       {name:'韩国童感TOUCH PHOTO儿童摄影',star:5,commont:362,label:'儿童摄影',address:'南山路',price:4213,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids04.jpg'},
                       {name:'茜尔维亚产后修身连锁',star:5,commont:687,label:'产后恢复',address:'朝晖地区',price:6614,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids05.jpg'},
                       {name:'杭州禧月阁母婴护理中心',star:5,commont:268,label:'月子会所',address:'西溪',price:88000,isorder:false,ispart:false,imgurl:'../../../static/img/kids/kids06.jpg'}
                    ]
                },
                marry:{
                    iconName:'icon iconfont icon-zuanjienvjie',
                    name:'结婚',
                    tag:['个性写真','婚纱摄影','婚宴'],
                    part:[
                        {name:'摄影',imgurl:'../../../../static/img/marry/marry01.png'},
                        {name:'婚礼策划',imgurl:'../../../../static/img/marry/marry02.png'},
                        {name:'婚纱礼服',imgurl:'../../../../static/img/marry/marry03.png'},
                        {name:'婚宴',imgurl:'../../../../static/img/marry/marry04.png'},
                        {name:'旅拍',imgurl:'../../../../static/img/marry/marry05.png'}
                    ]
                },
                house:{
                    iconName:'icon iconfont icon-jiazhuang',
                    name:'家装',
                    tag:['家具家居','装修设计','建材'],
                    part:[
                        {name:'家装卖场',imgurl:'../../../../static/img/house/house01.png'},
                        {name:'婚礼策划',imgurl:'../../../../static/img/house/house02.png'},
                        {name:'婚纱礼服',imgurl:'../../../../static/img/house/house03.png'},
                        {name:'婚宴',imgurl:'../../../../static/img/house/house04.png'},
                        {name:'旅拍',imgurl:'../../../../static/img/house/house05.png'}
                    ]
                }
           }
        }
    },
    computed:{
        ...mapMutations(['judgeLogin'])
    },
    watch:{
        judgeLogin:function(){
            console.log(1);
        }
    }
}
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    .categrade{
        width: 1190px;
        margin: 0 auto;
    }
    .categrade .cate-part{
        margin-top: 29px;
        width: 100%;
        display: inline-block;
    }
    .categrade .cate-part.single{
        background: #fff;
    }
    .categrade .cate-part .cate-index{
        display: inline-block;
        width: 590px;
    }
    .categrade .cate-part .cate-index.cate-food-index{
        margin-right: 5px
    }
</style>

