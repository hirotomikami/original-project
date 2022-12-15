import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from "./router/index";
import "https://kit.fontawesome.com/ac7659624e.js";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app');