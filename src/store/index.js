import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const state = {
  feedList: [],
  adBannerList: [],
  contentList: [],
  categories: [],
  lastPage: 0,
  currentPage: 1,
  orderBy: "ascending",
  isAdReductionMode: false
};

export default new Vuex.Store({
  plugins: [createLogger()],
  state,
  mutations,
  actions
});
