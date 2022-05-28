<script setup>
import Login from '../components/Login.vue'
import SmsCaptchaLogin from '../components/SmsCaptchaLogin.vue'
import { defineComponent, reactive, toRaw, ref } from 'vue'
const activeKey= ref('1');
</script>

<template>
    <div class="bk"> 
        <div style="float:right;margin:150px 200px;background-color:#fff;width: 400px">
            <a-tabs v-model:activeKey="activeKey" style="text-align: 'left'">
                <a-tab-pane key="1" tab="密码登录"> <Login /></a-tab-pane>
                <a-tab-pane key="2" tab="短信登录" force-render><SmsCaptchaLogin /></a-tab-pane> 
            </a-tabs>
        </div>
    </div>
</template>

<style scoped>
.bk {
   height:700px;
   background-image: url('../assets/register.png');
   background-repeat:repeat;
}
</style>