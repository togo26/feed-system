<template>
  <card class="wrapper" v-if="ad">
    <div class="ad-caption">
      <span>sponsored</span>
    </div>
    <div class="ad-contents">
      <img :src="'https://cdn.comento.kr/assignment/' + ad.img" :alt="ad.img" />
      <div class="ad-contents__text-box">
        <h3>{{ ad.title }}</h3>
        <p>{{ ad.contents }}</p>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "@/components/Card/Card.vue";

export default {
  props: ["ad"],
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 255px;
}

.ad-caption {
  margin: 20px 0 14px 0;

  & span {
    font-size: 13px;
    color: $gray300;
  }
}

.ad-contents {
  display: flex;

  & img {
    width: 310px;
    height: 180px;
    margin-right: 30px;
    object-fit: cover;
    background-color: $gray100;
  }

  & .ad-contents__text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    h3 {
      max-width: 550px;
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      max-width: 550px;
      line-height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}

@media (max-width: 768px) {
  .wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 381px;
    border: none;
    border-radius: 0px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 4px 15px;
    margin-bottom: 10px;
  }

  .ad-contents {
    flex-direction: column;
    align-items: center;
    width: 100%;

    & img {
      width: 100%;
      margin: 0;
      margin-bottom: 14px;
    }

    & .ad-contents__text-box {
      width: 100%;

      h3 {
        width: 96%;
      }

      p {
        width: 96%;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
