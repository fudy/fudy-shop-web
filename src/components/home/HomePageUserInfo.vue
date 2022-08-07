<template>
    <div class="user-info-box">
        <a-space direction="vertical" size="middle">
            <!--用户头像 -->
            <a-row type="flex" justify="center">
                <ImageMock width="80px" height="80px" bgcolor="orange" style="border-radius:40px" >默认头像</ImageMock>
            </a-row>
            <!--欢迎语 -->
            <a-row type="flex" justify="center">
                <h2>Hi！ 你好</h2>
            </a-row>
            <!--登录、注册按钮 -->
            <a-row type="flex" justify="center">
                <a-space>
                    <a-button type="primary" size="large" shape="round" href="/login">登录</a-button>
                    <a-button type="primary" size="large" shape="round" href="/registry">注册</a-button>
                </a-space>
            </a-row>
            <!--今日特价广告位-->
            <a-row>
                <div class="ad-box">
                <a-carousel autoplay>
                    <ImageMock width="300px" height="188px" bgcolor="green" >今日特价1</ImageMock>
                    <ImageMock width="300px" height="188px" bgcolor="red" >今日特价2</ImageMock>
                    <ImageMock width="300px" height="188px" bgcolor="blue" >今日特价3</ImageMock>
                </a-carousel>
                </div>
            </a-row>
        </a-space>
    </div> 
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';

</script>
<style scoped>
.user-info-box {
    width: 300px;
    height: 400px;
    background-color: white;
}
.user-info-box h2{
    color:#666;
}
.ad-box {
    width: 300px;
}

</style>
