<script setup>
const props = defineProps({
  list: String,
});
</script>

<template>
  <section v-for="post in props.list" :key="post">
    <div class="post-area">
      <div class="photo-area">
        <img class="photo" :src="post.imageUrl">
      </div>
      <div class="title-area">
        <p class="title">
          {{ post.title }}
        </p>
      </div>
      <div class="int-area">
        <p class="int">
          {{ post.introduce }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
main {
  width: 100%;
  margin: 0px;
  background-color: snow;
  overflow: hidden;
}

.post-area {
  width: 70%;
  margin: 50px auto;
  padding: 20px 0px;
  border: solid 1px grey;
  box-shadow: 2px 2px 2px 3px grey;
  border-radius: 20px;
}

.photo-area {
  width: 80%;
  margin: 20px auto;
}

.photo {
  width: 100%;
  border-radius: 30px;
  margin: 0px auto;
}

.title-area {
  width: 60%;
  margin: 0 auto;
}

.title {
  width: 100%;
  height: 30px;
  margin: 20px auto 0px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
}

.int-area {
  width: 60%;
  margin: 0 auto;
  padding: 10px 0px;
}

.int {
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
  text-align: center;
  color: grey;
}

</style>