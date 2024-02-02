import { createApp } from "vue";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 
import App from "./App.vue";
import Antd from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/reset.css';
import router from './router/index.js'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); //使用pinia持久化插件

const app = createApp(App)
    .use(pinia)
    .use(Antd)
    .use(router); //整个应用支持路由。

app.mount("#app");
