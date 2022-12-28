<script setup>
import Footer from './footer/Footer.vue'
import { ref } from "vue";
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { getStorage, ref as stgRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const url = computed(() => {
//   if (!image.value) {
//     return "";
//   }

//   return URL.createObjectURL(image.value?.[0]);
// });

//   let imageURL = URL.createObjectURL(image.value?.[0]);
//   const blob = new Blob([imageURL], {type: 'text/plain'});

//   const reader = new FileReader();

//   reader.onload = function(){
//     console.log(reader.result);
//   };

//   reader.readAsText(blob);

// })

const storage =getStorage();

const image = ref(null);
const inputTitle = ref('');
const inputIntroduce = ref('');


// imageをurlに変換
// const toBase64DataUri = file => new Promise(resolve => {
//   const reader = new FileReader();
//   reader.onload = () => resolve(reader.result);
//   reader.readAsDataURL(file);
//   });

//   const imageUrl = computed( async() => {
//     if (
//       image.value?.[0]
//     ){
//     return await toBase64DataUri(image.value?.[0])
//     }
//   })


const pushPost = async() => {
  const file = image.value?.[0]
  const storageRef = stgRef(storage, 'images/' + file.name);

  await uploadBytesResumable(storageRef, file);
  const dlUrl = await getDownloadURL(storageRef)

  let postData = {
    imageUrl: dlUrl,
    displayName: "test",
    uid: "test",
    title: inputTitle.value,
    introduce: inputIntroduce.value,
  }

  // firebaseに保存
  const db = getDatabase();
  push(dbRef(db, 'post'), postData);
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
  width: 100%;
  margin: 5px auto;
}

.file-input {
  color: snow;
  width: 80%;
  margin: 10px ;
}

.file-input::placeholder {
  color: red;
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