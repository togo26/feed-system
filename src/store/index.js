import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import {
  fetchFeedList,
  fetchAdBannerList,
  fetchCategories
} from "../utils/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    feedList: [],
    adBannerList: [],
    contentList: [],
    categories: [],
    lastPage: 0,
    currentPage: 1,
    orderBy: "ascending"
  },
  mutations: {
    addFeedList(state, payload) {
      const mapCategoryNameToList = payload.list.map(feed => ({
        ...feed,
        category_id:
          state.categories[feed.category_id - 1]?.name || feed.category_id
      }));
      state.feedList = [...state.feedList, ...mapCategoryNameToList];
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
    },
    updateOrderBy(state, payload) {
      state.orderBy = payload.orderBy;
    },
    resetOrderBy(state) {
      state.orderBy = "ascending";
    },
    updateCurrentPage(state) {
      state.currentPage++;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
    addCategories(state, payload) {
      state.categories = payload.list.map(category => ({
        ...category,
        isChecked: true
      }));
    },
    updateCategories(state, payload) {
      state.categories = payload.list;
    }
  },
  actions: {
    async addFeedList({ commit, state }) {
      const options = {
        orderBy: state.orderBy,
        page: state.currentPage,
        categories: state.categories
      };
      try {
        const result = await fetchFeedList(options);
        commit("setLastPage", { lastPage: result.last_page });
        commit("addFeedList", { list: result.data || [] });
      } catch (error) {
        console.error(error);
        commit("resetLastPage");
      }
    },
    async addAdBannerList({ commit, state }) {
      const options = { page: state.currentPage };
      try {
        const result = await fetchAdBannerList(options);
        commit("addAdBannerList", { list: result.data || [] });
      } catch (error) {
        console.error(error);
      }
    },
    async addFeedListWithAdBanners({ commit, dispatch }) {
      try {
        await dispatch("addFeedList");
        await dispatch("addAdBannerList");
        commit("addFeedListWithAdBanners");
      } catch (error) {
        console.error(error);
      }
    },
    async addCategories({ commit }) {
      try {
        const result = await fetchCategories();
        commit("addCategories", { list: result.category });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
