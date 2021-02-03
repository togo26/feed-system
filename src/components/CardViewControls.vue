<template>
  <div class="toggle-card-view-mode" @click="toggleExpandedCardViewMode">
    {{ isExpandedCardViewMode ? "10개씩 보기" : "20개씩 보기" }}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { state, mutation, action } from "@/constants/index.js";

export default {
  props: ["resetSearch"],
  computed: {
    ...mapState([state.IS_EXPANDED_CARD_VIEW_MODE])
  },
  methods: {
    ...mapActions([action.ADD_FEED_LIST_WITH_AD_BANNERS]),
    ...mapMutations([
      mutation.DELETE_ALL_LIST,
      mutation.UPDATE_EXPANDED_CARD_VIEW_MODE
    ]),
    toggleExpandedCardViewMode() {
      this.updateExpandedCardViewMode();
      this.resetSearch();
      this.deleteAllList();
      this.addFeedListWithAdBanners();
    }
  }
};
</script>

<style>
.toggle-card-view-mode {
  cursor: pointer;
  color: #bbb;
  font-size: 14px;
  text-decoration: underline;
  margin-right: 14px;
}
</style>
