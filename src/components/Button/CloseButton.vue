<template>
  <div class="close-button" @click="$emit('close')"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.close-button {
  cursor: pointer;
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 22px;
    width: 3px;
    background-color: $gray300;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>
