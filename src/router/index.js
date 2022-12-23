import * as vueRouter from "vue-router";
import Top from '../components/pages/Top.vue';
import Search from '../components/pages/Search.vue';
import Post from '../components/pages/Post.vue';
import PostList from '../components/pages/PostList.vue';
import Login from '../components/pages/Login.vue';
import SignUp from '../components/pages/SignUp.vue';

const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/post",
    component: Post,
  },
  {
    path: "/postList",
    component: PostList,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;
