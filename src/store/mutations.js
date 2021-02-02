export default {
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
    const { feedList, adBannerList, isAdReductionMode } = state;
    const maxFeedGroupLength = isAdReductionMode ? 5 : 3;
    const combinedList = [];
    let lastFeedGroupIndex = 0;

    for (
      let i = 0, j = 0;
      i < feedList.length;
      i += 2, j += maxFeedGroupLength
    ) {
      const feeds = feedList.slice(j, j + maxFeedGroupLength);
      if (feeds.length <= 0) {
        lastFeedGroupIndex = i - 2;
        break;
      }
      combinedList[i] = feeds;
    }

    for (let i = 0; i < combinedList.length; i++) {
      const targetIndex = (i + 1) * 2 - 1;
      const lastFeedGroupLength = combinedList[targetIndex - 1]?.length;

      if (lastFeedGroupLength < maxFeedGroupLength) break;
      if (lastFeedGroupIndex < targetIndex) {
        if (lastFeedGroupLength >= maxFeedGroupLength) {
          combinedList[targetIndex] = adBannerList[i] || false;
          break;
        }
      }
      combinedList[targetIndex] = adBannerList[i] || false;
    }

    state.contentList = combinedList.flat();
  },
  deleteAllList(state) {
    state.feedList = [];
    state.adBannerList = [];
    state.contentList = [];
    state.lastPage = 0;
    state.currentPage = 1;
  },
  setLastPage(state, payload) {
    state.lastPage = payload.lastPage;
  },
  updateCurrentPage(state) {
    state.currentPage++;
  },
  updateOrderBy(state, payload) {
    state.orderBy = payload.orderBy;
  },
  resetOrderBy(state) {
    state.orderBy = "ascending";
  },
  addCategories(state, payload) {
    state.categories = payload.list.map(category => ({
      ...category,
      isChecked: true
    }));
  },
  updateCategories(state, payload) {
    state.categories = payload.list;
  },
  updateAdReductionMode(state, payload) {
    state.isAdReductionMode = payload;
  }
};
