<template>
  <div>
    <card
      :key="i"
      :content="item"
      :index="i"
      v-for="(item, i) in contentList"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  computed: {
    ...mapState(["contentList"])
  }
};
</script>
