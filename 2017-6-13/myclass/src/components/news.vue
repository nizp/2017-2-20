<template lang="html">
  <div>
    <h2>我是新闻</h2>
    <ul>
      <router-link
        to="/news/news1"
        tag="li"
        v-show="on"
        @click.native="flushCom()"
      >点我到news1</router-link>
    </ul>
    <hr />
    <keep-alive>
      <router-view name="ppx"></router-view>
    </keep-alive>
  </div>
</template>
<script>
/*
  在router中添加事件要使用@xx.native="fn";
  
  在路由中添加router-link全要用全路径：
    xxx/news/news1  -> /news/news1  √
                    -> news/news1   ×（多次点击的时候乱跳）
  
*/
export default {
  name:'news',
  data(){
    return {
      on:true
    }
  },
  methods:{
    flushCom(){
      this.on = !this.on;
    }
  }
}
</script>

<style lang="css">
</style>
