<template>
  <div class="wrapper">
    <slot>Card</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  padding: 0px 30px;
  border-radius: 5px;
  border: 1px solid #e1e4e7;
}
</style>
