<template>
  <div>
    <slot>
      <span class="box"></span>
      <span class="box"></span>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  margin: 60px 0;
  text-align: center;
}

.box {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin: 6px;
  background-color: $green;
  opacity: 0.8;
}

.box:first-child {
  animation: 1.6s slideRight infinite;
}

.box:last-child {
  background-color: $black;
  animation: 1.6s slideLeft infinite;
}

@keyframes slideRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(40px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
