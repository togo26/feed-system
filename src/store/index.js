import Vue from "vue";
import Vuex from "vuex";
import { fetchFeedList } from "../utils/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feedList: []
  },
  mutations: {
    addFeedList(state, payload) {
      state.feedList = [...state.feedList, ...payload];
    }
  },
  actions: {
    async addFeedList({ commit }) {
      try {
        const result = await fetchFeedList();
        commit("addFeedList", result.data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
