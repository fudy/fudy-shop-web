<template>
<div class="box">
  <a-carousel autoplay>
     <template v-for="(elem,index) in data" :key="index" >
        <img  :src="elem.url" :alt="elem.text" @click="gotoItemDetai(elem.id)"/>
     </template>
 
  </a-carousel>
</div>
</template>
<script setup>
import {invokeAdList} from '../../api/ad';
import { onMounted,reactive,ref} from 'vue';


let data = ref([]);

const gotoItemDetai = function(id) {
    window.open('item?id='+id);
}

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
img {
    cursor: pointer;
}

</style>