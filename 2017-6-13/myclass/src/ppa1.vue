<template lang="html">
  <div id="ppa" >
    <button @click="kankan">点击切换</button>
    我是pp啊
    <hello v-if="onOff"></hello>
    <ppx v-else></ppx>
  </div>
</template>

<script>
/*
  template中引入指定组件，取的名字就是组件的标签名称
  跟import引入的组件名称一致。
*/
//template就是我们之前的目录树，等同于template属性
import hello from "./components/Hello";
import ppx from "./components/ppx";
export default {
  name:'ppa',
  components:{
    hello,
    ppx
  },
  data(){
    return {
      onOff:true
    }
  },
  methods:{
    kankan(){
      this.onOff = !this.onOff;
    }
  }
}
</script>

<style lang="css">
*{margin: 0;padding: 0}
#ppa{
  height:100vh;
  background: yellow;
}
</style>
