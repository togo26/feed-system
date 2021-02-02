<template>
  <article>
    <component
      :is="(index + 1) % 4 ? 'FeedCard' : 'AdCard'"
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
  props: ["content", "index"],
  components: {
    FeedCard,
    AdCard
  }
};
</script>
