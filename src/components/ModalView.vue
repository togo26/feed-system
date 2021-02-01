<template>
  <div class="modal">
    <div class="overlay" />
    <div class="modal-card">
      <div class="close-button" @click="$emit('close-modal')"></div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
}

.overlay {
  background-color: #000;
  opacity: 0.7;
}

.modal-card {
  box-sizing: border-box;
  width: 100%;
  max-width: 460px;
  height: 268px;
  margin: auto;
  padding: 20px;
  position: relative;
  top: calc(50% - 300px / 2);
  background-color: #fff;
  z-index: 10;
  opacity: 1;
}

.close-button {
  cursor: pointer;
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 22px;
    width: 3px;
    background-color: #adb5bd;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>
