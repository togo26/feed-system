import {
  fetchFeedList,
  fetchAdBannerList,
  fetchCategories
} from "../utils/api.js";

export default {
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
};
