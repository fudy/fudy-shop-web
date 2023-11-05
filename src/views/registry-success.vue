<template>
    <a-card style="background-color:#eee;margin: 2%">
        <a-result status="success" title="注册成功" sub-title="尊贵的用户，恭喜你成为我们的一员！">
            <template #extra>
                <a-button key="login" type="primary">
                    <router-link to="/login">前往登录</router-link>
                </a-button>
                <a-button key="index">
                    <router-link to="/">返回首页</router-link>
                </a-button>
            </template>
        </a-result>
    </a-card>   
</template>