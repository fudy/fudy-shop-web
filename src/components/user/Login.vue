<template>
  <div style="margin:0px 30px"> 
    
        <a-form :model="formState" :rules="rules" ref="formRef">
            <a-form-item name="username">
                <a-input v-model:value="formState.username" placeholder="用户名" size="large">
                    <template #prefix><UserOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="password">
                <a-input  v-model:value="formState.password" type="password" placeholder="密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="imageCaptcha">        
                <a-input-group size="large">
                    <a-row :gutter="8">
                        <a-col :span="15">
                            <a-input  v-model:value="formState.imageCaptcha" placeholder="验证码" size="large">
                                <template #prefix><SafetyOutlined class="icon" /></template>
                            </a-input>
                        </a-col>
                        <a-col :span="1">
                            <img :src="imageSrc" style="cursor: pointer;" title="看不清？换一张" @click="imageClick" />
                        </a-col>
                    </a-row>
                </a-input-group>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onSubmit" size="large" block>登录</a-button>
            </a-form-item>
        </a-form>
        <a-alert :message="errMessage" v-show="typeof errMessage == 'string' && errMessage.length > 0" type="error"  show-icon/>
        <div style="text-align:right;margin-bottom:15px">
            <router-link to="/forget_password">忘记密码</router-link> | 
            <router-link to="/registry">用户注册</router-link>
        </div>
  </div>
</template>

<script setup>
import { defineComponent, reactive, toRaw, ref } from 'vue';
import { UserOutlined, LockOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { login } from '@/api/user';
import {IMAGE_CAPTCHA_SRC} from '@/api/captcha';
import {useUserStore} from '@/stores/user';

const user = useUserStore();
const route = useRoute();
const formState = reactive({
    username: '',
    password: '',
    imageCaptcha:''
});

const formRef = ref();
const router = useRouter();
const errMessage = ref();
const imageSrc = ref(IMAGE_CAPTCHA_SRC);
//表单校验规则
const rules = {
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur'},
        { min: 4, max:16, message: '用户名长度为4-16个字符', trigger: 'change'}
    ],
    password: [
    { required: true, pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '密码需要至少包含1位数字和1位字母', trigger: 'blur'},
    { min: 6, message: '密码长度最少为6个字符', trigger: 'blur'}
    ],
    imageCaptcha: [
        { required: true, message: '验证码不能为空', trigger: 'blur'},
    ]
}

const imageClick = () => {
    //每次点击，生成一个新的链接(修改时间戳)，从而触发验证码重新渲染
    imageSrc.value = IMAGE_CAPTCHA_SRC + "?t="+ new Date().getTime();
}

const invokeLogin = () => {
    login(formState, (res)=> {
        if(res.success) {
            user.username = res.data.username;
            user.avatar = res.data.avatar;
            debugger
            if (route.query.redirectURL) {
                //登录成功，跳转到原来的页面
                window.location.href = decodeURIComponent(route.query.redirectURL);
            } else {
                //登录成功，跳转到首页
                router.push({name:'index'});
            }
        } else {
            errMessage.value = res.errMsg;
            imageClick();
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