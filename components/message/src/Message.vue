<template>
  <transition name="fade">
  <div id="message-wrapper" :messageShow="messageShow" v-if="msgShow" :message="message" :cancle="cancle" :messageHandler="messageHandler">
      <div class="message">
          <div class="content">{{message}}</div>
          <div class="btns">
              <sp-button class="btn" @click="confirm">确定</sp-button>
              <sp-button v-if="cancle == 'true'" color="red" class="btn" @click="msgShow = false">取消</sp-button>
          </div>
      </div>
  </div>
  </transition>
</template>

<script>
/**
 * Message
 * 
 * @param {string} message
 * @param {boolean} messageShow
 * @param {string} cancle btn
 * @event messageHandler
 */

    import Button from "../../button";
    export default {
        name: "sp-message",
        components: {Button},
        props: {
            messageShow: {
                default: false,
                type: Boolean
            },
            message: {
                default: "message",
                type: String
            },
            messageHandler: {
                default: "defaultAction"
            },
            cancle: {
                default: false,
                type: String
            }
        },
        data(){
            return {
                msgShow: this.messageShow
            }
        },
        methods:{
            confirm(){
                this.$emit('messageHandler');
                this.msgShow = false;
            },
            defaultAction(){
                this.msgShow = false;
            }
        }
    }
</script>

<style scoped>
@import url("../../../style/color.css");

#message-wrapper{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.2);
    display: flex;
    justify-content: center;
}
.message{
    position: relative;
    width: 75vw;
    height: 30vh;
    top: 25vh;
    background-color: white;
    border: 1px solid #bbb; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.content{
    position: relative;
    display: flex;
    padding: 20px 20px;
    height: 20vh;
    font-weight: lighter;
    color: $dark-grey;
    align-items: center;
    font-size: 4vw;
}
.btns{
    position: relative;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    margin: 0px 10px !important;
}
.fade-enter-active, .fade-leave-active{
    transition: all .3s ease;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>

