<template>
    <a-layout-header class="my-layout-header">
        <div class="header-user">
            <div>
                <template v-if="user.userName !== null">
                    <span>欢迎 {{user.userName}}</span>
                    <a @click="clickLogout">退出</a>
                </template>
                <template v-else>
                    <router-link to="/login" >你好，请登录</router-link> |
                    <router-link to="/registry" style="color:blue">免费注册</router-link>
                </template> 
                <router-link to="/app-download"> 手机版下载 </router-link>
            </div>
        </div>
        <div class="header-other">
            <router-link to="/shopping-cart"><ShoppingCartOutlined /> 购物车</router-link> |
            <router-link to="/favorite"><HeartOutlined /> 收藏夹</router-link> |
            <router-link to="/my-order"><ShoppingOutlined /> 我的订单</router-link> |

            <router-link to="/customer-service"><CustomerServiceOutlined /> 联系客服</router-link>

        </div>
    </a-layout-header>
</template>
<script setup>
  import { onMounted,reactive,ref} from 'vue';
  import { logout} from '../../api/user';
  import { useRouter } from 'vue-router';
  import { ShoppingCartOutlined,HeartOutlined,CustomerServiceOutlined, ShoppingOutlined} from '@ant-design/icons-vue';
  import {useUserStore} from '@/stores/user';

  const router = useRouter();

  const user = useUserStore();
  
  const clickLogout = function() {
    logout((data)=> {
      user.clear();
      //成功，跳转到登录页
      router.push({name:'login'});
    });
     
  }

</script>
<style scoped>
.my-layout-header {
  background-color: #ecf0f3;
  line-height: 35px;
  height: 35px;
  font-size: 12px;
  color: grey;
}
.header-user {
  position: absolute;
  left: 30%;
}
.header-user a{
  color: grey;
  margin-right: 5px;
  margin-left: 5px;
}
.header-other {
  position: absolute;
  left: 60%;
}
.header-other a {
  color: grey;
  margin-right: 3px;
  margin-left: 3px;
}
</style>