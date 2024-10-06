<template>
    <div style="margin:10px 30px">
        <a-form :model="formState" :rules="rules" ref="formRef">
            <a-form-item name="phone">
                <a-input-search v-model:value="formState.phone" placeholder="手机号" size="large" @search="clickSendCaptcha" >
                <template #enterButton>
                    <a-button :loading="msmLoading">{{sendCaptchaText}}</a-button>
                </template>
                <template #prefix><span class="icon" style="margin-right:10px">+86</span> </template>
                </a-input-search>
            </a-form-item>
            <a-form-item name="captcha">
                <a-input v-model:value="formState.captcha" placeholder="验证码" size="large">
                    <template #prefix><SafetyOutlined class="icon" /></template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onSubmit" size="large" block>登录</a-button>
            </a-form-item>
        </a-form>
        <a-alert :message="errMessage" v-show="typeof errMessage == 'string' && errMessage.length > 0" type="error"  show-icon/>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { sendLoginCaptcha } from '@/api/captcha';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { smsLogin } from '@/api/user';
import { useRouter, useRoute } from 'vue-router';


const errMessage = ref();
const formRef = ref();
const router = useRouter();
const route = useRoute();
const formState = reactive({
    phone: '',
    captcha: ''
});
//表单校验规则
const rules = {
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
let sendCaptchaText =  ref("发送验证码"); 
let msmLoading = ref(false);

const invokeSendCaptcha = () => {
    sendLoginCaptcha({
        phone:formState.phone,
        captcha:formState.captcha
    },(data)=> {
        if(!data.success) {
            message.error(data.errMsg);
        }
    },(err) => {
        message.error(data.errMsg);
    })
}

const clickSendCaptcha = () => {
    formRef.value
    .validate(['phone'])
    .then(() => {
        sendCaptcha();
    });
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

const invokeSmsLogin = () => {
    smsLogin(formState, (res)=> {
        if(res.success) {
            if (route.query.redirectURL) {
                //登录成功，跳转到原来的页面
                window.location.href = decodeURIComponent(route.query.redirectURL);
            } else {
                //登录成功，跳转到首页
                router.push({name:'index'});
            }
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
        invokeSmsLogin();
    })
    .catch(error => {
        errMessage.value=error;
    });
};

</script>
