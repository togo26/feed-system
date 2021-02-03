import {
  fetchFeedList,
  fetchAdBannerList,
  fetchCategories
} from "../utils/api.js";
import { mutation, action } from "../constants/index.js";

export default {
  async addFeedList({ commit, state }) {
    const options = {
      orderBy: state.orderBy,
      page: state.currentPageNumber,
      categories: state.categories,
      limit: state.isExpandedCardViewMode ? 20 : 10
    };

    try {
      const result = await fetchFeedList(options);
      commit(mutation.SET_LAST_PAGE_NUMBER, {
        lastPageNumber: result.last_page
      });
      commit(mutation.ADD_FEED_LIST, { list: result.data || [] });
    } catch (error) {
      console.error(error);
    }
  },
  async addAdBannerList({ commit, state }) {
    const options = {
      page: state.currentPageNumber,
      limit: state.isExpandedCardViewMode ? 8 : 4
    };

    try {
      const result = await fetchAdBannerList(options);
      commit(mutation.ADD_AD_BANNER_LIST, { list: result.data || [] });
    } catch (error) {
      console.error(error);
    }
  },
  async addFeedListWithAdBanners({ commit, dispatch }) {
    try {
      await dispatch(action.ADD_FEED_LIST);
      await dispatch(action.ADD_AD_BANNER_LIST);
      commit(mutation.ADD_FEED_LIST_WITH_AD_BANNERS);
    } catch (error) {
      console.error(error);
    }
  },
  async addCategories({ commit }) {
    try {
      const result = await fetchCategories();
      commit(mutation.ADD_CATEGORIES, { list: result.category });
    } catch (error) {
      console.error(error);
    }
  }
};
