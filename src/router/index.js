import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from "../views/First";
import Second from "../views/Second";
import Login from "../views/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: "/",
      name: "First",
      component: First
    },{
      path: "/second",
      name: "Second",
      component: Second
    },{
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
})
