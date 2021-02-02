<template>
  <article>
    <component
      :is="(index + 1) % maxFeedLength ? 'FeedCard' : 'AdCard'"
      :ad="content"
      :feed="content"
    >
    </component>
  </article>
</template>

<script>
import FeedCard from "@/components/Card/FeedCard.vue";
import AdCard from "@/components/Card/AdCard.vue";

export default {
  props: ["content", "index", "maxFeedLength"],
  components: {
    FeedCard,
    AdCard
  }
};
</script>
