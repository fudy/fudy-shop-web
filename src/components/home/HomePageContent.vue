<template>
    <a-layout-content class="my-layout-content">
        <div class="content">
            <div class="logo-container">
                <a-row  :gutter="100" type="flex" justify="start" align="middle">
                    <a-col >   
                        <Logo />
                    </a-col>
                    <a-col flex="auto">
                        <a-row>
                            <a-input-search v-model:value="searchValue" placeholder="飞天茅台"
                                    enter-button="搜索"
                                    style="width: 600px"
                                    size="large"
                                    @search="onSearch"
                            />
                        </a-row>
                        <a-row>
                            <a-space class="search-text">
                                <span v-for="(item, index) in hotSearchKeywords" :key="index" style="cursor:pointer;font-size:12px"
                                    @click="searchHotKeyword(item.keyword)">
                                        {{item.keyword}} 
                                </span> 
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
                                <ItemCard :id="item.itemId" :price="item.price" :title="item.name" :image="item.image" />
                            </a-list-item>
                        </template>
                    </a-list>
                </div>
            </div>
        </div>
</a-layout-content>
</template>
<script setup>
import HomePageUserInfo from '@/components/home/HomePageUserInfo.vue';
import HomePageAd from '@/components/home/HomePageAd.vue';
import HomePageCategory from '@/components/home/HomePageCategory.vue';
import ItemCard from '@/components/item/ItemCard.vue';
import * as SearchApi from '@/api/search.js';
import {invokeGetItemList} from '@/api/item';
import Logo from '@/components/home/Logo.vue';

import { onMounted,reactive,ref} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let hotSearchKeywords = ref([]);
let searchValue = ref("");

const onSearch = function() {
    router.push({
        path:'/search',
        query: { q: searchValue.value }
    })
}

const itemList = ref([]);

////下次在搜索引擎中，从pageIndex开始取后面的上面，前面的都已经加载到页面了
let pageIndex = 0;
//每次加载商品，返回的商品数量
const pageSize = 4;

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
    if (pageIndex) {
        getItemList();
    } 
}

/** 获取热搜关键词 */
const getHotSearchKeywords = () => {
    SearchApi.getHotSearchKeywords().then(result => {
        if (result.data.success) {
            hotSearchKeywords.value = [];
            for (let item of result.data.data) {
                hotSearchKeywords.value.push(item);
            }
        }
    })
}

/** 热搜关键词搜索 */
const searchHotKeyword = (keyword) => {
    searchValue.value = keyword;
    onSearch();
}

onMounted(()=> {
    getHotSearchKeywords();
    getItemList();
});
//让外部组件可以调用
defineExpose({
    loadMoreItems
});

</script>
<style scoped>
/*
.my-layout-content {
  background-color:#eaeaea;
}*/
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
/*    display: flex; 
    justify-content: center;  
    min-width:1600px; */
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