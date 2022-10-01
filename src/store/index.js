import { createStore } from "vuex";
import { auth } from "./auth-store";
import { data } from "./data-store";

const store = createStore({
  modules: {
    auth,
    data,
  },
});

export default store;
