<template>
    <div id="cube-wrapper"
    :size="size"
    :class="[`cube-size-${size}`]">
        <div class="viewport">
            <div class="wrapper">
                <div class="block top">洗涤平台</div>  
                <div class="block bottom">自动化</div>
                <div class="block left">智能洗涤</div>
                <div class="block right">安全</div>  
                <div class="block front">便捷</div>  
                <div class="block back">迅洁</div>  
            </div>
        </div>
    </div>
</template>

<script>
/**
    Cube

    @param {String} size
        size: (small | default | big)
*/

    export default {
        name: "sp-cube",
        props:{
            size: {
                default: "default",
                type: String
            }
        }
    }
</script>

<style scoped>
    @import url("../../../style/color.css");

    $size: 40vw;
    $translate: 20vw;

    #cube-wrapper{
        position: absolute;
    }
    .viewport{
        position: relative;
        width: 100%;
        margin: 0px auto;
        margin-top: 25vh;
        perspective-origin: 50% 500px;
        perspective: 5000px;
    }
    .wrapper{
        position: relative;
        width: $size;
        height: $size;
        margin: 0px auto;
        transform-style: preserve-3d;
        animation: spin 14s infinite linear;
    }
    .block{
        position: absolute;
        text-align: center;
        line-height: $size;
        font-size: 4vw;
        top: 0;
        left: 0;
        width: $size;
        height: $size;
        border: 1px solid #aaa;
        transition: all 5s linear;
        transform-origin: center center center;
        color: #444;
        font-weight: lighter;
        animation: color 5s infinite linear;
    }
    .front{
        transform: translateZ($translate);
    }
    .back{
        transform: translateZ(-$translate);
    }
    .left{
        transform: rotateY(90deg) translateZ(-$translate);
    }
    .right{
        transform: rotateY(90deg) translateZ($translate);
    }
    .top{
        transform: rotateX(90deg) translateZ($translate);
    }
    .bottom{
        transform: rotateX(90deg) translateZ(-$translate);
    }
    @keyframes spin {
        0% {
        /* transform: rotate3d(0.5,0.5,0.5,0deg); */
        transform: rotateY(0deg) rotateX(0deg); 
        }
        100% {
        /* transform: rotate3d(0.5,0.5,0.5,360deg); */
        transform: rotateY(360deg) rotateX(360deg);
        }
    }
    @keyframes color {
        0% {
        border: 1px solid #ccc;
        }
        25% {
        border: 1px solid #B5CED9;
        }
        50% {
        border: 1px solid #E9E39A;
        }
        75% {
        border: 1px solid #F9D355;
        }
        100% {
        border: 1px solid #DEA4A0;
        }
    }

</style>

