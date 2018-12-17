<template>
    <div class="containerone clearfix">
        <div class="item">
            <listcate></listcate>
        </div>
        <div class="item center">
            <wheel></wheel>
        </div>
        <div class="item right">
            <loginright></loginright>
        </div>
    </div>
</template>

<script>
import listcate from '@/components/common/homepart/listcate'
import wheel from '@/components/common/homepart/wheel'
import loginright from '@/components/common/homepart/loginRight'
export default {
    name:'containerone',
    components:{
        listcate,wheel,loginright
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
    .containerone{
        width: 1190px;
        margin: 0 auto;
        .item{
            float: left;
        }
        .center,.right{
            position: relative;
            margin-top: 10px;
            display: block;
            margin-left: 10px;
        }
    }
    .clearfix{
        clear: both;
    }
</style>
