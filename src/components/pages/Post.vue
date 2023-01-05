<script setup>
import Footer from '../footer/Footer.vue'
import { ref, computed } from "vue";
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { getStorage, ref as stgRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";


// post.vueで画像選択後、画像プレビューを表示
const url = computed(() => {
  if (!image.value) {
    return "";
  }

  return URL.createObjectURL(image.value?.[0]);
});


const inputTitle = ref('');
const inputIntroduce = ref('');
const storage =getStorage();
const image = ref(null);


//Storageを使用した画像アップロード機能、データ定義、firebaseに保存
const pushPost = async() => {
  const file = image.value?.[0]
  const storageRef = stgRef(storage, 'images/' + file.name);

  await uploadBytesResumable(storageRef, file);
  const dlUrl = await getDownloadURL(storageRef)

  let postData = {
    imageUrl: dlUrl,
    title: inputTitle.value,
    introduce: inputIntroduce.value,
  }

  // firebaseに保存
  const db = getDatabase();
  push(dbRef(db, 'post'), postData);

  location.href = "postList"
};
</script>
<template>
  <body>
    <div class="blur">
      <main>
        <div class="photo-area">
            <v-img :src="url" class="photo" />
        </div>
        <div class="input-photo">
          <v-file-input class="file-input" v-model="image"  />
        </div>
        <div class="form-area-title">
          <form class="form-title">
            <input
              class="title"
              type="text"
              name="post"
              placeholder="Title"
              v-model="inputTitle"
            />
          </form>
        </div>
        <div class="form-area-int">
          <form class="form-int">
            <textarea
              class="int"
              type="text"
              name="int"
              placeholder="Introduce"
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
          >Click & Post!</button>
        </form>
      </main>
    </div>
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

main {
  width: 100%;
}


.photo-area {
  width: 60%;
  margin: 20px auto;
}
.photo {
  width: 100%;
  margin: 20px auto;
  border-radius: 30px;
}

.input-photo {
  width: 60%;
  margin: 10px auto;
}

.file-input {
  color: black;
  width: 80%;
  margin: 0px auto;
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
  border: solid 2px grey;
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
  padding: 10px 10px;
  font-size: 25px;
  background-color: rgba(255,255,255,0.1);
}

.int::placeholder {
  text-align: center;
  line-height: 180px;
  font-weight: bold;
}

.form-button {
  width: 130px;
  margin: 70px auto;
}

.button-post {
  width: 100%;
  display: inline-block;
  padding: 20px 40px;
  text-decoration: none;
  background-color: rgba(255,255,255,0.8);
  color: grey;
  font-weight: bold;
  border-bottom: solid 4px grey;
  border-radius: 10px;
  margin: 0px auto;
}
.button-post:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
</style>