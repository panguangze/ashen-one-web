import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home/index.vue";

Vue.use(VueRouter);

// 如果路由过多的话可以分散到多个文件中
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
    // redirect: "noredirect",
    meta: {title :"temp", icon: "temp"}
  }
];

const router = new VueRouter({
  routes
});

export default router;
