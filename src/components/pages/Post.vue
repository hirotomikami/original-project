<script setup>
import Footer from './footer/Footer.vue'
import { ref } from "vue";
import { getDatabase, ref as dbRef, push } from "firebase/database";

const inputTitle = ref('');
const inputIntroduce = ref('');

// const doPost = () => {
//   if(input.value === '') return;
//   input.value = '';
// }

const pushPost = () => {
  let postData = {
    displayName: "test",
    uid: "test",
    title: inputTitle.value,
    introduce: inputIntroduce.value,
  }

  // if (input.value === '') {
  //   return;
  // } else {
  //   next('/postList');
  // }

// firebaseに保存
const db = getDatabase();
push(dbRef(db, 'post'), postData);

};

// beforeRouteEnter: (to, from, next) => {
//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       next();
//     } else {
//       next('/login');
//     }
//   });
// }
</script>

<template>
  <body>
    <div class="blur">
      <main>
        <div class="form-area-photo">
          <p class="photo">画像フォーム領域</p>
        </div>
        <div class="form-area-title">
          <form class="form-title">
            <input
              class="title"
              action="サイトURL"
              type="text"
              name="post"
              placeholder="タイトル"
              v-model="inputTitle"
            />
          </form>
        </div>
        <div class="form-area-int">
          <form class="form-int">
            <input
              class="int"
              action="サイトURL"
              type="text"
              name="int"
              placeholder="紹介文"
              v-model="inputIntroduce"
            />
          </form>
        </div>
        <form class="form-button">
          <button
            class="button-post"
            type="button"
            value="text"
            @click="pushPost()"
          >POST</button>
        </form>
      </main>
    </div>
    <Footer />
  </body>
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

main {
  width: 100%;
}

input {
  color: snow;
  font-size: 20px;
}

.form-area-photo {
  width: 350px;
  background-color: grey;
  margin: 50px auto;
}

.photo {
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 300px;
}

.form-title {
  width: 250px;
  margin: 0 auto;
}

.title {
  width: 100%;
  margin: 0 auto;
  height: 60px;
  border-radius: 10px;
  border: solid 3px grey;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(255,255,255,0.1);
}

.form-int {
  width: 350px;
  margin: 50px auto;
}

.int {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  border: solid 3px grey;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background-color: rgba(255,255,255,0.1);
}

.form-button {
  width: 180px;
  margin: 70px auto;
}

.button-post {
  width: 100%;
  height: 5em;
  background-color: snow;
  border-radius: 15px;
  font-size: 15px;
  margin: 0 auto;
  font-weight: bold;
  box-shadow: 3px 2px 2px 2px grey;
}
</style>