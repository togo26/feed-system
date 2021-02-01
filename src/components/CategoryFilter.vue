<template>
  <div>
    <h3>필터</h3>
    <div class="checkbox-controls">
      <check-box
        :key="i"
        :category="item"
        @handle-checkbox-click="handleCheckBoxClick"
        v-for="(item, i) in categories"
      />
    </div>
    <Button text="저장하기" @handle-click="handleButtonClick" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CheckBox from "@/components/CheckBox.vue";
import Button from "@/components/Button.vue";
export default {
  props: ["close-modal"],
  components: {
    Button,
    CheckBox
  },
  computed: {
    ...mapState(["categories"])
  },
  methods: {
    ...mapMutations([
      "updateCategories",
      "resetLastPage",
      "deleteAllLists",
      "resetCurrentPage"
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
    handleButtonClick() {
      const isChanged = this.currentCheckList.some((category, idx) => {
        return category.isChecked !== this.categories[idx].isChecked;
      });
      if (!isChanged) return this.closeModal();
      this.updateCategories({ list: this.currentCheckList });
      this.closeModal();
      this.deleteAllLists();
      this.resetLastPage();
      this.resetCurrentPage();
      this.addFeedListWithAdBanners();
    }
  },
  data() {
    return {
      currentCheckList: null
    };
  },
  beforeMount() {
    this.currentCheckList = this.categories.map(category => ({ ...category }));
  }
};
</script>

<style lang="scss" scoped>
.checkbox-controls {
  display: flex;
  flex-direction: column;
}

button {
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
}
</style>
