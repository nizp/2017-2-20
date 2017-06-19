<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ul v-if="data">
      <li v-for="val,index in data.subjects" @click="click">
        {{val.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import Hello from './components/Hello'
var jsonp = require('jsonp');

export default {
  name: 'app',
  data(){
    return {
      data:null
    }
  },
  created(){
    let _this = this;
    jsonp('http://api.douban.com/v2/movie/search?q=变5', null, function (err, data) {
      if (err) {
        console.error(err.message);
      } else {
        _this.data = data;
        console.log(data,_this);
      }
    });
  },
  
  methods:{
    click(ev){
      let _this = this;
      jsonp('http://api.douban.com/v2/movie/search?q='+ev.target.innerHTML, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          _this.data = data;
          console.log(data,_this);
        }
      });
    }
    
    
  },
  
  components: {
    Hello
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
