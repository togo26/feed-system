<template>
  <div class="wrapper" v-if="ad">
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
  </div>
</template>

<script>
export default {
  props: ["ad"]
};
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 255px;
  margin-bottom: 30px;
  padding: 0px 30px;
  border-radius: 5px;
  border: solid 1px #e1e4e7;
}

.ad-caption {
  margin: 20px 0 14px 0;

  & span {
    font-size: 13px;
    color: #adb5bd;
  }
}

.ad-contents {
  display: flex;

  & img {
    width: 100%;
    max-width: 310px;
    height: 21vh;
    max-height: 180px;
    margin-right: 30px;
    object-fit: cover;
  }

  & .ad-contents__text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      width: 28vw;
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
      width: 28vw;
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
</style>
