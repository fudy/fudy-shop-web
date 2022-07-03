<template>
  <a-space>
    <template v-if="user.userName !== null">
        <span>欢迎 {{user.userName}}</span>
        <a @click="clickLogout">退出</a>
    </template>
    <template v-else>
        <router-link to="/login">登录</router-link>
        <router-link to="/registry">注册</router-link>
    </template>
  </a-space>
</template>
<script setup>
  import { onMounted,reactive,ref} from 'vue';
  import { getLoginUser, logout} from '../api/user';
  import { useRouter } from 'vue-router'
  const router = useRouter();
  let user = reactive({});

  const clickLogout = function() {
    logout((data)=> {
      //成功，跳转到登录页
      router.push({name:'login'});
    });
     
  }

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



