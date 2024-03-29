import { createRouter,createWebHashHistory,createWebHistory} from "vue-router";

const routes = [
  { path: "/", name:"index", component: () => import("@/views/index.vue")},
  { path: "/login", name:"login", component: () => import("@/views/login.vue")},
  { path: "/registry",  name:"registry", component: () => import("@/views/registry.vue")},
  { path: "/forget_password",  name:"forget_password", component: () => import("@/views/forget_password.vue")},
  { path: "/registry-success", name:"registry-success", component: () => import("@/views/registry_success.vue")},
  { path: "/modify-password-success", name:"modify-password-success", component: () => import("@/views/modify_password_success.vue")},
  { path: "/item",  name:"item", component: () => import("@/views/item.vue")},
  { path: "/search", name:"search", component: () => import("@/views/search.vue")},
  { path: "/confirm-order", name:"confirm-order", component: () => import("@/views/confirm_order.vue")}

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;