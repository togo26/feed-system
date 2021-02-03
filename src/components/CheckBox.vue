<template>
  <div class="wrapper">
    <input
      type="checkbox"
      @click="e => $emit('handle-checkbox-click', e.target)"
      :id="category.id"
      :checked="category.isChecked"
    />
    <label :for="category.id">
      <span>{{ category.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style lang="scss" scoped>
span {
  padding: 0 4px;
}

.wrapper input[type="checkbox"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.wrapper input[type="checkbox"] + label {
  display: inline-block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
  margin-bottom: 20px;
}

.wrapper input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  width: 20px;
  height: 20px;
  text-align: center;
  background: $white;
  border: 1px solid $gray100;
  box-sizing: border-box;
}

.wrapper input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  left: 0;
  top: -2px;
  width: 20px;
  height: 20px;
  background-color: $green;
  z-index: 4;
}
</style>
