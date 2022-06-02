import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import SignupView from "../views/SignupView.vue"
import LoginView from "../views/LoginView.vue"
import LogoutView from "../views/LogoutView.vue";
import PostIndexView from "../views/PostIndexView.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import PostsEdit from "../views/PostsEdit.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/posts',
    name: 'posts index',
    component: PostIndexView
  },
  {
    path: '/posts/new',
    name: 'posts new',
    component: PostsNew
  },
  { 
    path: "/posts/:id", 
    name: "posts-show", 
    component: PostsShow 
  },
  { 
    path: "/posts/:id/edit", 
    name: "posts-edit", 
    component: PostsEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
