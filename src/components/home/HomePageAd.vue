<template>
<div class="box">
  <a-carousel autoplay>
    <ImageMock width="100%" height="400px" bgcolor="#00f" >广告1</ImageMock>

    <ImageMock width="100%" height="400px" bgcolor="#0f0" >广告2</ImageMock>

    <ImageMock width="100%" height="400px" bgcolor="#ff0" >广告3</ImageMock>

    <ImageMock width="100%" height="400px" bgcolor="#f0f" >广告4</ImageMock>

  </a-carousel>
</div>
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';
</script>

<style scoped>
.box {
    width: 600px;
}

</style>