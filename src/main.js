import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "./router/index";
import "https://kit.fontawesome.com/ac7659624e.js";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import Vuetify from 'vuetify/lib'



// export default new vuetify({
//   icons: {
//     iconfont: 'mdiSvg',
//   },
// })



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
initializeApp(firebaseConfig);


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(VueRouter)
  .use(vuetify)
  .mount('#app');