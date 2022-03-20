<template>
  <div style="width: 400px"> 
    <h1 style="text-align:center">欢迎注册</h1>
    <a-card >
        <a-form :model="formState" >
            <a-form-item>
                <a-input v-model:value="formState.userName" placeholder="用户名" size="large">
                    <template #prefix><UserOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item >
                <a-input v-model:value="formState.password" type="password" placeholder="密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item >
                <a-input v-model:value="formState.password" type="password" placeholder="确认密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input-search v-model:value="formState.phone" placeholder="手机号" size="large" @search="sendCaptcha" >
                <template #enterButton>
                    <a-button >发送验证码</a-button>
                </template>
                <template #prefix><span class="icon" style="margin-right:10px">+86</span> </template>
                </a-input-search>
            </a-form-item>
            <a-form-item>
                <a-input v-model:value="formState.captcha" placeholder="验证码" size="large">
                    <template #prefix><SafetyOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
            <a-button type="primary" @click="onSubmit" size="large" block>立即注册</a-button>
            </a-form-item>
        </a-form>
    </a-card>
  </div>
</template>
<script>
import { defineComponent, reactive, toRaw } from 'vue';
import { UserOutlined, LockOutlined,SafetyOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    SafetyOutlined,
    LockOutlined
  },
  setup() {
    const formState = reactive({
      userName: '',
      password: '',
      confirmPassword: '',
      phone:'',
      captcha: ''
    });

    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    const sendCaptcha = () => {
       console.log('send captcha!', toRaw(formState));
    }
    return {
      formState,
      onSubmit,
      sendCaptcha
    };
  },
});
</script>
<style scoped>
.icon {
    color: rgba(0, 0, 0, 0.25) 
}
</style>