<template>
  <div class="modal">
    <div class="overlay" />
    <div class="modal-card">
      <close-button @close="$emit('close-modal')" />
      <slot />
    </div>
  </div>
</template>

<script>
import CloseButton from "@/components/Button/CloseButton.vue";

export default {
  components: {
    CloseButton
  }
};
</script>

<style lang="scss" scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 25;
}

.overlay {
  background-color: $black;
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
  background-color: $white;
  z-index: 50;
  opacity: 1;
}

@media (max-width: 768px) {
  .modal-card {
    max-width: 337px;
  }
}
</style>
