<template>
    <a-row class="item">
        <a-col :span="12">
            <ImageMock width="160px" height="160px" bgcolor="#fff" >商品图片</ImageMock>
        </a-col>
        <a-col :span="12">
            <!--标题限制长度-->
            <div class="title">{{props.title.substr(0,30)}}</div>
            <div class="price">¥ {{props.price}}</div>
        </a-col>   
    </a-row>
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';
const props = defineProps({
  title: String,
  price: String
})
console.log(props)
</script>
<style scoped>
.item {
    border-radius: 15px;
    padding: 10px;
    width: 400px;
    background-color: #efefef;
    text-align: left;
    
}
.item .title {
    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
    font-size: 16px;
}
.item .price {
    position: absolute;
    bottom: 5px;
    display: inline-block;
    font-size: 22px;
    line-height: 22px;
    color: #ff5000;
}
</style>
