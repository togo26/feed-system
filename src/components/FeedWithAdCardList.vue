<template>
  <div>
    <conditional-card
      :key="i"
      :content="item"
      :index="i"
      :maxFeedLength="maxFeedLength"
      v-for="(item, i) in list"
    />
  </div>
</template>

<script>
import ConditionalCard from "@/components/Card/ConditionalCard.vue";

export default {
  props: ["list", "maxFeedLength"],
  components: {
    ConditionalCard
  }
};
</script>
