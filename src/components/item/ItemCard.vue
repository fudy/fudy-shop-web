<template>
    <a-row class="item" @click="handleClick">
        <a-col :span="12">
            <img  :src="props.image"  style="width:160px;height:160px"/>

        </a-col>
        <a-col :span="12">
            <!--标题限制长度-->
            <div class="title">{{props.title.substr(0,30)}}</div>
            <div class="price">¥ {{props.price}}</div>
        </a-col>   
    </a-row>
</template>
<script setup>
const props = defineProps({
  id: Number,
  title: String,
  price: String,
  image: String
})

const handleClick = () => {
    window.open('item?id='+props.id);
}

</script>
<style scoped>
.item {
    border-radius: 15px;
    padding: 10px;
    width: 435px;
    background-color: rgb(247,249,249);
    text-align: left;
    cursor: pointer;
}

.item:hover {  
  border: red 1px solid ; /* 当鼠标移动到div标签后，边框颜色变为红色 */ 
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
