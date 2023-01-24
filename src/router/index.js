import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ExploreView from "@/views/ExploreView.vue";
import MessagesView from "@/views/MessagesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ForbiddenView from "@/views/ForbiddenView.vue";
import PasswordForgotView from "@/views/PasswordForgotView.vue";
import PasswordRecoverView from "@/views/PasswordRecoverView.vue";
import EasyLoginView from "@/views/EasyLoginView.vue";
import OAuthView from "@/views/OAuthView.vue";
import { isAuthenticated, isLoggedIn } from "@/router/guards.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
      beforeEnter: [isLoggedIn],
    },
    {
      path: "/register",
      name: "registration",
      component: RegisterView,
      beforeEnter: [isLoggedIn],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: [isLoggedIn],
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: PasswordForgotView,
      beforeEnter: [isLoggedIn],
    },
    { 
      path: '/recover-password/:id',
      name: 'recover-password', 
      component: PasswordRecoverView,
      props:true,
      beforeEnter: [isLoggedIn],
  },
    { 
      path: '/easy-login/:id',
      name: 'easy-login', 
      component: EasyLoginView,
      props:true,
      beforeEnter: [isLoggedIn],
  },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/explore/",
      name: "explore",
      component: ExploreView,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/direct/inbox/",
      name: "messages",
      component: MessagesView,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/:id/",
      name: "profile",
      component: ProfileView,
      props:true,
      beforeEnter: [isAuthenticated],
    },
    { 
      path: '/oauth', 
      name: 'oauth', 
      component: OAuthView,
  },
  { 
    path: '/403-forbidden', 
    name: 'forbidden', 
    component: ForbiddenView,
    beforeEnter: [isLoggedIn],
  },
  { 
    path: '/:notFound(.*)', 
    name: 'not-found', 
    component: NotFoundView,
  },
  ],
});

export default router;
