<template >
  <div id="app">
    <div>就试试</div>
    <div>{{number}}{{num}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props:['number'],
  name: 'app',
  data(){
    return {
      num:10
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
