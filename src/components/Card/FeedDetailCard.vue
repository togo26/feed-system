<template>
  <card class="wrapper">
    <h3>{{ feed.title }}</h3>
    <p>{{ feed.contents }}</p>
    <p class="created-at">{{ sliceTimeString(feed.created_at) }}</p>
  </card>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { sliceTimeString } from "@/utils/sliceTimeString.js";

export default {
  props: ["feed"],
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
  height: 210px;
  padding: 25px 30px;
  border: solid 1px #00c854;
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
  color: #495057;
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
  color: #adb5bd;
}

@media (max-width: 768px) {
  .wrapper {
    border: none;
    border-radius: 0;
    padding: 25px 0;
    border-top: 1px solid #00c854;
    border-bottom: 1px solid #00c854;
  }
}
</style>
