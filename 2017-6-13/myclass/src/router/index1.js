import Vue from 'vue';
import Router from 'vue-router';
import hello from "../components/Hello";
import ppx from "../components/ppx";

Vue.use(Router); //中间件

let routes = [
  {
    path:'/',
    component:hello
  },
  {
    path:'/ppx',
    component:ppx
  }
];

export default new Router({
  //mode:'history'  html5的数据
  //如果不写mode那么切换是hash，加了就类似真正的路由
  mode:'history',
  routes
});








