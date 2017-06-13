<template lang="html">
  <div>
    <button @click="click">点击</button>
    <transition name="fade" mode="out-in">
      <p v-if="on">出来了</p>
    </transition>
    <transition name="fade" mode="in-out">
      <p v-if="!on">出来了2</p>
    </transition>
      
    
  </div>
</template>
<script>
export default {
  name:'ppa',
  data(){
    return {
      on:true
    }
  },
  methods:{
    click(){
      this.on = !this.on;
    }
  }
}
</script>

<style lang="css">

.fade-enter-active, .fade-leave-active {
  position: relative;
  left:200px;
  transition: 1s;
}
.fade-enter, .fade-leave {
  left:0;
  opacity: 0
}
</style>
