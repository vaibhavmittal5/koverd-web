import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import createMutationsSharer from "vuex-shared-mutations";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: "kovered-data",
  storage: window.localStorage,
  modules: ["token", "expire_date", "expire_period", "user"]
});

export default new Vuex.Store({
  state: {
    token: "",
    expire_date: "",
    expire_period: "",
    user: ""
  },
  getters: {
    isAuthenticated: state => !!state.token,
    // role: state => (state.user.role ? state.user.role : 'user'),
    role: state => state.user.type,
    service_provider: state => state.user.service_provider
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      let endpoint = "/login";
      if (user.type === "employee") {
        endpoint = "/employee/login";
      }
      console.log(endpoint);
      return new Promise((resolve, reject) => {
        axios
          .post(endpoint, user)
          .then(resp => {
            commit("AUTH_SUCCESS", {
              token: resp.data.token,
              expires_in: resp.data.expires_in
            });
            // We logged in, and have user data.
            if (user.type === "employee") {
              let toStore = resp.data.employee.data;
              // toStore.type = 'employee'
              commit("EMPLOYEE_DATA", toStore);
            } else {
              let toStore = resp.data.user.data;

              commit("USER_DATA", toStore);
              
            }
            resolve(resp);
          })
          .catch(err => {
            // Error on login. Force logout
            dispatch("FORCE_AUTH_LOGOUT");
            reject(err);
          });
      });
    },

    AUTH_REQUEST_SOCIAL: ({ commit, dispatch }, userData) => {
      return new Promise((resolve, reject) => {
        commit("AUTH_SUCCESS", {
          token: userData.token,
          expires_in: userData.expires_in
        });
        // We logged in, and have user data.
        if (userData.type === "user") {
          let toStore = userData.user.data;
          commit("USER_DATA", toStore);
        }
        //resolve(resp)
      });
    },

    FORCE_AUTH: ({ commit, dispatch }, userData) => {
      commit("AUTH_SUCCESS", {
        token: userData.token,
        expires_in: userData.expires_in
      });
      // We logged in, and have user data.
      if (userData.type === "user") {
        // userData.employee.data.type = 'user'
        commit("USER_DATA", userData.user.data);
      } else {
        // userData.user.data.type = 'employee'
        commit("EMPLOYEE_DATA", userData.employee.data);
      }
    },
    AUTH_LOGOUT: ({ commit, dispatch, state }) => {
      let endpoint = "logout";
      if (state.user.type === "employee") {
        endpoint = "/employee/logout";
      }
      // Normal logout
      return new Promise((resolve, reject) => {
        axios
          .post(endpoint)
          .then(resp => {
            commit("AUTH_LOGOUT");
            delete axios.defaults.headers.common["Authorization"];
            resolve(resp);
          })
          .catch(err => {
            // Error on logout, we force logout anyways.
            dispatch("FORCE_AUTH_LOGOUT");
            reject(err);
          });
      });
    },
    FORCE_AUTH_LOGOUT: ({ commit, dispatch }) => {
      // Force local logout
      return new Promise((resolve, reject) => {
        commit("AUTH_LOGOUT");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    FETCH_USER: ({ commit, dispatch }) => {
      // Fetch the user logged in
      return new Promise((resolve, reject) => {
        axios
          .get("/user/user-data")
          .then(resp => {
            // resp.data.user.data.type = 'user'
            commit("USER_DATA", resp.data.userProfile.data);
            resolve(resp);
          })
          .catch(err => {
            // Can't get logged in user. Force logout
            dispatch("FORCE_AUTH_LOGOUT");
            reject(err);
          });
      });
    },
    FETCH_EMPLOYEE: ({ commit, dispatch }) => {
      // Fetch the user logged in
      return new Promise((resolve, reject) => {
        axios
          .get("employee/employee-data")
          .then(resp => {
            // resp.data.employee.data.type = 'employee'
            commit("EMPLOYEE_DATA", resp.data.employee.data);
            resolve(resp);
          })
          .catch(err => {
            // Can't get logged in user. Force logout
            dispatch("FORCE_AUTH_LOGOUT");
            reject(err);
          });
      });
    }
    // 'AUTH_REFRESH': ({commit, dispatch}) => {
    //   return new Promise((resolve, reject) => {
    //     axios.post('/refresh-token')
    //       .then(resp => {
    //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp.data.token
    //         commit('AUTH_SUCCESS', {
    //           token: resp.data.token,
    //           expires_in: resp.data.expires_in
    //         })
    //         resolve(resp)
    //       })
    //       .catch(err => {
    //         commit('AUTH_LOGOUT')
    //         reject(err)
    //       })
    //   })
    // }
  },
  mutations: {
    AUTH_SUCCESS: (state, payload) => {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + payload.token;
      state.token = payload.token;
      state.expire_date = Math.round(Date.now() / 1000) + payload.expires_in;
      state.expire_period = payload.expires_in;
    },
    AUTH_LOGOUT(state) {
      state.token = "";
      state.expire_date = "";
      state.expire_period = "";
      state.user = "";
    },
    USER_DATA(state, userData) {
      state.user = userData;
      state.user.type = "user";
    },
    EMPLOYEE_DATA(state, userData) {
      state.user = userData;
      state.user.type = "employee";
    }
  },
  plugins: [
    vuexLocal.plugin,
    createMutationsSharer({
      predicate: ["AUTH_SUCCESS", "AUTH_LOGOUT", "USER_DATA", "EMPLOYEE_DATA"]
    })
  ]
});
