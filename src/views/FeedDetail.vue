<template>
  <div class="feed-detail" v-if="feed">
    <div class="container">
      <feed-detail-card :feed="feed" />
      <div class="reply-count">
        <p>답변</p>
        <p>{{ feed.reply.length || 0 }}</p>
      </div>
      <reply-card :key="i" :reply="item" v-for="(item, i) in feed.reply" />
    </div>
  </div>
</template>

<script>
import FeedDetailCard from "@/components/FeedDetailCard.vue";
import ReplyCard from "@/components/ReplyCard.vue";
import { fetchFeedDetail } from "@/utils/api.js";

export default {
  components: {
    FeedDetailCard,
    ReplyCard
  },
  data() {
    return {
      feed: null
    };
  },
  async beforeCreate() {
    try {
      const result = await fetchFeedDetail(this.$route.params.id);
      this.feed = result.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.feed-detail {
  display: flex;
  justify-content: center;
  margin-top: 120px;
}

.container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1140px;
}

.reply-count {
  display: flex;
  margin-bottom: 10px;

  & p:first-child {
    margin-right: 6px;
  }

  & p:last-child {
    color: #00c854;
  }
}

@media (max-width: 768px) {
  .feed-detail {
    margin-top: 90px;
  }

  .container {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
