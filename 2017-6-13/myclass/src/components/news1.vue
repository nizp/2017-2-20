<template lang="html">
  <div @click="fn" id="news1">
    <router-link to="/" tag="button">返回首页</router-link>
    <router-link to="/news/news1/day/1" tag="button">点击1</router-link>
    <router-link to="/news/news1/day/2" tag="button">点击2</router-link>
    <h2>我是新闻:{{datas}}</h2>
  </div>
</template>
<script>
export default {
  name:'news1',
  data(){
    return {
      arr:['今天下雨了','遇到了有帅哥或美女送伞'],
      dd:'今天下雨了'
    }
  },
  computed:{
    datas(){
      return this.dd;
    }
  },
  methods:{
    fn(){
      this.dd = this.arr[this.$route.params.id-1];
      // console.log()
    }
  }
}
</script>
<style media="screen">
  #news1 .router-link-active{
    background: yellow;
  }
</style>