const getters = {
  getUser(state) {
    return state.user;
  },
  isUserAuth(state) {
    return !!state.user;
  },
};

export default getters;