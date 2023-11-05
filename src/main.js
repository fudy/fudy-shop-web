import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router/index.js'

const pinia = createPinia();

const app = createApp(App)
    .use(pinia)
    .use(Antd)
    .use(router); //整个应用支持路由。

app.mount("#app");
