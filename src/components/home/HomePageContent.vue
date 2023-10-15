<template>
    <a-layout-content class="my-layout-content">
        <div class="content">
            <div class="logo-container">
                <a-row  :gutter="100" type="flex" justify="start" align="middle">
                    <a-col >
                        
                        <img src="../../assets/logo.jpg" alt="fudy-shop" />
                    </a-col>
                    <a-col flex="auto">
                        <a-row>
                            <a-input-search v-model:value="value" placeholder="飞天茅台"
                                    enter-button="搜索"
                                    size="large"
                                    @search="onSearch"
                            />
                            <a-space class="search-text">
                                <span>酒水饮料 </span> 
                                <span>女装</span>
                                <span>男装</span>      
                                <span>美装 </span> 
                                <span>女鞋 </span> 
                                <span>男鞋 </span> 
                                <span>手机 </span> 
                                <span>家电</span> 
                                <span>文具</span>
                            </a-space>
                        </a-row>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <div>
                    <a-row type="flex" :gutter="30" justify="space-between">
                        <a-col>
                            <HomePageCategory />
                        </a-col>
                        <a-col >
                            <HomePageAd />
                        </a-col>
                        <a-col>
                            <HomePageUserInfo />
                        </a-col>
                    </a-row>
                </div>
                <div style="margin-top:10px;"><h1>猜你喜欢</h1></div>
                <div >
                    <a-list :grid="{ gutter: 10, column:3 }" :data-source="itemList">
                        <template #renderItem="{ item }" v-if="itemList.length>0">
                            <a-list-item>
                                <HomePageItem :id="item.itemId" :price="item.price" :title="item.name" :image="item.image" />
                            </a-list-item>
                        </template>
                    </a-list>
                </div>
            </div>
        </div>
</a-layout-content>
</template>
<script setup>
import  ImageMock  from '@/components/ImageMock.vue';
import HomePageUserInfo from '@/components/home/HomePageUserInfo.vue';
import HomePageAd from '@/components/home/HomePageAd.vue';
import HomePageCategory from '@/components/home/HomePageCategory.vue';
import HomePageItem from '@/components/home/HomePageItem.vue';
import {invokeGetItemList} from '@/api/item';

import { onMounted,reactive,ref} from 'vue';
const itemList = ref([]);
let value = ref("");
////下次在搜索引擎中，从pageIndex开始取后面的上面，前面的都已经加载到页面了
let pageIndex = 0;
//每次加载商品，返回的商品数量
const pageSize = 2;

const onSearch = function() {
    //TODO
}

const getItemList = function() {
    invokeGetItemList({pageIndex, pageSize}, (result)=> {
        if(result && result.data.length > 0) {
            for(let item of result.data) {
                itemList.value.push(item);
            }
            pageIndex = itemList.value.length; 
        }
    }, (e)=> {
        console.log(e);
    });
}

const loadMoreItems = function() {
    console.log('loadMoreItems');
    getItemList();
}

onMounted(()=> {
    getItemList();
});
//让外部组件可以调用
defineExpose({
    loadMoreItems
});

</script>
<style scoped>
.my-layout-content {
  background-color:#eaeaea;
}
.search-text {
    color: grey;
    font-size: 8pt;
    margin-top:5px;
}
.search-text span {
    margin-left : 5px;
}
.item-row {
    margin: 15px 5px;
}

.content {
    display: flex; 
    justify-content: center;  
    min-width:1600px;
    padding:10px 0px;
   
}

.logo-container {
    width: 1400px;
    display: flex; 
    justify-content: left;  
    padding: 20px;
}

.container {
    width: 1400px; 
    background-color:white;
    border-radius:10px;
    padding: 20px;
}

</style>