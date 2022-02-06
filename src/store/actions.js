import { auth } from "../main";

const actions = {
  setUserAction({ commit }, payload) {
    commit('setUser', payload)
  },
  setUserDocsAction({ commit }, payload) {
    commit('setUserDocs', payload);
  }
};

export default actions;