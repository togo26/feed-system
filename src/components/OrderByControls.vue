<template>
  <div class="order-by">
    <div class="order-by__ascending">
      <input
        type="radio"
        id="ascending"
        value="ascending"
        name="order-by"
        @click="handleRadioClick"
        :checked="orderBy === 'ascending'"
      />
      <label for="ascending">오름차순</label>
    </div>
    <div class="order-by__descending">
      <input
        type="radio"
        id="descending"
        value="descending"
        name="order-by"
        @click="handleRadioClick"
        :checked="orderBy === 'descending'"
      />
      <label for="descending">내림차순</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  props: ["resetSearch"],
  computed: {
    ...mapState(["currentPageNumber", "orderBy"])
  },
  methods: {
    ...mapActions(["addFeedListWithAdBanners"]),
    ...mapMutations(["deleteAllList", "updateOrderBy"]),
    handleRadioClick(e) {
      if (this.orderBy === e.target.value) return;
      this.updateOrderBy({ orderBy: e.target.value });
      this.resetSearch();
      this.deleteAllList();
      this.addFeedListWithAdBanners();
    }
  }
};
</script>

<style lang="scss" scoped>
.order-by {
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 13px;

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  & > div > label {
    position: relative;
    top: 2px;
  }
}

input[type="radio"] {
  appearance: none;
  outline: none;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 6px;
}

input[type="radio"] {
  background-color: #e1e4e7;

  & ~ label {
    color: #adb5bd;
  }
}

input[type="radio"]:checked {
  background-color: #00c854;

  & ~ label {
    color: #495057;
  }
}
</style>
