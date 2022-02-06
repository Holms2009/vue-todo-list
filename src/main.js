import Vue from 'vue';
import store from './store/store';
import App from './App.vue';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

const firebase = initializeApp(config);
const db = getFirestore();
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  store.dispatch('setUserAction', user);

  if (user) {
    getDoc(doc(db, 'users', user.email))
      .then((response) => {
        console.log('Current user docs:', response.data());
        store.dispatch('setUserDocsAction', response.data());
      })
  } else {
    const defaultDocs = { todoList: [] };
    store.dispatch('setUserDocsAction', defaultDocs);
  }
})

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

export { firebase, auth, db };