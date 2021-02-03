export const action = {
  ADD_FEED_LIST: "addFeedList",
  ADD_AD_BANNER_LIST: "addAdBannerList",
  ADD_FEED_LIST_WITH_AD_BANNERS: "addFeedListWithAdBanners",
  ADD_CATEGORIES: "addCategories"
};

export const mutation = {
  ADD_FEED_LIST: "addFeedList",
  ADD_AD_BANNER_LIST: "addAdBannerList",
  ADD_FEED_LIST_WITH_AD_BANNERS: "addFeedListWithAdBanners",
  DELETE_ALL_LIST: "deleteAllList",
  SET_LAST_PAGE_NUMBER: "setLastPageNumber",
  INCREASE_CURRENT_PAGE_NUMBER: "increaseCurrentPageNumber",
  UPDATE_ORDER_BY: "updateOrderBy",
  RESET_ORDER_BY: "resetOrderBy",
  ADD_CATEGORIES: "addCategories",
  UPDATE_CATEGORIES: "updateCategories",
  UPDATE_AD_REDUCTION_MODE: "updateAdReductionMode",
  UPDATE_EXPANDED_CARD_VIEW_MODE: "updateExpandedCardViewMode"
};

export const state = {
  FEED_LIST: "feedList",
  AD_BANNER_LIST: "adBannerList",
  CONTENT_LIST: "contentList",
  CATEGORIES: "categories",
  LAST_PAGE_NUMBER: "lastPageNumber",
  CURRENT_PAGE_NUMBER: "currentPageNumber",
  ORDER_BY: "orderBy",
  IS_AD_REDUCTION_MODE: "isAdReductionMode",
  IS_EXPANDED_CARD_VIEW_MODE: "isExpandedCardViewMode"
};
