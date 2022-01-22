<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <form class="main__form" action="GET">
        <input class="main__input" type="text" v-model="inputText" />
        <Button textProp="Add Task" @click.native="handleButtonClick"></Button>
      </form>
      <div class="main__lists">
        <ToDoList
          title="My tasks"
          :items="toDos"
          :needButtons="true"
          @remove="handleTask"
          @done="handleTask"
        />
        <ToDoList
          title="Finished tasks"
          :items="finishedTasks"
          :needButtons="false"
        />
      </div>
    </div>
    <div class="footer"></div>
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
      finishedTasks: [],
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

      this.toDos.push(this.inputText);
      this.inputText = "";
    },

    handleTask: function ({ task, taskDone = false }) {
      let taskIndex = this.toDos.indexOf(task);

      if (taskDone) this.finishedTasks.push(this.toDos[taskIndex]);
      this.toDos.splice(taskIndex, 1);
    },
  },
};
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 20px 100px 0;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

    &__lists {
      margin-top: 40px;
      margin-left: 20px;
      display: flex;

      .ToDoList {
        margin-right: 50px;
      }
    }
  }

  .footer {
    margin-top: auto;
    width: 100vw;
    height: 80px;
    background-color: #35383b;
    position: relative;
    left: -100px;
  }
}
</style>
