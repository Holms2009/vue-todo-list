const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setUserDocs(state, payload) {
    state.userDocs = payload;
  }
};

export default mutations;