<template>
  <div>
    <feed-card :key="i" :feed="item" v-for="(item, i) in feedList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import FeedCard from "@/components/FeedCard.vue";
export default {
  components: {
    FeedCard
  },
  computed: {
    ...mapState(["feedList"])
  }
};
</script>
