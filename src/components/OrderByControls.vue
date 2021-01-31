<template>
  <div class="order-by">
    <div class="order-by__ascending">
      <input
        type="radio"
        id="ascending"
        value="ascending"
        name="order-by"
        checked
      />
      <label for="ascending">오름차순</label>
    </div>
    <div class="order-by__descending">
      <input type="radio" id="descending" value="descending" name="order-by" />
      <label for="descending">내림차순</label>
    </div>
  </div>
</template>

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
</style>
