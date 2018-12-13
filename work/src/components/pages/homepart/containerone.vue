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

<style scoped>
    .containerone{
        width: 1190px;
        margin: 0 auto;
    }
    .clearfix{
        clear: both;
    }
    .containerone .item{
        float: left;
        
    }
    .containerone .center,.right{
        position: relative;
        margin-top: 10px;
        display: block;
        margin-left: 10px;
    }
    
</style>
