<template>
  <div class="home" v-if="!isIE">
    <modal-view v-if="isModalOpened" @close-modal="isModalOpened = false">
      <category-filter
        :close-modal="() => (isModalOpened = false)"
        :resetSearch="resetSearch"
      />
    </modal-view>
    <div class="wrapper">
      <aside>
        <custom-button>로그인</custom-button>
        <input
          class="search"
          type="text"
          placeholder="Search"
          v-model="search"
          @keydown="handleEnterKey"
        />
        <p class="search-list-count" v-show="searchList.length">
          검색 결과 <span>{{ searchList.length }}</span>
        </p>
      </aside>
      <section>
        <div class="sorting-controls">
          <order-by-controls :resetSearch="resetSearch" />
          <div>
            <card-view-controls :resetSearch="resetSearch" />
            <filter-button text="필터" @handle-click="isModalOpened = true" />
          </div>
        </div>
        <div class="filter-tags">
          <tag
            :key="i"
            :text="item.name"
            v-for="(item, i) in getSelectedCategories"
          />
        </div>
        <feed-with-ad-card-list
          :list="contentList"
          :maxFeedLength="isAdReductionMode ? '6' : '4'"
          v-if="!search && contentList.length"
        />
        <feed-card
          :key="i"
          :feed="item"
          v-for="(item, i) in searchList"
          v-else-if="searchList.length"
        />
        <div v-else-if="search && !isSearching && !searchList.length">
          검색 결과가 존재하지 않습니다.
        </div>
        <loading v-else />
      </section>
    </div>
  </div>
  <div class="home" v-else>
    <p>최신 브라우저를 이용해주세요.</p>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Button from "@/components/Button/Button.vue";
import FilterButton from "@/components/Button/FilterButton.vue";
import OrderByControls from "@/components/OrderByControls.vue";
import FeedWithAdCardList from "@/components/FeedWithAdCardList.vue";
import FeedCard from "@/components/Card/FeedCard.vue";
import ModalView from "@/components/ModalView.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import Tag from "@/components/Tag.vue";
import Loading from "@/components/Loading.vue";
import CardViewControls from "@/components/CardViewControls.vue";
import { fetchFeedList } from "@/utils/api.js";
import { debounce } from "@/utils/debounce.js";
import { observeScrollEnd } from "@/utils/observeScrollEnd.js";
import { checkInternetExplores } from "@/utils/checkInternetExplores.js";
import { state, mutation, action } from "@/constants/index.js";

export default {
  components: {
    "custom-button": Button,
    FilterButton,
    FeedWithAdCardList,
    FeedCard,
    OrderByControls,
    CardViewControls,
    ModalView,
    CategoryFilter,
    Tag,
    Loading
  },
  watch: {
    search: async function(keyword) {
      this.isSearching = true;
      if (keyword === "") return this.resetSearch();
    }
  },
  computed: {
    ...mapState([
      state.LAST_PAGE_NUMBER,
      state.CURRENT_PAGE_NUMBER,
      state.CATEGORIES,
      state.ORDER_BY,
      state.CONTENT_LIST,
      state.FEED_LIST,
      state.IS_AD_REDUCTION_MODE
    ]),
    getSelectedCategories() {
      return this.categories.filter(category => category.isChecked);
    }
  },
  methods: {
    ...mapActions([
      action.ADD_FEED_LIST_WITH_AD_BANNERS,
      action.ADD_CATEGORIES
    ]),
    ...mapMutations([
      mutation.DELETE_ALL_LIST,
      mutation.RESET_ORDER_BY,
      mutation.INCREASE_CURRENT_PAGE_NUMBER
    ]),
    addNewFeedList() {
      if (this.lastPageNumber <= this.currentPageNumber) return;
      this.increaseCurrentPageNumber();
      this.addFeedListWithAdBanners();
    },
    addSearchList(list) {
      this.searchList = list;
      this.isSearching = false;
    },
    resetSearch() {
      this.search = "";
      this.searchList = [];
      this.isSearching = false;
    },
    handleEnterKey({ code, target: { value } }) {
      if (code !== "Enter") return;
      this.searchFeedsWithKeyword(value);
    },
    async searchFeedsWithKeyword(keyword) {
      if (!keyword) return;

      const regex = new RegExp(keyword, "gm");
      const result = await fetchFeedList({
        limit: 100,
        currentPageNumber: 0,
        orderBy: this.orderBy,
        categories: this.categories
      });

      const filteredList = result.data
        .filter(feed => regex.exec(feed.contents) || regex.exec(feed.title))
        .map(feed => ({
          ...feed,
          category_id:
            this.categories[feed.category_id - 1]?.name || feed.category_id
        }));

      this.addSearchList(filteredList);
    }
  },
  data() {
    return {
      debouncedObservationScrollEnd: null,
      isModalOpened: false,
      isIE: false,
      isSearching: false,
      search: "",
      searchList: []
    };
  },
  async beforeMount() {
    this.isIE = checkInternetExplores();

    if (this.isIE) return;
    if (!this.categories.length) await this.addCategories();
    if (!this.contentList.length) await this.addFeedListWithAdBanners();
  },
  mounted() {
    this.debouncedObservationScrollEnd = debounce(
      () => observeScrollEnd(this.addNewFeedList),
      300
    );
    document.addEventListener("scroll", this.debouncedObservationScrollEnd);
  },
  destroyed() {
    document.removeEventListener("scroll", this.debouncedObservationScrollEnd);
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 120px;
}

.wrapper {
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1140px;
}

aside {
  width: 235px;
  margin-right: 40px;
}

section {
  width: 865px;
}

.search {
  all: unset;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  padding: 10px 14px;
  border-radius: 5px;
  background-color: #e9ecee;
}

.search-list-count {
  margin-top: 20px;

  & span {
    color: #00c854;
  }
}

.sorting-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 11px;

  & > div {
    display: flex;
    align-items: center;
  }
}

.filter-tags {
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  margin-bottom: 12px;
}

@media (max-width: 924px) {
  aside {
    display: none;
  }
}

@media (max-width: 768px) {
  .home {
    margin: 0;
    margin-top: 70px;
  }

  .wrapper {
    width: 100%;
  }

  section {
    width: 100%;
  }

  .sorting-controls {
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    margin: 0;
    padding: 10px 15px 10px 15px;
    border-bottom: 1px solid #e1e4e7;
  }

  .filter-tags {
    box-sizing: border-box;
    height: 56px;
    padding: 0px 10px;
    margin: 0;
    border-bottom: 1px solid #e1e4e7;
  }
}
</style>
