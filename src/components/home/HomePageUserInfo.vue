<template>
    <div class="user-info-box">
        <a-space direction="vertical" size="middle">
            <!--用户头像 -->
            <a-row type="flex" justify="center">
                <ImageMock width="80px" height="80px" bgcolor="orange" style="border-radius:40px" >默认头像</ImageMock>
            </a-row>
            <!--欢迎语 -->
            <a-row type="flex" justify="center">
                <h3>Hi！ 你好</h3>
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

                        <img v-for="(elem,index) in data" :key="index"  :src="elem.url" :alt="elem.text" @click="gotoItemDetai(elem.id)"
                        style="display:block;height:100%;width:100%"/>
                    </a-carousel> 
                </div>
            </a-row>
        </a-space>
    </div> 
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';
import {invokeAdList} from '../../api/ad';
import { onMounted,reactive,ref} from 'vue';
let data = ref([]);
const gotoItemDetai = function(id) {
    window.open('item?id='+id);
}
const getSuperDealAdList = function() {
    invokeAdList({type:'superDealAd'}, (result)=> {
        if(result && result.data.length > 0) {
            data.value = result.data;
        }
    }, (e)=> {
        console.log(e);
    });
}

onMounted(()=> {
    getSuperDealAdList();
});

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
    height:200px;
}
img {
    cursor: pointer;
}
</style>
