<template>
<div class="box">
  <a-carousel autoplay>

    <ImageMock v-for="(elem,index) in data" :key="index" width="100%" height="400px" :bgcolor="elem.bgColor" >
      {{elem.text}}
    </ImageMock>

  </a-carousel>
</div>
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';
import {invokeAdList} from '../../api/ad';
import { onMounted,reactive,ref} from 'vue';

let data = ref([]);

const getHomePageAdList = function() {
    invokeAdList({type:'homePageAd'}, (result)=> {
        if(result && result.data.length > 0) {
            data.value = result.data;
        }
    }, (e)=> {
        console.log(e);
    });
}

onMounted(()=> {
    getHomePageAdList();
});

</script>

<style scoped>
.box {
    width: 600px;
}

</style>