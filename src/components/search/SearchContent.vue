<template>
    <a-layout-content>
        <!-- 商品搜索 -->
        <div class="search-container">
            <a-row  :gutter="100" type="flex" justify="start" align="middle">
                <a-col >
                    <img src="../../assets/logo.jpg" alt="fudy-shop" />
                </a-col>
                <a-col flex="auto">
                    <a-row>
                        <a-input-search v-model:value="searchValue" placeholder="飞天茅台"
                                style="width: 600px"
                                enter-button="搜索"
                                size="large"
                                @search="onSearch"
                        />
                    </a-row>
                </a-col>
            </a-row>
        </div>
        <!-- 商品列表 -->
        <div class="item-container">
            <div >
                <a-list :grid="{ gutter: 10, column:3 }" :data-source="itemList">
                    <template #renderItem="{ item }" v-if="itemList.length>0">
                        <a-list-item>
                            <ItemCard :id="item.itemId" :price="item.price" :title="item.name" :image="item.image" />
                        </a-list-item>
                    </template>
                </a-list>
            </div>
            <!-- 分页 -->
            <a-pagination :current="current" :total="total" show-less-items show-quick-jumper />
        </div>

    </a-layout-content>
</template>
<script setup>
import { useRoute } from 'vue-router';
import {invokeGetItemList} from '@/api/item';
import { onMounted,reactive,ref} from 'vue';
import ItemCard from '@/components/item/ItemCard.vue';
const route = useRoute();
const itemList = ref([]);
let total = ref(100);
let current = ref(1);
let searchValue = ref("");
searchValue.value = route.query.q;

let pageIndex = 0;
//每次加载商品，返回的商品数量
const pageSize = 4;

/** 获取商品列表 */
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

const onSearch = function() {
    //TODO
}

onMounted(()=> {
    getItemList();
});

</script>

<style scoped>
.search-container {
    width: 1400px;
    display: flex; 
    justify-content: left;  
    padding: 20px;
}

.item-container {
    width: 1400px; 
    background-color:white;
    border-radius:10px;
    padding: 20px;
}
</style>