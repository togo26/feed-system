<template>
  <header>
    <div class="wrapper">
      <router-link :to="'/'" v-if="currentPath !== '/'">
        <p class="description">{{ description }}</p>
        <p class="back-button">∧</p>
      </router-link>
      <p v-else>{{ description }}</p>
    </div>
  </header>
</template>

<script>
export default {
  watch: {
    $route(to) {
      this.currentPath = to.path;
    }
  },
  data() {
    return {
      currentPath: "/",
      description: "‘[제출일] 이름’ 을 작성해주세요:)"
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  z-index: 10;
}

.wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 1140px;
}

.back-button {
  display: none;
  font-size: 24px;
  font-weight: 700;
  transform: rotate(-90deg);
}

@media (max-width: 768px) {
  .wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
  }

  .back-button {
    display: block;
  }

  .description {
    display: none;
  }
}
</style>
