import { createRouter,createWebHashHistory,createWebHistory} from "vue-router";

const routes = [
  { path: "/", name:"index", component: () => import("@/views/index.vue")},
  { path: "/login", name:"login", component: () => import("@/views/login.vue")},
  { path: "/registry",  name:"registry", component: () => import("@/views/registry.vue")},
  { path: "/forget_password",  name:"forget_password", component: () => import("@/views/forget_password.vue")},
  { path: "/registry-success", name:"registry-success", component: () => import("@/views/registry-success.vue")},
  { path: "/modify-password-success", name:"modify-password-success", component: () => import("@/views/modify-password-success.vue")},
  { path: "/item",  name:"item", component: () => import("@/views/item.vue")}

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;