<template>
  <button @click="$emit('handle-click')">{{ text }}</button>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
button {
  all: unset;
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
  font-size: 13px;
  text-align: center;
  color: #adb5bd;

  &:active {
    background-color: #eeeeee;
  }
}
</style>
