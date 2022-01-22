<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <form class="main__form" action="GET">
        <input class="main__input" type="text" v-model="inputText" />
        <Button textProp="Add Task" @click.native="handleButtonClick"></Button>
      </form>
      <ToDoList :itemsProp="toDos" @remove="handleRemove" />
    </div>
  </div>
</template>

<script>
import "normalize.css";

import Header from "./components/Header/Header.vue";
import ToDoList from "./components/ToDoList/ToDoList.vue";
import Button from "./components/Button/Button.vue";

export default {
  name: "App",
  data() {
    return {
      inputText: "",
      toDos: [],
    };
  },
  components: {
    Header,
    ToDoList,
    Button,
  },
  methods: {
    handleButtonClick: function () {
      if (!this.inputText.length) return;

      this.toDos.push({ text: this.inputText });
      this.inputText = "";
    },
    handleRemove: function (task) {
      let taskIndex;

      for (let i = 0; i < this.toDos.length; i += 1) {
        if (this.toDos[i].text === task) taskIndex = i;
      }

      this.toDos.splice(taskIndex, 1);
    },
  },
};
</script>

<style lang="scss">
#app {
  padding: 20px 100px;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .main {
    margin-top: 30px;

    &__form {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &__input {
      padding: 4px 10px;
      border: 1px solid grey;
      border-radius: 5px;
    }

    .ToDoList {
      margin-top: 40px;
      margin-left: 20px;
    }
  }
}
</style>
