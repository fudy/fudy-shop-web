<template>
    <a-layout-content class="my-layout-content">
        <div style="margin-top:30px;width:1100px">
            <a-row  :gutter="100" type="flex" justify="start" align="middle">
                <a-col :offset="4">
                    <ImageMock width="200px" height="80px" bgcolor="#eee" >网站LOGO</ImageMock>
                </a-col>
                <a-col flex="auto">
                    <a-row>
                        <a-input-search v-model:value="value" placeholder="飞天茅台"
                                enter-button="搜索"
                                size="large"
                                @search="onSearch"
                        />
                        <s-space class="search-text">
                            <span>酒水饮料 </span> 
                            <span>女装</span>
                            <span>男装</span>      
                            <span>美装 </span> 
                            <span>女鞋 </span> 
                            <span>男鞋 </span> 
                            <span>手机 </span> 
                            <span>家电</span> 
                            <span>文具</span>
                        </s-space>
                    </a-row>
                </a-col>
            </a-row>
        </div>
        <div style="background-color:#eaeaea;margin-top:5px;padding:20px 40px;">
            <div style="background-color:white;border-radius:20px;padding:20px">
                <div >
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
                <div>
                    <h1>猜你喜欢</h1>
                      <a-list :grid="{ gutter: 10, column:3 }" :data-source="itemList">
                        <template #renderItem="{ item }">
                            <a-list-item>
                                <HomePageItem :price="item.price" :title="item.title"/>
                            </a-list-item>
                        </template>
                    </a-list>
                    
                </div>
            </div>
        </div>
</a-layout-content>
</template>
<script setup>
import  ImageMock  from '../ImageMock.vue';
import HomePageUserInfo from '../home/HomePageUserInfo.vue';
import HomePageAd from '../home/HomePageAd.vue';
import HomePageCategory from '../home/HomePageCategory.vue';
import HomePageItem from '../home/HomePageItem.vue';

import { onMounted,reactive,ref} from 'vue';
const itemList = [
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥1499'},
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥2689'},
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥2599'},
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥2299'},
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥2689'},
    {title : '【正品保障】贵州茅台酒 53度飞天茅台500ml 酱香型白酒',price:'¥2599'}
]
let value = ref("");
function onSearch() {
    //TODO
}
</script>
<style scoped>
.my-layout-content {
  background-color: #ffffff;
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
</style>