<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
-webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
    border-radius: 50% !important;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(101, 210, 255, 0.15) !important;
    border-radius: 3px !important;
}
</style>
