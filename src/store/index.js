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
  lastPageNumber: 0,
  currentPageNumber: 1,
  orderBy: "ascending",
  isAdReductionMode: false
};

export default new Vuex.Store({
  plugins: [createLogger()],
  state,
  mutations,
  actions
});
