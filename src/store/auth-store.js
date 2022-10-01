import AuthService from "../services/auth-service";

const conf = JSON.parse(localStorage.getItem("conf"));

const initialState = conf
  ? {
      status: {
        loggedIn: true,
      },
      conf,
    }
  : {
      status: {
        loggedIn: false,
      },
      conf: null,
    };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      console.log(
        "this.state.auth.status.loggedIn :",
        this.state.auth.status.loggedIn
      );

      AuthService.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.conf = user;
      console.log("user : ", state);
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.conf = null;
    },
    logout(state) {
      this.state.data.user = null;
      state.status.loggedIn = false;
      state.conf = null;
      // console.warn(state);
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
