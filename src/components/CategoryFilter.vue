<template>
  <div class="category-filter-controls">
    <h3>필터</h3>
    <div class="checkbox-controls">
      <check-box
        :key="i"
        :category="item"
        @handle-checkbox-click="handleCheckBoxClick"
        v-for="(item, i) in categories"
      />
    </div>
    <p class="message" v-show="message">{{ message }}</p>
    <Button @handle-click="handleSaveClick">저장하기</Button>
    <div class="toggle-ad-reduction-mode" @click="toggleAdReductionMode">
      {{ currentAdReductionMode ? "광고 더보기" : "광고 줄이기" }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CheckBox from "@/components/CheckBox.vue";
import Button from "@/components/Button/Button.vue";
export default {
  props: ["close-modal", "resetSearch"],
  components: {
    Button,
    CheckBox
  },
  computed: {
    ...mapState(["categories", "isAdReductionMode"])
  },
  methods: {
    ...mapMutations([
      "updateCategories",
      "deleteAllList",
      "updateAdReductionMode"
    ]),
    ...mapActions(["addFeedListWithAdBanners"]),
    handleCheckBoxClick(checkbox) {
      const newCategories = this.currentCheckList.map(category => {
        if (category.id === Number(checkbox.id)) {
          category.isChecked = checkbox.checked;
        }
        return category;
      });
      this.currentCheckList = newCategories;
    },
    handleSaveClick() {
      const isChanged = this.currentCheckList.some((category, idx) => {
        return category.isChecked !== this.categories[idx].isChecked;
      });

      const isAllUnchecked = this.currentCheckList.some(
        category => category.isChecked
      );

      if (!isAllUnchecked) {
        this.message = "최소 하나의 필터가 체크 되어야 합니다.";
        return;
      }

      if (this.currentAdReductionMode !== this.isAdReductionMode) {
        this.updateAdReductionMode(this.currentAdReductionMode);
        this.resetSearch();
        this.deleteAllList();
        this.addFeedListWithAdBanners();
      }

      if (!isChanged) return this.closeModal();

      this.updateCategories({ list: this.currentCheckList });
      this.closeModal();
      this.resetSearch();
      this.deleteAllList();
      this.addFeedListWithAdBanners();
    },
    toggleAdReductionMode() {
      this.currentAdReductionMode = !this.currentAdReductionMode;
    }
  },
  data() {
    return {
      currentCheckList: null,
      currentAdReductionMode: null,
      message: ""
    };
  },
  beforeMount() {
    this.currentAdReductionMode = this.isAdReductionMode;
    this.currentCheckList = this.categories.map(category => ({ ...category }));
  }
};
</script>

<style lang="scss" scoped>
.category-filter-controls {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.checkbox-controls {
  display: flex;
  flex-direction: column;
  height: 120px;
}

.toggle-ad-reduction-mode {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  color: #bbb;
  font-size: 14px;
  text-decoration: underline;
}

.message {
  font-size: 12px;
  color: #eb4d4b;
  margin-top: -12px;
}

button {
  align-self: flex-end;
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
}

h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  button {
    align-self: flex-start;
    width: 100%;
  }

  .toggle-ad-reduction-mode {
    left: 115px;
    bottom: -6px;
  }

  .message {
    box-sizing: border-box;
    padding-bottom: 4px;
    text-align: center;
  }
}
</style>
