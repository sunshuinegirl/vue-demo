<template>
    <div class="lay" @mouseover="overlay()" @mouseleave="noverlay()">
        <img :src="imgs.imgurl" />
        <div class="pic-title-bg"></div>
        <div class="laytitle">{{imgs.name}}</div>
        <div class="pic-overlay"></div>
    </div>
</template>

<script>
export default {
    name:'pic',
    data(){
        return{

        }
    },
    props:{
        imgs:{type:Object}
    },
    methods:{
        overlay:()=>{
            console.log('鼠标进入');
        },
        noverlay:()=>{
            console.log('鼠标移除')
        }
    }
}
</script>

<style lang="less" scoped>
.lay{
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
    .pic-title-bg{
        position: absolute;
        width: 100%;
        bottom:0;
        height: 50px;
        opacity: .5;
        background: -webkit-linear-gradient(-180deg,#b06767,#4f2929);
        background: linear-gradient(-180deg,#b06767,#4f2929);
    }
    .laytitle{
        position: absolute;
        width: 100%;
        bottom:0;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        z-index: 2;
    }
    .pic-overlay{
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;;
        top: 0px;
        left: 0px;
        background: hsla(0,0%,100%,.2);
    }
}
</style>
