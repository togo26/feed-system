<template>
  <custom-button @handle-click="$emit('handle-click')">
    <slot>필터</slot>
  </custom-button>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    "custom-button": Button
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px $gray100;
  background-color: $white;
  font-size: 13px;
  text-align: center;
  color: $gray300;

  &:active {
    background-color: $gray100;
  }
}
</style>
