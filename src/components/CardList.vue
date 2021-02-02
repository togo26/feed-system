<template>
  <div>
    <slot>
      <conditional-card
        :key="i"
        :content="item"
        :index="i"
        v-for="(item, i) in list"
      />
    </slot>
  </div>
</template>

<script>
import ConditionalCard from "@/components/Card/ConditionalCard.vue";

export default {
  props: ["list"],
  components: {
    ConditionalCard
  }
};
</script>
