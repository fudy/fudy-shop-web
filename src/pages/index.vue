<template>
  <a-space>
    <template v-if="user.userName !== null">
        <span>欢迎 {{user.userName}}</span>
    </template>
    <template v-else>
        <router-link to="/login">登录</router-link>
        <router-link to="/registry">注册</router-link>
    </template>
  </a-space>
</template>
<script setup>
  import { onMounted,reactive,ref} from 'vue';
  import { getLoginUser } from '../api/user';
  let user = reactive({});
  onMounted(() => {
    getLoginUser((res)=> {
        if(res.success) {
            Object.assign(user, res.data)
        }
    }, (err)=> {
        console.log(err);
    });
  })


</script>



