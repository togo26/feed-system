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
import { mapActions } from "vuex";
import Button from "@/components/Button.vue";
import OrderByControls from "@/components/OrderByControls.vue";
import FilterButton from "@/components/FilterButton.vue";
import FeedList from "@/components/FeedList.vue";

export default {
  name: "Home",
  components: {
    Button,
    FilterButton,
    FeedList,
    OrderByControls
  },
  methods: {
    ...mapActions(["addFeedListWithAdBanners"])
  },
  async beforeMount() {
    await this.addFeedListWithAdBanners();
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
