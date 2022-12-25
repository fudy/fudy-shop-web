<template>
    <a-layout-content class="my-layout-content">
        <div class="home">
            <a href="/" style="color:white">首页</a>
        </div>
        <div class="item-basic">
            <a-row type="flex" >
                <a-col flex="400px">
                   <a-image :width="400" :height="400" :src="mainImageSrc"></a-image> 
                   <a-list :grid="{ gutter: 24, column: 4}" :data-source="itemImages">
                       <template #renderItem="{ item, index }">
                            <a-list-item style="margin-top:10px;cursor: pointer" >
                                <img :width="80" :height="80" :src="item.src" :class="{'active':item.active}"
                                @mouseenter="(e) => mouseEnter(e,index)"
                                /> 
                            </a-list-item>
                       </template>
                   </a-list>
                </a-col>
                <a-col flex="auto" style="background-color:grey">
                    <ImageMock width="600px" height="500px" bgcolor="#0f0" >商品基本信息</ImageMock>
                </a-col>
            </a-row>
        </div>
        <a-divider orientation="center">商品详细信息</a-divider>
        <div class="item-detail">
            <ImageMock width="100%" height="800px" bgcolor="#00f" >商品详细信息</ImageMock>
        </div>
    </a-layout-content>
</template>
<script setup>
    import  ImageMock  from '../ImageMock.vue';
    import {reactive, ref } from 'vue';
    const mainImageSrc = ref("http://localhost/image/1426060892226983729wlypw.jpg")
    const activeStyle = reactive("border:2px solid red")
   
    const itemImages = ref([
        {src:"http://localhost/image/1426060892226983729wlypw.jpg", active:true},
        {src:"http://localhost/image/1426060892-634094994fj.jpg"},
        {src:"http://localhost/image/14260608922031010795mzl.jpg"},
        {src:"http://localhost/image/1426060892-728320208gj.jpg"}
    ])

    const mouseEnter = function (e,index) {
        itemImages.value.forEach(element => {
            element.active = false;
        });
        itemImages.value[index].active = true;
        mainImageSrc.value = itemImages.value[index].src;
    }
</script>
<style scoped>
.home {
      background-color: rgb(61, 61, 85);
      height : 30px;
      text-align:left;
      font-size: 12px;
      font-weight: 100;
      line-height: 30px;
      padding-left : 30px;
}
.my-layout-content {
  background-color: #ffffff;
}
.item-basic {
    margin: 30px;
    min-width: 1000px;
}
.item-detail {
    margin: 30px
}
.active {
    border:2px solid red
}
</style>