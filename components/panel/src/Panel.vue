<template>
    <div id="panel-wrapper"
    :theme="theme"
    :items="items"
    :title="title"
    :class="[`panel-theme-${theme}`]">
        <div class="title">{{title}}</div>
        <ul class="items">
            <li class="item" :key="index" v-for="(item, index) in items">
                <a :href="item.to">
                    <div class="itemIcon" v-html="icons[item.icon]"></div>
                    <div class="itemName">{{item.name}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
/**
 * Panel
 * 
 * @param {String} title
 * @param {Array} items
 * @param {theme} theme
 *      item: (name | icon | to)
 */

    import Icon from "../../../assets/icons/svg";

    export default {
        name: "sp-panel",
        props: {
            title: {
                default: "title",
                type: String
            },
            items: {
                type: Array
            },
            theme: {
                default: "default",
                type: String
            }
        },
        data(){
            return{
                icons: Icon
            }
        }
    }    
</script>

<style scoped>
    @import url("../../../style/color.css");

    *{
        list-style: none;
        text-decoration: none;
    }
    #panel-wrapper{
        position: relative;
        width: 100vw;
        height: auto;
    }
    .title{
        position: relative;
        width: 100%;
        height: 12vw;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 4vw;
    }
    .items{
        position: relative;
        width: 100vw;
        padding: 6px 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
    .item{
        position: relative;
        flex: 0 1 0.25;
        width: 25%;
        height: 16vw;
        margin: 7px 0px;
    }
    .item a{
        position: relative;
        flex: 0 1 0.25;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .itemIcon{
        position: relative;
        height: 10vw;
    }
    .itemName{
        position: relative;
        text-align: center;
        font-size: 3.5vw;
        font-weight: lighter;
    }

    .panel-theme-default{
        border-bottom: 1px solid #eee;
        background-color: white;
        .title{
            border: 1px solid #eee;
            background-color: white;
            color: $dark-grey;
            font-size: 3.5vw;
        }
        .itemIcon{
            fill: #888;
        }
    }

    .panel-theme-sea{
        border-bottom: 1px solid #eee;
        background-color: white;
        .title{
            border: 1px solid #eee;
            background-color: white;
            color: $dark-grey;
            font-size: 3.5vw;
        }
        .itemIcon{
            fill: $blue;
        }
    }

    .panel-theme-dark{
        border-bottom: 1px solid $black;
        background-color: $dark-grey;
        .title{
            border: 1px solid #585858;
            background-color: $dark-grey;
            color: $light-grey;
            font-size: 4vw;
        }
        .itemIcon{
            fill: white;
        }
        .itemName{
            color: white;
        }
    }
</style>

