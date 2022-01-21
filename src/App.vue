<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <ToDoList :items="[{text: '123'}, {text: '456'}]"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import ToDoList from "./components/ToDoList/ToDoList.vue";

export default {
  name: "App",
  components: {
    Header,
    ToDoList,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
