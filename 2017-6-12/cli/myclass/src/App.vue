<template >
  <div id="app">
    <div>就试试</div>
    <div>{{number}}{{num}}</div>
    <router-view></router-view>
    <div class="abc">123</div>
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

document.documentElement.style.fontSize = window.innerWidth/32 + 'px';

</script>

<style>
.abc{
  width:10rem;
  height: 10rem;
  background: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
