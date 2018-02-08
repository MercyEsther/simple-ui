<template>
    <div id="toggle-wrapper" 
    :color="color" :panelColor="panelColor" :items="items"
    :class="[`toggle-color-${color}`, `toggle-panelColor-${panelColor}`, {active: listShow}]"
    @click="listShow = !listShow">
        <transition name="slide-top">
        <ul class="items" v-if="listShow">
            <li class="item" :key="index" v-for="(item, index) in items" >
                <a :href="item.to">
                    {{item.name}}
                </a>
            </li>
        </ul>
        </transition>

        <div class="toggle">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
    </div>
</template>

<script>
    /**
     * Toggle <sp-toggle>
     * 
     * @param {array} items
     * @param {string} color (white | black)
     * @param {string} panelColor (white | black)
     */

    export default {
        name: "sp-toggle",
        props: {
            color: {
                default: "black",
                type: String
            },
            panelColor: {
                default: "white",
                type: String
            },
            position: {
                default: "top",
                type: String
            },
            items: {
                type: Array
            }
        },
        data(){
            return{
                listShow: false
            }
        }
    }
</script>

<style scoped>
@import url("../../../style/color.css");

/**
 *  common style
 */

*{
    list-style: none;
}
#toggle-wrapper{
    position: relative;
    top: 12vw;

    & .toggle{
        position: absolute;
        right: 5vw;
        top: -8.4vw;
        z-index: 11;
        width: 7vw;
        height: 5.5vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & .line{
            border-radius: 3px;
            transition: all .3s linear;
            transform-origin: center;
        }
    }

    & .items{
        position: flxed;
        z-index: 5;
        top: 0;
        left:0;
        padding: 0vw 10vw;
        width: 100vw;
        height: auto;
    }

    & .item{
        position: relative;
        width: 80vw;
        height: 12vw;
        font-size: 4vw;
        font-weight: lighter;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .item:last-of-type{
        border-bottom: none;
    }
}
#toggle-wrapper.active{
    .toggle{
        justify-content: center;
    }
    & .line{
        position: absolute;
    }
    & .line1{
        transform: rotate(45deg);
    }
    & .line3{
        transform: rotate(-45deg);
    }
    & .line2{
        opacity: 0;
    }
}
.slide-top-enter-active, .slide-top-leave-active{
    transition: all .3s ease;
}
.slide-top-enter, .slide-top-leave-to{
    transform: translateY(-40vw);
}

/**
 *  color
 */

.toggle-color-black{ 
    & .line{
    width: 100%;
    height: 2px;
    background-color: $dark-grey;
    }
}
.toggle-color-white{
    & .line{
    width: 100%;
    height: 2px;
    background-color: $light-grey;
    }
}

/**
 *  panelColor
 */

.toggle-panelColor-white{
    & .items{
        background-color: $light-grey;
        color: $dark-grey;
        border-bottom: 1px solid #eee;
    }
    & .item{
        border-bottom: 0.5px solid #f2f2f2;
    }
    & a{
        text-decoration: none;
        color: $dark-grey;
    }
}
.toggle-panelColor-black{
    & .items{
        background-color: $dark-grey;
        color: white;
        border-bottom: 1px solid #636363;
    }
    & .item{
        border-bottom: 0.5px solid #6e6e6e;
    }
    & a{
        text-decoration: none;
        color: white;
    }
}
</style>

