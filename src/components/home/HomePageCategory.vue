<template>
<div class="box">
  <a-list size="small"  :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
          <span v-for="(elem, index) in item.itemCategoryList" :key="index" class="item">
              <a :href="elem.url" style="color:#222">{{elem.name}}</a>
          </span>
      </a-list-item>
    </template>
    <template #header>
      <div><h1>商品分类</h1></div>
    </template>
  </a-list>
</div>
</template>
<script setup>
import {invokeGetItemCategoryList} from '../../api/itemCategory';
import { onMounted,reactive,ref} from 'vue';

let data = ref([]);

const getItemCategoryList = function() {
    invokeGetItemCategoryList({}, (result)=> {
        if(result && result.data.length > 0) {
            data.value = result.data;
        }
    }, (e)=> {
        console.log(e);
    });
}

onMounted(()=> {
    getItemCategoryList();
});

</script>

<style scoped>
.box {
    border-radius: 15px;
    background-color: rgb(247,249,249);
    padding: 10px;

}
.item {
    margin: 0px 20px;
    
}
</style>