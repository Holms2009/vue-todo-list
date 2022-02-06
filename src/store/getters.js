const getters = {
  getUser(state) {
    return state.user;
  },
  isUserAuth(state) {
    return !!state.user;
  },
  getUserDocs(state) {
    return state.userDocs;
  }
};

export default getters;