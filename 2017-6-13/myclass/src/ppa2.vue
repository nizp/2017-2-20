<template lang="html">
  <div id="ppa" >
    <button @click="kankan">点击切换</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'ppa'
}
</script>

<style lang="css">
*{margin: 0;padding: 0}
#ppa{
  height:100vh;
  background: yellow;
}
</style>
