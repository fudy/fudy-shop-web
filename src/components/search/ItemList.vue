<template>
    <a-list :grid="{ gutter: 10, column:3 }" :data-source="props.itemList" :pagination="pagination">
        <template #renderItem="{ item }" v-if="props.itemList.length>0">
            <a-list-item>
                <ItemCard :id="item.itemId" :price="item.price" :title="item.name" :image="item.image" />
            </a-list-item>
        </template>
    </a-list>
</template>
<script setup>
import { onMounted,reactive,ref,computed} from 'vue';
import ItemCard from '@/components/item/ItemCard.vue';
const props = defineProps(['itemList', 'pageSize']);
let total = computed(() => itemList.length);
//分页配置
const pagination = {
  pageSize: props.pageSize || 50,
  showQuickJumper: true
};

</script>