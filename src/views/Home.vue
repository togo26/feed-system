<template>
  <div class="home">
    <modal-view v-if="isModalOpened" @close-modal="isModalOpened = false">
      <category-filter :close-modal="() => (isModalOpened = false)" />
    </modal-view>
    <div class="wrapper">
      <aside>
        <Button text="로그인" />
      </aside>
      <section>
        <div class="sorting-controls">
          <order-by-controls />
          <filter-button text="필터" @handle-click="isModalOpened = true" />
        </div>
        <feed-list />
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Button from "@/components/Button.vue";
import OrderByControls from "@/components/OrderByControls.vue";
import FilterButton from "@/components/FilterButton.vue";
import FeedList from "@/components/FeedList.vue";
import ModalView from "@/components/ModalView.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import { debounce } from "@/utils/debounce.js";

export default {
  name: "Home",
  components: {
    Button,
    FilterButton,
    FeedList,
    OrderByControls,
    ModalView,
    CategoryFilter
  },
  computed: {
    ...mapState(["lastPage", "currentPage", "categories"])
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
      isModalOpened: false
    };
  },
  async beforeMount() {
    if (!this.categories.length) await this.addCategories();
    await this.addFeedListWithAdBanners();
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
    this.deleteAllList();
    this.resetOrderBy();
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
}
</style>
