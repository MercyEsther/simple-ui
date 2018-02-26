<template>
    <div id="card-wrapper"
        :title="title" 
        :theme="theme" 
        :subTitle="subTitle"
        :items="items"
        :right="right"
        :state="state"
        :pages="pages" 
        :class="[`card-theme-${theme}`]">

        <div class="title-wrapper">
            <div class="title">{{title}}</div>
            <div class="pages">
                <div class="pages-left" @click="leftHandler">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                </div>
                <div class="page">{{pages}}页</div>
                <div class="pages-right" @click="rightHandler">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                </div>
            </div>
        </div>

        <div class="content" :key="index" v-for="(item, index) in items">
            <div class="left-wrapper">
                <div class="subTitle">{{subTitle}}</div>
                <ul class="desc">
                    <li class="desc-item" :key="index" v-for="(item, index) in item.desc">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="right-wrapper">
                <div class="right-text">{{item.right}}</div>
                <div class="state">{{item.state}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sp-card",
        props:{
            title: {
                type: String,
                default: "Title"
            },
            theme: {
                type: String,
                default: "default"
            },
            subTitle: {
                type: String,
                default: "subTitle"
            },
            items: {
                type: Array,
                default: this.cardItems
            },
            right: {
                type: String,
                default: "right"
            },
            state: {
                type: String,
                default: "state"
            },
            pages: {
                type: String,
                default: "100"
            }
        },
        data(){
            return{
                cardItems: [{
                    date: "2018-01-01到2018-02-18"
                }]
            }
        },
        methods:{
            leftHandler(){
                this.$emit("leftHandler");
            },
            rightHandler(){
                this.$emit("rightHandler");
            }
        }
    }
</script>

<style scoped>
    @import url("../../../style/color.css");

    *{
        list-style: none;
    }

    #card-wrapper{
        position: relative;
        margin-top: 15vw;
        width: 94vw;
        height: auto;
        left: 3vw;
    }

    .title-wrapper{
        position: relative;
        width: 100%;
        height: 10vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0vw 5vw;
    }

    .pages{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
        height: 100%;
    }

    .pages-left, .pages-right{
        position: relative;
        .line{
            position: absolute;
            width: 3vw;
            border: 1px solid black;
            transform-origin: left;
        }
    }
    
    .pages-left{
        .line1{
            transform: rotate(-40deg);
        }
        .line2{
            transform: rotate(40deg);
        }
    }

    .pages-right{
        .line1{
            transform: rotate(-130deg);
        }
        .line2{
            transform: rotate(130deg);
        }
    }

    .content{
        position: relative;
        width: 90%;
        left: 5%;
        display: flex;
        flex-direction: row;
        padding: 3vw 0vw;
        border-bottom: 1px solid #eee;
    }

    .page{
        font-size: 3.5vw;
    }

    .left-wrapper{
        position: relative;
        flex: 0 1 70%;
    }
    
    .right-wrapper{
        position: relative;
        flex: 0 1 30%;
    }

    .subTitle{
        position: relative;
        font-size: 4vw;
        line-height: 9vw;
        height: 9vw;
    }

    .desc-item{
        position: relative;
        font-size: 3.5vw;
        line-height: 7vw;
        height: 7vw;
    }

    .right-text, .state{
        position: relative;
        padding: 0px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 8px;
        font-size: 3.5vw;
        border-radius: 2px;
    }

    .card-theme-default{
        border: 1px solid #eee;
        background-color: white;

        .title-wrapper{
            color: $black;
            background-color: #eee;
            border: 1px solid #ddd;
        }

        .subTitle{
            color: $dark-grey;
        }

        .desc-item{
            color: $grey;
        }

        .right-text{
            color: white;
            background-color: $blue;
            border: 1px solid $blue-border;
        }

        .state{
            color: white;
            background-color: $red;
            border: 1px solid $red-border;
        }

        .line{
            border-color: $dark-grey;
        }
    }

    .card-theme-blue{
        border: 1px solid #eee;
        background-color: white;

        .title-wrapper{
            color: white;
            background-color: $blue;
            border: 1px solid #ddd;
        }

        .subTitle{
            color: $dark-grey;
        }

        .desc-item{
            color: $grey;
        }

        .right-text{
            color: white;
            background-color: $blue;
            border: 1px solid $blue-border;
        }

        .state{
            color: white;
            background-color: $red;
            border: 1px solid $red-border;
        }

        .line{
            border-color: white;
        }
    }
    
</style>
