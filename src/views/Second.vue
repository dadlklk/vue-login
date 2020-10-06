<template>
  <div class="second-app">
    {{msg}}
    <confirm text="注册" @message="getMessage"></confirm>
    <p><router-link to="/first">去第一个页面</router-link></p>
  </div>
</template>

  <script>
    import Confirm from "./Confirm";

    export default {
      name: "Second",
      components:{
        Confirm
      },
      data() {
        return {
          msg: "Welcome to FirstApp"
        };
      },
      methods:{
        getMessage(val){
          alert(val);
        }
      }
    }
  </script>

  <style>

  </style>
