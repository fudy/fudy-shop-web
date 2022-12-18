<template>
<div class="box">
  <a-carousel autoplay>

    <img v-for="(elem,index) in data" :key="index"  :src="elem.url" :alt="elem.text" />
 
  </a-carousel>
</div>
</template>
<script setup>
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
    height: 400px;
    overflow: hidden;
}

</style>