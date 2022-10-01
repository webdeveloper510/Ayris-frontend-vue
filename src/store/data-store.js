import DataService from "../services/data-service";

const user = JSON.parse(localStorage.getItem("user"));
const machine = JSON.parse(localStorage.getItem("machine"));
const catId = JSON.parse(localStorage.getItem("catId"));
const categories = JSON.parse(localStorage.getItem("categories"));
const currentPath = JSON.parse(localStorage.getItem("categories"));

const initialState = {
  machine: machine ? machine : null,
  user: user ? user : null,
  categories: categories ? categories : null,
  selectedCatId: catId ? catId : null,
  currentPath: currentPath ? currentPath : null,
};

export const data = {
  namespaced: true,
  state: initialState,
  getters: {
    getCurrentPage: (state) => {
      return state.currentPath ? state.currentPath.split("/")[1] : null;
    },
  },
  actions: {
    setCurrentPath({ commit }, payload) {
      console.warn("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ");
      console.warn("payload :", payload);
      commit("CurrentPath", payload);
    },
    getHome({ commit }) {
      console.log("from data-store -> getHome()");
      return DataService.getHome().then(
        (machine) => {
          console.log(machine);
          console.log("-----------");

          commit("MachineSuccess", machine);
          // this.$store.data.state.auth.loggedIn
          return Promise.resolve(machine);
        },
        (error) => {
          commit("MachineFailure");
          console.log(error);
          return Promise.reject(error);
        }
      );
    },
    getProfile({ commit }) {
      console.log("from data-store -> getProfile()");
      return DataService.getProfile().then(
        (user) => {
          console.log(user);
          console.log("-----------");
          localStorage.setItem("user", JSON.stringify(user));
          commit("UserProfileSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("UserProfileFailure");
          console.log(error);
          return Promise.reject(error);
        }
      );
    },
    getAllCategories({ commit }, payload) {
      console.warn("getAllCategories()");
      console.warn("payload :", payload);
      return DataService.getAllCategories(payload).then(
        (categories) => {
          console.log(categories);
          console.log(payload);
          console.warn("===================================");
          commit("CategoriesSuccess", categories);
          return Promise.resolve(categories);
        },
        (error) => {
          commit("CategoriesFailure");
          console.log(error);
          return Promise.reject(error);
        }
      );
    },
    changeSelectedCatId({ commit }, payload) {
      console.log("FROM changeSelectedCatId");
      console.log("payload :", payload);
      localStorage.setItem("catId", JSON.stringify(payload));

      commit("setSelectedCatId", payload);
    },
  },
  mutations: {
    CurrentPath(state, payload) {
      state.currentPath = payload;
    },
    setSelectedCatId(state, payload) {
      console.log("FROM setSelectedCatId");
      console.log("payload :", payload);
      state.selectedCatId = payload;
      console.log("state.selectedCatId :", state.selectedCatId);
    },
    MachineSuccess(state, machine) {
      console.log("MachineSuccess : ");
      console.log("machine : ", machine);
      console.log("this.state.user :", this.state);
      console.warn(this.state.auth.status.loggedIn);
      localStorage.setItem("machine", JSON.stringify(machine));
      state.machine = machine;
    },
    MachineFailure(state) {
      state.machine = null;
    },
    UserProfileSuccess(state, user) {
      console.log("user : ", user);
      state.user = user;
    },
    UserProfileFailure(state) {
      state.user = null;
    },
    CategoriesSuccess(state, categories) {
      localStorage.setItem("categories", JSON.stringify(categories));
      state.categories = categories;
    },
    CategoriesFailure(state) {
      state.categories = null;
    },
  },
};
