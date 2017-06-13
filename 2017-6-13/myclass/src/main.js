import Vue from "vue";
import ppa from "./ppa"
import router from "./router/index";

var v = new Vue({
  el:'#app',//挂载点
  router,
  template:'<ppa />',//根组件
  components:{
    ppa
  }
});

