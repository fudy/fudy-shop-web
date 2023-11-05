<template>
  <div class="box"> 
        <h2>忘记密码</h2>
        <a-form :model="formState" :rules="rules" ref="formRef">
            <a-form-item name="userName">
                <a-input v-model:value="formState.userName" placeholder="用户名" size="large">
                    <template #prefix><UserOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="phone">
                <a-input-search v-model:value="formState.phone" placeholder="手机号" size="large" @search="clickSendCaptcha" >
                <template #enterButton>
                    <a-button :loading="msmLoading" >{{sendCaptchaText}}</a-button>
                </template>
                <template #prefix><span class="icon" style="margin-right:10px">+86</span> </template>
                </a-input-search>
            </a-form-item>
            <a-form-item name="captcha">
                <a-input v-model:value="formState.captcha" placeholder="验证码" size="large">
                    <template #prefix><SafetyOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="password">
                <a-input  v-model:value="formState.password" type="password" placeholder="密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item name="confirmPassword">
                <a-input v-model:value="formState.confirmPassword" type="password" placeholder="确认密码" size="large">
                    <template #prefix><LockOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onSubmit" size="large" block>确认修改</a-button>
            </a-form-item>
        </a-form>
        <a-alert :message="errMessage" v-show="typeof errMessage == 'string' && errMessage.length > 0" type="error"  show-icon/>
  </div>
</template>

<script setup>
import { defineComponent, reactive, toRaw, ref } from 'vue';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { sendForgetPasswordCaptcha } from '@/api/captcha';
import { modifyPassword } from '@/api/user';
let msmLoading = ref(false);
let sendCaptchaText =  ref("发送验证码");
let btnLoading = ref(false);
const formState = reactive({
    userName: '',
    password: '',
    confirmPassword: '',
    phone:'',
    captcha: ''
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
    ],   
    confirmPassword: [
    { required: true, message: '确认密码不能为空', trigger: 'blur'},
    { asyncValidator(rule, value) {
        return new Promise((resolve, reject) => {
            if (value !== formState.password) {
                reject('两次密码输入不一致！');  // reject with error message
            } else {
                resolve();
            }
        });
        },
        trigger:'blur'
    }
    ], 
    phone: [
    { required: true, pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur'}
    ],
    captcha: [
    {
        required: true,
        message: '验证码不能为空',
        trigger: 'blur',
    }
    ]
}


const invokeSendCaptcha = () => {
    sendForgetPasswordCaptcha({
        phone:formState.phone,
        captcha:formState.captcha
    },(data)=> {
        if(!data.success) {
            message.error(data.errMsg);
        }
    },(err) => {
        message.error(err);
    })
}

const sendCaptcha = () => {
    invokeSendCaptcha();
    msmLoading.value = true;
    let countDown = 60;
    sendCaptchaText.value=countDown+"秒后重试"
    countDown -= 1;
    let id = setInterval(() => {
        sendCaptchaText.value=countDown+"秒后重试"
        countDown -= 1;
        if(countDown<=0) {
            clearInterval(id);
            msmLoading.value = false;
            sendCaptchaText.value = "重新发送"
        }
    }, 1000); 
}

const clickSendCaptcha = () => {
    formRef.value
    .validate(['phone'])
    .then(() => {
        sendCaptcha();
    });
}

const invokeForgetPassword = () => {
    btnLoading.value = true;
    modifyPassword(formState, (res)=> {
        if(res.success) {
            //成功，跳转到成功页
            router.push({name:'modify-password-success'});
        } else {
            btnLoading.value = false;
            errMessage.value = res.errMsg;
        }
    }, (err)=> {
        btnLoading.value = false;
        errMessage.value = err;
    });
}

const onSubmit = () => {
    errMessage.value=null;
    formRef.value
    .validate()
    .then(() => {
        invokeForgetPassword();
    })
    .catch(error => {
        console.log('error', error);
    });
};

</script>

<style scoped>
.box {
    border-radius: 5px;
    margin:0px 30px; 
    width:400px; 
    background-color:#fff; 
    padding: 15px 
}
</style>