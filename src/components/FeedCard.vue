<template>
  <router-link :to="'/' + feed.id">
    <article>
      <div class="id-info">
        <span>{{ feed.category_id }}</span>
        <span>{{ feed.id }}</span>
      </div>
      <div class="user-info">
        <span>{{ feed.user_id }}</span>
        <span>{{ feed.created_at }}</span>
      </div>
      <h3>{{ feed.title }}</h3>
      <p>{{ feed.contents }}</p>
    </article>
  </router-link>
</template>

<script>
export default {
  props: ["feed"]
};
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}

article {
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  padding: 0px 30px;
  border-radius: 5px;
  border: solid 1px #e1e4e7;
}

.id-info {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 12px 0px;
  border-bottom: 1px solid #e1e4e7;
  font-size: 13px;
}

.user-info {
  padding: 20px 0px;
  font-size: 13px;

  & span:first-child {
    padding-right: 12px;
    margin-right: 10px;
    border-right: 1px solid #e1e4e7;
    color: #00c854;
  }
}
h3 {
  width: 42vw;
  /* width: 50%; */
  height: 28px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

p {
  width: 42vw;
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #495057;
}
</style>
