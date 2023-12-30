<template>
    <a-layout-content>
        <!-- 商品搜索 -->
        <div class="search-container">
            <a-row  :gutter="100" type="flex" justify="start" align="middle">
                <a-col >
                    <Logo />
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
                <a-list :grid="{ gutter: 10, column:3 }" :data-source="itemList" :pagination="pagination">
                    <template #renderItem="{ item }" v-if="itemList.length>0">
                        <a-list-item>
                            <ItemCard :id="item.itemId" :price="item.price" :title="item.name" :image="item.image" />
                        </a-list-item>
                    </template>
                </a-list>
            </div>
        </div>
    </a-layout-content>
</template>
<script setup>
import { useRoute,useRouter } from 'vue-router';
import {invokeSearchItems, invokeCategorySearchItems} from '@/api/item';
import { onMounted,reactive,ref,computed} from 'vue';
import ItemCard from '@/components/item/ItemCard.vue';
import Logo from '@/components/home/Logo.vue';
const route = useRoute();
const router = useRouter();
const itemList = ref([]);
let total = computed(() => itemList.length);
let searchValue = ref(route.query.q);

//分页配置
const pagination = {
  pageSize: 50,
  showQuickJumper: true
};

/** 修改url参数，并搜索商品 */
const onSearch = function() {
    router.push({
        path:'/search',
        query: { q: searchValue.value }
    });
    search();
}

const renderItems = function(result) {
    if (result.data.success) {
        itemList.value = [];
        for(let item of result.data.data) {
            itemList.value.push(item);
        }
        total.value = itemList.value.length;
    }
}
/** 搜索商品 */
const search = function() {
    //根据关键词查询
    invokeSearchItems({keyword:searchValue.value}).then(result => {
        renderItems(result);
    });
}


onMounted(()=> {
    if (route.query.categoryId) {
        //根据类目id查询
        invokeCategorySearchItems({categoryId: route.query.categoryId}).then(result => {
            renderItems(result);
        });
    } else {
        search();
    }
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