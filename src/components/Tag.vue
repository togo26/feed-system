<template>
  <div>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
span {
  padding: 2px 10px;
  border-radius: 20px;
  margin-right: 6px;
  color: #00c854;
  border: 1px solid #00c854;
}
</style>
