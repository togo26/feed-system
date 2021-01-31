import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import { fetchFeedList, fetchAdBannerList } from "../utils/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    feedList: [],
    adBannerList: [],
    contentList: []
  },
  mutations: {
    addFeedList(state, payload) {
      state.feedList = [...state.feedList, ...payload.list];
    },
    addAdBannerList(state, payload) {
      state.adBannerList = [...state.adBannerList, ...payload.list];
    },
    addFeedListWithAdBanners(state) {
      const { feedList, adBannerList } = state;
      const combinedList = [];
      let lastFeedGroupIndex = 0;

      for (let i = 0, j = 0; i < feedList.length; i += 2, j += 3) {
        const feeds = feedList.slice(j, j + 3);
        if (feeds.length <= 0) {
          lastFeedGroupIndex = i - 2;
          break;
        }
        combinedList[i] = feeds;
      }

      for (let i = 0; i < combinedList.length; i++) {
        const targetIndex = (i + 1) * 2 - 1;
        const lastFeedGroupLength = combinedList[targetIndex - 1]?.length;

        if (lastFeedGroupLength < 3) break;
        if (lastFeedGroupIndex < targetIndex) {
          if (lastFeedGroupLength >= 3) {
            combinedList[targetIndex] = adBannerList[i] || false;
            break;
          }
        }
        combinedList[targetIndex] = adBannerList[i] || false;
      }

      state.contentList = combinedList.flat();
    }
  },
  actions: {
    async addFeedList({ commit }) {
      try {
        const result = await fetchFeedList();
        commit("addFeedList", { list: result.data });
      } catch (error) {
        console.error(error);
      }
    },
    async addAdBannerList({ commit }) {
      try {
        const result = await fetchAdBannerList();
        commit("addAdBannerList", { list: result.data });
      } catch (error) {
        console.error(error);
      }
    },
    async addFeedListWithAdBanners({ commit }) {
      try {
        await this.dispatch("addFeedList");
        await this.dispatch("addAdBannerList");
        commit("addFeedListWithAdBanners");
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
