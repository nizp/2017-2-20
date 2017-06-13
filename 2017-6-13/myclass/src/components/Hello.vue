<template lang="html">
  <div>
    <slot>
      <div id="hello">我是hello</div>
    </slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css">
#hello{
  height: 100vh;
  background: pink;
}
</style>
