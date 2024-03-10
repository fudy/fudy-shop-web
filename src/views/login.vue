<script setup>
import Login from '@/components/user/Login.vue'
import SmsCaptchaLogin from '@/components/user/SmsCaptchaLogin.vue'
import { defineComponent, reactive, toRaw, ref } from 'vue'
const activeKey= ref('1');
</script>

<template>
    <div class="bk"> 
        <div style="float:right;margin:150px 200px;background-color:#fff;width: 400px;border-radius: 5px;padding:20px">
            <a-tabs v-model:activeKey="activeKey" >
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