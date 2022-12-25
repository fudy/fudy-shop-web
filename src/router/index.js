import { createRouter,createWebHashHistory,createWebHistory} from "vue-router";

const routes = [
  { path: "/", name:"index", component: () => import("../pages/index.vue")},
  { path: "/login", name:"login", component: () => import("../pages/login.vue")},
  { path: "/registry",  name:"registry", component: () => import("../pages/registry.vue")},
  { path: "/forget_password",  name:"forget_password", component: () => import("../pages/forget_password.vue")},
  { path: "/registry-success", name:"registry-success", component: () => import("../pages/registry-success.vue")},
  { path: "/modify-password-success", name:"modify-password-success", component: () => import("../pages/modify-password-success.vue")},
  { path: "/item",  name:"item", component: () => import("../pages/item.vue")}

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;