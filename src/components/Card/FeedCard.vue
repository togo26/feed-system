<template>
  <router-link :to="'/' + feed.id" v-if="feed">
    <card class="wrapper">
      <div class="id-info">
        <span>{{ feed.category_id }}</span>
        <span>피드 번호 - {{ feed.id }}</span>
      </div>
      <div class="user-info">
        <span>{{ feed.user_id }}</span>
        <span>{{ sliceTimeString(feed.created_at) }}</span>
      </div>
      <h3>{{ feed.title }}</h3>
      <p>{{ feed.contents }}</p>
    </card>
  </router-link>
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
  transition: height 0.3s ease;
}

.id-info {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 12px 0px;
  border-bottom: 1px solid #e1e4e7;
  font-size: 13px;
}

.user-info {
  padding: 20px 0px;
  font-size: 13px;

  & span:first-child {
    padding-right: 12px;
    margin-right: 10px;
    border-right: 1px solid #e1e4e7;
    color: #00c854;
  }
}

h3 {
  width: 44vw;
  max-width: 700px;
  height: 28px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

p {
  width: 44vw;
  max-width: 700px;
  height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #495057;
  line-height: 24px;
  transition: height 0.3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .wrapper:hover {
    height: 210px;

    & > p {
      height: 46px;
      -webkit-line-clamp: 2;
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0 15px;
    border: none;
    border-radius: 0px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  h3 {
    width: 96%;
  }

  p {
    width: 96%;
  }
}
</style>
