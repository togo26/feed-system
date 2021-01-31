<template>
  <div class="home">
    <div class="wrapper">
      <aside>
        <Button text="로그인" />
      </aside>
      <section>
        <div class="sorting-controls">
          <order-by-controls />
          <filter-button text="필터" />
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
import { debounce } from "@/utils/debounce.js";

export default {
  name: "Home",
  components: {
    Button,
    FilterButton,
    FeedList,
    OrderByControls
  },
  computed: {
    ...mapState(["lastPage"])
  },
  methods: {
    ...mapActions(["addFeedListWithAdBanners"]),
    ...mapMutations(["resetLastPage", "deleteAllLists"]),
    observeScrollEnd(fn) {
      const clientHeight = document.body.clientHeight;
      const windowInnerHeight = window.innerHeight;
      if (window.scrollY + 1 >= clientHeight - windowInnerHeight) fn();
    },
    addNewFeedList() {
      if (this.lastPage <= this.currentPage) return;
      this.currentPage++;
      this.addFeedListWithAdBanners({ page: this.currentPage });
    }
  },
  data() {
    return {
      debouncedObservationScrollEnd: null,
      currentPage: 1
    };
  },
  beforeMount() {
    this.addFeedListWithAdBanners({ page: this.currentPage });
  },
  mounted() {
    this.debouncedObservationScrollEnd = debounce(
      () => this.observeScrollEnd(this.addNewFeedList),
      600
    );
    document.addEventListener("scroll", this.debouncedObservationScrollEnd);
  },
  destroyed() {
    this.resetLastPage();
    this.deleteAllLists();
    document.removeEventListener("scroll", this.debouncedObservationScrollEnd);
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
  width: 100%;
  height: 24px;
  margin-bottom: 11px;
}
</style>
