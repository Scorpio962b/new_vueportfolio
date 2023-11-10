<template>
  <div id="app">
    <div id="body">
      <sideBar/>
      <router-view />
    </div>
  </div>
</template>
<script>
import sideBar from "./components/sideBar.vue";
export default {
  components: { sideBar },
};
</script>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}


#body {
  display: grid;
  grid-template-columns: 10% 90%;
  background-color: #354e56;
  height: 100vh;
  width: 100vw;
}
#side {
  background-color: goldenrod;
  z-index: 1;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
