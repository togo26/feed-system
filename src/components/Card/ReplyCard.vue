<template>
  <card class="wrapper">
    <div class="id-info">
      <span>{{ reply.user.name }}</span>
    </div>
    <p>{{ reply.contents }}</p>
    <p class="created-at">{{ sliceTimeString(reply.created_at) }}</p>
  </card>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { sliceTimeString } from "@/utils/sliceTimeString.js";

export default {
  props: ["reply"],
  components: {
    Card
  },
  data() {
    return {
      sliceTimeString
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 200px;
  padding: 26px 30px;
}

.id-info {
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 12px 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid $gray100;
  font-size: 13px;
  color: $gray300;
}

h3 {
  width: 96%;
  height: 40px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p {
  width: 96%;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26px;
  color: $gray400;
  margin-bottom: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.created-at {
  font-size: 13px;
  color: $gray300;
}

@media (max-width: 768px) {
  .wrapper {
    border: none;
    border-radius: 0;
    padding: 26px 0px;
    border-top: 1px solid $gray100;
    border-bottom: 1px solid $gray100;
  }
}
</style>
