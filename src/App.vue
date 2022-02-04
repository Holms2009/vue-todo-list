<template>
  <div id="app">
    <Header
      :userName="isUserAuth ? getUser.displayName : ''"
      @toggleauthform="handleFormShow"
    ></Header>
    <div class="main">
      <form class="main__form" action="GET">
        <input class="main__input" type="text" v-model="inputText" />
        <Button
          textProp="Add Task"
          buttonType="button"
          @click.native="handleButtonClick"
        ></Button>
      </form>
      <div class="main__lists">
        <ToDoList
          title="My tasks"
          :items="toDos"
          :needButtons="true"
          @remove="handleTask"
          @done="handleTask"
          @priority-changed="handlePriorityChange"
        />
        <ToDoList
          title="Finished tasks"
          :items="finishedTasks"
          :needButtons="false"
        />
      </div>
    </div>
    <div class="footer"></div>
    <AuthForm
      v-if="showAuthForm"
      @authorization="handleAuthorize"
      @toggleauthform="handleFormShow"
    />
  </div>
</template>

<script>
import "normalize.css";
import { mapGetters } from "vuex";

import Header from "./components/Header/Header.vue";
import ToDoList from "./components/ToDoList/ToDoList.vue";
import Button from "./components/Button/Button.vue";
import AuthForm from "./components/AuthForm/AuthForm.vue";

export default {
  name: "App",
  data() {
    return {
      inputText: "",
      toDos: [{ text: "Test task", priority: "none" }],
      finishedTasks: [],
      showAuthForm: false,
    };
  },
  components: {
    Header,
    ToDoList,
    Button,
    AuthForm,
  },
  methods: {
    handleButtonClick: function () {
      if (!this.inputText.length) return;

      this.toDos.push({ text: this.inputText, priority: "none" });
      this.inputText = "";
    },

    handleTask: function ({ task, taskDone = false }) {
      let taskIndex = this.toDos.indexOf(task);

      if (taskDone) this.finishedTasks.push(this.toDos[taskIndex]);
      this.toDos.splice(taskIndex, 1);
    },

    handlePriorityChange: function (priority, task) {
      let taskIndex = this.toDos.indexOf(task);
      this.toDos[taskIndex].priority = priority;
    },

    handleAuthorize: function (status) {
      this.isAuth = status;
    },

    handleFormShow: function () {
      this.showAuthForm = !this.showAuthForm;
    },
  },
  computed: {
    ...mapGetters(["isUserAuth", "getUser"]),
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

  .AuthForm {
    top: 0;
    left: 0;
    z-index: 1000;
  }
}
</style>
