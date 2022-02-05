import { auth } from "../main";

const actions = {
  setUserAction({ commit }, payload) {
    commit('setUser', payload)
  },
};

export default actions;