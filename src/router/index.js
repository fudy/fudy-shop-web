import { createRouter,createWebHashHistory,createWebHistory} from "vue-router";

const routes = [
  { path: "/", name:"index", component: () => import("../pages/index.vue")},
  { path: "/registry",  name:"registry", component: () => import("../pages/registry.vue")},
  { path: "/registry-success", name:"registry-success", component: () => import("../pages/registry-success.vue")}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;