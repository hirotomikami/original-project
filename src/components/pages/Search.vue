<script setup>
import Footer from "./footer/Footer.vue";
import { ref, computed } from "vue";
import { getDatabase, ref as dbRef, onValue } from "firebase/database"
// import PostView from "./list/PostView.vue";


// 投稿データを取得,表示
const posts = ref([]);
const db = getDatabase();
const refPost = dbRef(db,"post");

onValue(refPost, (snapshot) => {
  const snap = snapshot.val();
  for (const key in snap) {
    posts.value.push({
      title: snap[key].title,
      introduce: snap[key].introduce,
      imageUrl: snap[key].imageUrl,
    });
  }
});

// 検索処理
const searchWord = ref("");
const filterWord = ref("");

// computed:自動で上書き処理
// title,introduceにfilterWordが含まれる投稿filter
const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    return post.title.includes(filterWord.value)
      || post.introduce.includes(filterWord.value)
  })
})

// インプットした検索ワードを別の変数に格納
const search = () => {
  filterWord.value = searchWord.value
  console.log(filteredPosts.value)
}

{/* <PostView :list="filteredPosts" /> */}

</script>


<template>
  <div class="blur">
    <div class="top-element">
      <header>
        <div class="text">
          <h1>FAV S/S</h1>
        </div>
        <div class="form-area">
          <form class="form-search"  method="get">
            <input
              class="search-input"
              type="search" name="search"
              placeholder="キーワードを入力"
              v-model="searchWord">
          </form>
        </div>
        <a href="javascript:void(0);" @click="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
      </header>
    </div>
  </div>
  <main class="main-2">
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
  </main>
  <Footer />
</template>


<style scoped>
 .blur {
 background: url(src/img/haikei.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.blur:before {
  content: '';
  background: inherit;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
}

header {
  width: 100%;
}

header .text h1 {
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  color: snow;
  z-index: 3;
}

.main-1 {
  width: 100%;
  height: 800px;
}

.form-search {
  width: 200px;
  margin: 50px auto;
}

.search-input {
  margin: 0px auto;
  width: 100%;
  height: 40px;
  border-radius: 100px;
  font-size: 15px;
  text-align: center;
  background-color: rgba(255,255,255,0.1);
  font-weight: bold;
  border: solid 2px grey;
}

.search-input::placeholder {
  color: snow;
}

.fa-magnifying-glass {
  position: absolute;
  top: 150px;
  right: 2%;
  color: snow;
  font-size: 30px;
}

.main-2 {
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

/* .name-area {
  width: fit-content;
  background-color: grey;
  margin-left: 10px;
  border-radius: 10px;
}

.name {
  text-align: center;
  color: snow;
  font-size: 10px;
  padding: 5px;
} */

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

footer {
  position: fixed;
  bottom: 0px;
}

@media screen and (min-width:768px) {
  footer {
    width: 60%;
  }
}
</style>