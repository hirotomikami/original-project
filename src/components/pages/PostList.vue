<script setup>
import Footer from "../footer/Footer.vue";
import { ref } from "vue";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";
import PostView from "../list/PostView.vue";


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
  };
});
</script>
<template>
  <body>
    <div class="blur">
      <div class="top-element">
        <header>
          <div class="text">
            <h1>FAV S/S</h1>
          </div>
        </header>
      </div>
    </div>
    <main>
      <PostView :list="posts"/>
    </main>
    <Footer />
  </body>
</template>


<style scoped>
.blur {
  background: url(./src/assets/img/haikei.jpg) no-repeat center;
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
  height: 150px;
}

header .text h1 {
  text-align: center;
  line-height: 150px;
  font-size: 50px;
  color: snow;
  z-index: 3;
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