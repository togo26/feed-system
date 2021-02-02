<template>
  <div class="home" v-if="!isIE">
    <modal-view v-if="isModalOpened" @close-modal="isModalOpened = false">
      <category-filter :close-modal="() => (isModalOpened = false)" />
    </modal-view>
    <div class="wrapper">
      <aside>
        <Button>로그인</Button>
      </aside>
      <section>
        <div class="sorting-controls">
          <order-by-controls />
          <filter-button text="필터" @handle-click="isModalOpened = true" />
        </div>
        <div class="filter-tags">
          <tag
            :key="i"
            :text="item.name"
            v-for="(item, i) in getSelectedCategories"
          />
        </div>
        <card-list
          :list="contentList"
          :maxFeedLength="isAdReductionMode ? '6' : '4'"
          v-if="contentList.length"
        />
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
import CardList from "@/components/CardList.vue";
import ModalView from "@/components/ModalView.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import Tag from "@/components/Tag.vue";
import Loading from "@/components/Loading.vue";
import { debounce } from "@/utils/debounce.js";
import { checkInternetExplores } from "@/utils/checkInternetExplores.js";

export default {
  name: "Home",
  components: {
    Button,
    FilterButton,
    CardList,
    OrderByControls,
    ModalView,
    CategoryFilter,
    Tag,
    Loading
  },
  computed: {
    ...mapState([
      "lastPage",
      "currentPage",
      "categories",
      "contentList",
      "isAdReductionMode"
    ]),
    getSelectedCategories() {
      return this.categories.filter(category => category.isChecked);
    }
  },
  methods: {
    ...mapActions(["addFeedListWithAdBanners", "addCategories"]),
    ...mapMutations(["deleteAllList", "resetOrderBy", "updateCurrentPage"]),
    observeScrollEnd(fn) {
      const clientHeight = document.body.clientHeight;
      const windowInnerHeight = window.innerHeight;
      if (window.scrollY + 1 >= clientHeight - windowInnerHeight) fn();
    },
    addNewFeedList() {
      if (this.lastPage <= this.currentPage) return;
      this.updateCurrentPage();
      this.addFeedListWithAdBanners();
    }
  },
  data() {
    return {
      debouncedObservationScrollEnd: null,
      isModalOpened: false,
      isIE: false
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
      () => this.observeScrollEnd(this.addNewFeedList),
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

.sorting-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 11px;
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
