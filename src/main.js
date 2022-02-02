import Vue from 'vue'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyBqqtJ13_9RQY2VcotGrDGr30nOZ6Y6e_8",
  authDomain: "vue-task-board-8c5bd.firebaseapp.com",
  projectId: "vue-task-board-8c5bd",
  storageBucket: "vue-task-board-8c5bd.appspot.com",
  messagingSenderId: "912348612221",
  appId: "1:912348612221:web:8b6efbbf5ef3e4d7989314",
  measurementId: "G-QKR9R2TY3E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
