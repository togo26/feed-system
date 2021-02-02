<template>
  <button @click="$emit('handle-click')">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  all: unset;
  cursor: pointer;
  width: 235px;
  height: 60px;
  border-radius: 5px;
  background-color: #00c854;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #fff;

  &:active {
    background-color: #00b84d;
  }
}
</style>
