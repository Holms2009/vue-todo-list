import { auth } from "../main";

const actions = {
  setUserAction({ commit }, payload) {
    commit('setUser', payload)
  },
  setErrorAction({ commit }, payload) {
    commit('setError', payload)
  }
};

export default actions;