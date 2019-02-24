import Vuex from "vuex";
// import store from "./store.js";

const store = new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    todos: []
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    fetchTodos(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      axios.get("/api/todos").then(response => {
        context.commit("SET_LOADING_STATUS", "notLoading");
        context.commit("SET_TODOS", response.data.todos);
      })
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    }
  }
});
export default store;
