<template>
    <a-layout-content class="my-layout-content">
        <div style="margin-top:30px;width:1100px">
            <a-row  :gutter="100" type="flex" justify="start" align="middle">
                <a-col :offset="4">
                    <ImageMock width="200px" height="80px" bgcolor="#eee" >网站LOGO</ImageMock>
                </a-col>
                <a-col flex="auto">
                    <a-row>
                        <a-input-search v-model:value="value" placeholder="飞天茅台"
                                enter-button="搜索"
                                size="large"
                                @search="onSearch"
                        />
                        <s-space class="search-text">
                            <span>酒水饮料 </span> 
                            <span>女装</span>
                            <span>男装</span>      
                            <span>美装 </span> 
                            <span>女鞋 </span> 
                            <span>男鞋 </span> 
                            <span>手机 </span> 
                            <span>家电</span> 
                            <span>文具</span>
                        </s-space>
                    </a-row>
                </a-col>
            </a-row>
        </div>
        <div style="background-color:#eaeaea;margin-top:5px;padding:20px 40px;">
            <div style="background-color:white;border-radius:20px;padding:20px">
                <div >
                    <a-row type="flex" :gutter="30" justify="space-between">
                        <a-col>
                            <ImageMock width="300px" height="400px" bgcolor="#f00" >商品类目</ImageMock>
                        </a-col>
                        <a-col flex="auto">
                            <ImageMock width="100%" height="400px" bgcolor="#00f" >首页广告</ImageMock>
                        </a-col>
                        <a-col>
                            <ImageMock width="300px" height="400px" bgcolor="#0f0" >用户信息</ImageMock>
                        </a-col>
                    </a-row>
                </div>
                <div>
                    <h1>猜你喜欢</h1>
                    <a-row type="flex" :gutter="30" justify="space-around">
                        <a-col><ImageMock width="300px" height="300px" bgcolor="#a1a1a1" >商品1</ImageMock>
                        </a-col>
                        <a-col><ImageMock width="300px" height="300px" bgcolor="#a1a1a1" >商品2</ImageMock>
                        </a-col>
                        <a-col><ImageMock width="300px" height="300px" bgcolor="#a1a1a1" >商品3</ImageMock>
                        </a-col>
                        <a-col><ImageMock width="300px" height="300px" bgcolor="#a1a1a1" >商品4</ImageMock>
                        </a-col>
                    </a-row>

                </div>
            </div>
        </div>
</a-layout-content>
</template>
<script setup>
import  ImageMock  from '../components/ImageMock.vue';
import { onMounted,reactive,ref} from 'vue';
let value = ref("");
function onSearch() {
    //TODO
}
</script>
<style scoped>
.my-layout-content {
  background-color: #ffffff;
}
.search-text {
    color: grey;
    font-size: 8pt;
    margin-top:5px;
}
.search-text span {
    margin-left : 5px;
}
</style>