import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const initialState = () => {
  return {
    user: null,
    userDocs: {
      todoList: [],
      completedTasks: []
    },
  }
}

export default new Vuex.Store({
  state: initialState(),
  mutations,
  actions,
  getters,
})