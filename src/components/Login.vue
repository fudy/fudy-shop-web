<template>
  <div style="width: 400px"> 
    <a-card >
        <a-form :model="formState" :rules="rules" ref="formRef">
            <a-form-item name="userName">
                <a-input v-model:value="formState.userName" placeholder="用户名" size="large">
                    <template #prefix><UserOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="password">
                <a-input  v-model:value="formState.password" type="password" placeholder="密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onSubmit" size="large" block>登录</a-button>
            </a-form-item>
        </a-form>
        <a-alert :message="errMessage" v-show="typeof errMessage == 'string' && errMessage.length > 0" type="error"  show-icon/>
    </a-card>
  </div>
</template>

<script setup>
import { defineComponent, reactive, toRaw, ref } from 'vue';
import { UserOutlined, LockOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { login } from '../api/user';

const formState = reactive({
    userName: '',
    password: ''
});

const formRef = ref();
const router = useRouter();
const errMessage = ref();
//表单校验规则
const rules = {
    userName: [
        { required: true, message: '用户名不能为空', trigger: 'blur'},
        { min: 4, max:16, message: '用户名长度为4-16个字符', trigger: 'change'}
    ],
    password: [
    { required: true, pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '密码需要至少包含1位数字和1位字母', trigger: 'blur'},
    { min: 6, message: '密码长度最少为6个字符', trigger: 'blur'}
    ]
}

const invokeLogin = () => {
    login(formState, (res)=> {
        if(res.success) {
            //注册成功，跳转到首页
            router.push({name:'index'});
        } else {
            errMessage.value = res.errMsg;
        }
    }, (err)=> {
        errMessage.value = err;
    });
}

const onSubmit = () => {
    errMessage.value=null;
    formRef.value.validate().then(() => {
        invokeLogin();
    })
    .catch(error => {
        errMessage.value=error;
    });
};

</script>

<style scoped>

</style>