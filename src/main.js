import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqqtJ13_9RQY2VcotGrDGr30nOZ6Y6e_8",
  authDomain: "vue-task-board-8c5bd.firebaseapp.com",
  projectId: "vue-task-board-8c5bd",
  storageBucket: "vue-task-board-8c5bd.appspot.com",
  messagingSenderId: "912348612221",
  appId: "1:912348612221:web:8b6efbbf5ef3e4d7989314",
  measurementId: "G-QKR9R2TY3E",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  console.log(auth);
})

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth,
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')



