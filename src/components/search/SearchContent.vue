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
            <a-tabs v-model:activeKey="sortField" style="text-align:left" @change="onSortTabChange">
                <a-tab-pane key="default" tab="综合">
                    <ItemList :itemList="itemList" />
                </a-tab-pane>
                <a-tab-pane key="price" >
                    <template #tab>
                        <a-dropdown>
                            <span> 价格 <DownOutlined /> </span>
                            <template #overlay>
                                <a-menu @click="handleMenuClick">
                                    <a-menu-item key="asc">
                                        <ArrowUpOutlined />
                                        从低到高
                                    </a-menu-item>
                                    <a-menu-item key="desc">
                                        <ArrowDownOutlined />
                                        从高到低
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </template>
                    <ItemList :itemList="itemList" />
                </a-tab-pane>

            </a-tabs>

        </div>
    </a-layout-content>
</template>
<script setup>
import { useRoute,useRouter } from 'vue-router';
import ItemList from '@/components/search/ItemList.vue'
import { DownOutlined, ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons-vue';
import {invokeSearchItems, invokeCategorySearchItems} from '@/api/item';
import { onMounted,reactive,ref,computed,h} from 'vue';
import ItemCard from '@/components/item/ItemCard.vue';
import Logo from '@/components/home/Logo.vue';
const defaultSortField="default";
const route = useRoute();
const router = useRouter();
const itemList = ref([]);
const sortField = ref(defaultSortField);
let searchValue = ref(route.query.q);
let sortOrder = "asc";

const onSortTabChange = () => {
    init();
}

const handleMenuClick = e => {
    sortField.value = 'price';
    sortOrder = e.key;
    onSortTabChange();
};

/** 修改url参数，并搜索商品 */
const onSearch = function() {
    sortField.value = defaultSortField;
    sortOrder = null;
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
    }
}
/** 搜索商品 */
const search = function() {
    //根据关键词查询
    invokeSearchItems({
        keyword:searchValue.value,
        sortField:sortField.value,
        sortOrder:sortOrder
    }).then(result => {
        renderItems(result);
    });
}

const init = function() {
    if (route.query.categoryId) {
        //根据类目id查询
        invokeCategorySearchItems({
            categoryId: route.query.categoryId,
            sortField:  sortField.value,
            sortOrder:  sortOrder
        }).then(result => {
            renderItems(result);
        });
    } else {
        search();
    }
}

onMounted(()=> {
    init();
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