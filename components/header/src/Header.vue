<template>
<header id="header-wrapper" :color="color" :class="[`header-color-${color}`]">
    <div class="left-wrapepr">
        <slot name="left"></slot>
    </div>

    <div class="title-wrapper">
        <slot name="title"></slot>
    </div>

    <div class="right-wrapper">
        <slot name="right"></slot>
    </div>
</header>
</template>

<script>
/**
 * Header <sp-header>
 * 
 * @param {slot} [name=title]
 * @param {slot} [name=left]
 * @param {slot} [name=right]
 */
    import Toggle from "../../toggle";
    export default {
        name: "sp-header",
        components: {Toggle},
        props: {
            color:{
                default: "default",
                type: String
            },
            showToggle: {
                default: true
            }
        }
    }
</script>

<style scoped>
@import url("../../../style/color.css");

#header-wrapper{
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 12vw;
    padding: 0vw 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.header-color-white{
    background-color: white;
    color: $black;
    border: 1px solid $light-grey;

    & span{
        color: $dark-grey;
    }

    & .title-wrapper span{
        color: $black;
        font-weight: bold;
    }
}
.header-color-black{
    background-color: $black;
    color: $light-grey;
    border: 1px solid $black;

    & span{
        color: $light-grey;
    }

    & .title-wrapper span{
        color: white;
        font-weight: bold;
    }
}
.header-color-blue{
    background-color: white;
    color: $blue;
    border: 1px solid $light-grey;

    & span{
        color: $blue;
    }

    & .title-wrapper span{
        color: $black;
        font-weight: bold;
    }
}
.left-wrapper, .right-wrapper{
    position: relative;
    height: 100%;
    width: 10vw;
    display: flex;
    align-items: center;
}
#header-wrapper span{
    font-size: 4vw ;
}
</style>

