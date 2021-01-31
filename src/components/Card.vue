<template>
  <article>
    <feed-card v-if="(index + 1) % 4" :feed="content" />
    <ad-card v-else :ad="content" />
  </article>
</template>

<script>
import FeedCard from "@/components/FeedCard.vue";
import AdCard from "@/components/AdCard.vue";

export default {
  props: ["content", "index"],
  components: {
    FeedCard,
    AdCard
  }
};
</script>
