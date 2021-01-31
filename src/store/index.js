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
    contentList: [],
    lastPage: 0
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
    },
    deleteAllLists(state) {
      state.feedList = [];
      state.adBannerList = [];
      state.contentList = [];
    },
    setLastPage(state, payload) {
      state.lastPage = payload.lastPage;
    },
    resetLastPage(state) {
      state.lastPage = 0;
    }
  },
  actions: {
    async addFeedList({ commit }, options) {
      try {
        const result = await fetchFeedList(options);
        commit("setLastPage", { lastPage: result.last_page });
        commit("addFeedList", { list: result.data });
      } catch (error) {
        console.error(error);
        commit("resetLastPage");
      }
    },
    async addAdBannerList({ commit }, options) {
      try {
        const result = await fetchAdBannerList(options);
        commit("addAdBannerList", { list: result.data });
      } catch (error) {
        console.error(error);
      }
    },
    async addFeedListWithAdBanners({ commit, dispatch }, options) {
      try {
        await dispatch("addFeedList", options);
        await dispatch("addAdBannerList", options);
        commit("addFeedListWithAdBanners");
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
