<template>
  <click-button @handle-click="$emit('handle-click')">
    <slot>필터</slot>
  </click-button>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    "click-button": Button
  }
};
</script>

<style lang="scss" scoped>
button {
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
