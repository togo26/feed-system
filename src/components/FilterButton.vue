<template>
  <button @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    text: String
  },
  methods: {
    handleClick() {
      console.log("clicked");
    }
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

  &:active {
    background-color: #eeeeee;
  }
}
</style>
