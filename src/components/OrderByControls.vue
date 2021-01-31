<template>
  <div class="order-by">
    <div class="order-by__ascending">
      <input
        type="radio"
        id="ascending"
        value="ascending"
        name="order-by"
        @click="handleRadioClick"
        checked
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
      />
      <label for="descending">내림차순</label>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions(["addFeedListWithAdBanners"]),
    ...mapMutations(["deleteAllLists", "resetLastPage"]),
    handleRadioClick(e) {
      if (this.currentValue === e.target.value) return;
      const orderBy = e.target.value === "ascending" ? "asc" : "desc";
      this.currentValue = e.target.value;
      this.deleteAllLists();
      this.resetLastPage();
      this.addFeedListWithAdBanners({ orderBy });
    }
  },
  data() {
    return {
      currentValue: "ascending"
    };
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
