<template>
<button id="button-wrapper" :size="size" :color="color" :class="[`wrapper-size-${size}`, `wrapper-color-${color}`]"
@click="clickHandler">
    <slot>button</slot>
</button>
</template>

<script>
/**
 * Button <sp-button>
 * 
 * @param {string} size (small | default | big)
 * @param {string} color (default | black | blue | yellow | red)
 * @param {slot} content
 */

    export default {
        name: "sp-button",
        props: {
            size: {
                default: "default",
                type: String
            },
            color: {
                default: "default",
                type: String
            }
        },
        methods:{
            clickHandler(e){
                this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>
@import url("../../../style/color.css");
#button-wrapper{
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    outline: none;
}
#button-wrapper:active{
    border-width: 3px;
}
.wrapper-size-default{
    width: 18vw;
    height: 8vw;
    font-size: 2vw;
}
.wrapper-color-default{
    background-color: $light-grey;
    color: $grey;
    border: 1px solid #e8e8e8;
}
.wrapper-size-small{
    width: 15vw;
    height: 7vw;
    font-size: 1vw;
}
.wrapper-size-big{
    width: 23vw;
    height: 10vw;
    font-size: 4vw;
}
.wrapper-color-blue{
    background-color: $blue;
    color: white;
    border: 1px solid $blue-border;
}
.wrapper-color-red{
    background-color: $red;
    color: white;
    border: 1px solid $red-border;
}
.wrapper-color-yellow{
    background-color: $yellow;
    color: white;
    border: 1px solid $yellow-border;
}
.wrapper-color-black{
    background-color: $black;
    color: $light-grey;
    border: none;
}
</style>

