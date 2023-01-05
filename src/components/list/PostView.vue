<script setup>
const props = {
  list
}

</script>

<template>
  <section v-for="post in filteredPosts" :key="post">
    <div class="post-area">
      <!-- <div class="name-area">
        <div class="name">
          NickName
        </div>
      </div> -->
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
</style>