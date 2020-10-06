<template>
  <div class="btn">
    <button @click="btnClick">{{text || "确认"}}</button>
  </div>
</template>

<script>
    export default {
        name: "Confirm",
      //父组件(此组件的父组件)传给子组件（作为组件）的值
        props:["text"],
      data(){
          return{
            msg:true
          }
      },
      methods:{
          btnClick(){
            //向此组件的父组件传值
            this.$emit("message",this.msg);
          }
      }
    }
</script>

<style scoped>

</style>
