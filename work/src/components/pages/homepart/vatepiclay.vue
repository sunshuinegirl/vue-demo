<template>
    <div class="piclay">
        <div class="wedding-title">
            <vatetitle
                :icon="icon" :name='name' :tags="tags"></vatetitle>
        </div>
        <div class="pic-con">
            <div class="cate-pic-pure pic"><piclay :imgs="imgs[0]"></piclay></div>
            <div class="cate-pic-pure pic">
                <div class="pic-sub"><piclay :imgs="imgs[1]"></piclay></div>
                <div class="pic-sub"><piclay :imgs="imgs[2]"></piclay></div>
            </div>
            <div class="cate-pic-pure pic">
                <div class="pic-sub"><piclay :imgs="imgs[3]"></piclay></div>
                <div class="pic-sub"><piclay :imgs="imgs[4]"></piclay></div>
            </div>
        </div>
    </div>
</template>

<script>
import vatetitle from '@/components/common/homepart/vatedetailhead'
import piclay from '@/components/common/homepart/piclay'
export default {
    name:'vatepiclay',
    components:{
        vatetitle,piclay
    },
    data(){
        return{

        }
    },
    props:{
        icon:{type:String},
        name:{type:String},
        tags:{type:Array},
        imgs:{type:Array}
    }
}
</script>

<style scoped>
    .piclay{
        width: 100%;
        margin-top: 29px;
        background-color: #fff;
    }
    .piclay .wedding-title{
        margin-bottom: 20px;
    }
    .piclay .pic-con{
        padding: 0 20px 20px;
    }
    .piclay .pic-con .cate-pic-pure{
        display: inline-block;
    }
    .piclay .pic-con .pic{
        width: 370px;
        height: 436px;
        margin-right: 15px;
    }
    .piclay .pic-con .pic:last-child{
        margin-right:0
    }
    .piclay .pic-con .pic .pic-sub{
        width: 370px;
        height: 208px;
        text-align: center;
        margin-bottom: 20px;
    }
    .piclay .pic-con .pic .pic-sub:last-child{
        margin-bottom: 0
    }
</style>

