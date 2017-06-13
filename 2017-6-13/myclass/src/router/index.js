import Vue from "vue";
import Router from "vue-router";
import news from "../components/news";
import hello from "../components/Hello";
import edu from "../components/edu";
import news1 from "../components/news1";
Vue.use(Router);
//npm i vue-router -S
let routes = [
  {
    path:'/news/news1/day/3',
    redirect:'/'
  },
  {
    path:'/',
    component:hello
  },
  /*
    配置多项使用children:[
      {
        path:'xx',  注意：不要写/不然会跑到根目录下
        component:引入的组件
      }
    ]
  */
  {
    path:'/news',
    component:news,
    children:[
      {
        path:'news1',
        component:news1,
        children:[
          {
            path:'/news/news1/day/:id'
          }
        ]
      }
    ]
  },
  {
    path:'/edu',
    component:edu
  }
];

export default new Router({
  mode:'history',
  routes
});


