<template>
    <div id="footer-wrapper"
    :theme="theme"
    :items="items"
    :class="[`footer-theme-${theme}`]">
        <ul class="items">
            <li class="item" :key="index" v-for="(item,index) in footerItems">
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
    Footer

    @param {Array} items (name | icon | to)
        icon: (home | setting | shopping | work | star | safe | img | file | extension | load | reload | menu | account)
    @param {String} theme (light | dark | blue | yellow | sea | fire)
*/
    import Icon from "../../../assets/icons/svg";

    export default {
        name: "sp-footer",
        props: {
            items: {
                type: Array
            },
            theme: {
                default: "white",
                type: String
            }
        },
        data(){
            return{
                icons: Icon,
                footerItems: this.items
            }
        },
        created(){
            console.log(this.items);
        }
    }
</script>

<style scoped>
    @import url("../../../style/color.css");

    *{
        list-style: none;
        text-decoration: none;
    }
    #footer-wrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 16vw;
    }
    .items{
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        & .item a{
            font-size: 3vw;
        }
        & .itemIcon{
            position: relative;
            height: 8.5vw;
        }
    }
    .footer-theme-white{
        background-color: $light-grey;
        border-top: 1px solid #eee;
        & .item a{
            color: $dark-grey;
        }
        & .itemIcon{
            fill: $dark-grey;
        }
    }
    .footer-theme-dark{
        background-color: $black;
        border-top: 1px solid $black;
        & .item a{
            color: #ccc;
        }
        & .itemIcon{
            fill: $light-grey;
        }
    }
    .footer-theme-blue{
        background-color: $blue;
        border-top: 1px solid $blue-border;
        & .item a{
            color: white;
        }
        & .itemIcon{
            fill: white;
        }
    }
    .footer-theme-yellow{
        background-color: $yellow;
        border-top: 1px solid $yellow-border;
        & .item a{
            color: $dark-grey;
        }
        & .itemIcon{
            fill: $black;
        }
    }
    .footer-theme-fire{
        background-color: $light-grey;
        border-top: 1px solid #eee;
        & .item a{
            color: $red;
        }
        & .itemIcon{
            fill: $red;
        }
    }
    .footer-theme-sea{
        background-color: $light-grey;
        border-top: 1px solid #eee;
        & .item a{
            color: $grey;
        }
        & .itemIcon{
            fill: $blue;
        }
    }
    .item, .item a{
        position: relative;
        width: 20vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
</style>





