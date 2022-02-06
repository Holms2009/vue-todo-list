<template>
  <div id="app">
    <Header
      :userName="isUserAuth ? getUser.displayName : ''"
      @toggleauthform="handleFormShow"
      @click.native="show = !show"
    ></Header>
    <div class="main">
      <form class="main__form" action="GET">
        <input
          class="main__input"
          type="text"
          v-model="inputText"
          placeholder="Enter new task name"
        />
        <Button
          textProp="Add Task"
          buttonType="button"
          @click.native="handleAddTask"
        ></Button>
      </form>
      <div class="main__lists">
        <ToDoList
          title="My tasks"
          :items="getUserDocs.todoList"
          :needButtons="true"
          @remove="handleTask"
          @done="handleTask"
          @priority-changed="handlePriorityChange"
        />
        <transition name="width">
          <!-- <EditZone v-if="show" /> -->
        </transition>
        <ToDoList
          title="Finished tasks"
          :items="finishedTasks"
          :needButtons="false"
        />
      </div>
    </div>
    <div class="footer"></div>
    <transition name="fade">
      <AuthForm v-if="showAuthForm" @toggleauthform="handleFormShow" />
    </transition>
  </div>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { mapGetters } from "vuex";

import "normalize.css";
import "./utils/transitions.scss";

import { db } from "./main";
import Header from "./components/Header/Header.vue";
import ToDoList from "./components/ToDoList/ToDoList.vue";
import Button from "./components/Button/Button.vue";
import AuthForm from "./components/AuthForm/AuthForm.vue";
import EditZone from "./components/EditZone/EditZone.vue";

export default {
  name: "App",
  data() {
    return {
      inputText: "",
      finishedTasks: [],
      showAuthForm: false,
      show: true,
    };
  },
  methods: {
    handleAddTask: function () {
      if (!this.inputText.length) return;

      const userDocs = this.getUserDocs;
      const newTask = {
        text: this.inputText,
        priority: "none",
        id: nanoid(6),
      };

      this.inputText = '';
      userDocs.todoList.push(newTask);
      this.$store.dispatch("setUserDocsAction", userDocs);

      if (this.isUserAuth) {
        setDoc(doc(db, "users", this.getUser.email), this.getUserDocs, {
          merge: true,
        });
      }
    },

    handleTask: function ({ task, taskDone = false }) {
      // let taskIndex = this.toDos.indexOf(task);
      // if (taskDone) this.finishedTasks.push(this.toDos[taskIndex]);
      // this.toDos.splice(taskIndex, 1);
    },

    handlePriorityChange: function (priority, task) {
      // let taskIndex = this.toDos.indexOf(task);
      // this.toDos[taskIndex].priority = priority;
    },

    handleFormShow: function () {
      this.showAuthForm = !this.showAuthForm;
    },
  },
  computed: {
    ...mapGetters(["isUserAuth", "getUser", "getUserDocs"]),
  },
  components: {
    Header,
    ToDoList,
    Button,
    AuthForm,
    EditZone,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
  font-display: auto;
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-ExtraBold.ttf") format("truetype");
}

html * {
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: lightgray;
  }
}

#app {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 20px 100px 0;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;

  .main {
    width: 100%;
    margin-top: 30px;

    &__form {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    &__input {
      padding: 5px;
      border: 1px solid grey;
      border-radius: 5px;
    }

    &__lists {
      box-sizing: border-box;
      margin-top: 40px;
      padding: 0 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
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
