<template>
  <router-link :to="'/' + feed.id" v-if="feed">
    <div class="wrapper">
      <div class="id-info">
        <span>{{ feed.category_id }}</span>
        <span>{{ feed.id }}</span>
      </div>
      <div class="user-info">
        <span>{{ feed.user_id }}</span>
        <span>{{ sliceTimeString(feed.created_at) }}</span>
      </div>
      <h3>{{ feed.title }}</h3>
      <p>{{ feed.contents }}</p>
    </div>
  </router-link>
</template>

<script>
import { sliceTimeString } from "@/utils/sliceTimeString.js";
export default {
  props: ["feed"],
  data() {
    return {
      sliceTimeString
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  padding: 0px 30px;
  border-radius: 5px;
  border: solid 1px #e1e4e7;
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
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #495057;
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
