<template>
    <div id="waiting-wrapper"
    :tips="tips">
        <Cube/>
        <div class="tips">{{tips}} <strong class="load">&nbsp;{{load}}</strong> </div>
    </div>
</template>

<script>
/**
    Waiting
    @param {string} tips
*/

    import Icon from "../../../assets/icons/svg";
    import Cube from "../../cube";

    export default {
        name: "sp-waiting",
        components: {Cube},
        props: {
            tips: {
                default: "加载中，请稍候",
                type: String
            }
        },
        data(){
            return{
                waitingIcon: Icon.load,
                load: ''
            }
        },
        mounted(){
            let count = 0;
            setInterval(() => {
                this.load += ".";
                count++;
                if(count == 4){
                    this.load = '';
                    count = 0;
                }
            }, 500);
        }
    }
</script>

<style scoped>
    @import url("../../../style/color.css");

    #waiting-wrapper{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: white;
    }
    .icon{
        position: absolute;
        top: 30vh;
        width: 16vw;
        fill: $blue;
        animation: rotate 2s linear infinite;
    }
    @keyframes rotate{
        0% {
            fill: $red;
            transform: rotate(0deg);
        }
        25% {
            fill: $yellow;
            transform: rotate(90deg);
        }
        50% {
            fill: $blue;
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .tips{
        position: absolute;
        top: 65vh;
        color: $grey;
        font-weight: lighter;
        font-size: 4.5vw;
        height: 3rem;
    }
    .load{
        position: relative;
        font-size: 6vw;
    }
</style>

