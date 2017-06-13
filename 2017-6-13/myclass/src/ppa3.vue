<template lang="html">
  <div>
    <!-- <button>切换文学</button> -->
    <!-- <button>切换新闻</button> -->
    
    <router-link to="/edu" tag="button">
      切换文学
    </router-link>
    <router-link to="/news" tag="button">切换新闻</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'ppa'
}
</script>

<style lang="css">
</style>
