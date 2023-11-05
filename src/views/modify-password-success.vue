<template>
    <a-card style="background-color:#eee;margin: 2%">
        <a-result status="success" title="密码修改成功" sub-title="您的密码已经修改成功，请点击下方进行登录">
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