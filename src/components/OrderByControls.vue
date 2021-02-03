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
import { state, mutation, action } from "@/constants/index.js";

export default {
  props: ["resetSearch"],
  computed: {
    ...mapState([state.CURRENT_PAGE_NUMBER, state.ORDER_BY])
  },
  methods: {
    ...mapActions([action.ADD_FEED_LIST_WITH_AD_BANNERS]),
    ...mapMutations([mutation.DELETE_ALL_LIST, mutation.UPDATE_ORDER_BY]),
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
  background-color: $gray100;

  & ~ label {
    color: $gray300;
  }
}

input[type="radio"]:checked {
  background-color: $green;

  & ~ label {
    color: $gray400;
  }
}
</style>
