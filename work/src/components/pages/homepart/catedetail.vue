<template>
    <div>
        <div class="lifecontainer">
            <vatetitle
                :icon="icon" :name='name' :tags="tags"></vatetitle>
            <div class="cate-con">
                <template v-for="item in catedetail">
                    <vatestar :item='item'></vatestar>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import vatestar from '@/components/common/homepart/vatestar'
import vatetitle from '@/components/common/homepart/vatedetailhead'
export default {
    name:'cate',
    components:{
        vatestar,vatetitle
    },
    data(){
        return{

        }
    },
    props:{
        catedetail:{type:Array},
        icon:{type:String},
        name:{type:String},
        tags:{type:Array}
    }
}
</script>

<style lang="less" scoped>
    .isHide{
        display: none;
    }
    .lifecontainer{
        background: #fff;
        width: 590px;
        display: inline-block;
        margin-top: 10px;
        .cate-con{
            padding: 0 10px 10px;
        }
    }
</style>
