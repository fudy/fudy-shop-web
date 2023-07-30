<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
            <span >
                <LikeOutlined style="cursor:pointer" @click="like(item)" :class="{like:item.likeStyle}"/> {{item.likeNum}}
            </span>
        </template>
        <a-list-item-meta >
            <template #description>
                <a-rate :value="item.star" disabled/> {{item.createTime}} 
            </template>
          <template #title>
              {{ item.username }}
          </template>
          <template #avatar><a-avatar :src="item.avatar" /></template>
        </a-list-item-meta>
            
            {{ item.content }}
            <div style="margin-top:10px">
                <span v-for="(url,index) in item.imageList" :key="index" style="margin-right:10px;cursor: pointer">
                    <a-image :width="80" :height="80" :src="url" 
                            /> 
                </span>
            </div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup>
import { LikeOutlined } from '@ant-design/icons-vue';
import { onMounted,reactive,ref} from 'vue';
import {invokeGetItemFeedbackList, invokeLikeItemFeedback} from '../../api/item';
import { useRoute } from 'vue-router';
const route = useRoute();
const listData = ref([]);
const itemId = ref();

const pagination = {
    current: 1,
    total: listData.length,
    showTotal: total => `总共 ${total} 条`,
    pageSizeOptions: ['10','20','50'],
    showSizeChanger:true,
    pageSize: 10,
    onChange : (page, size) => {
      pagination.current = page;
      pagination.pageSize = size;
      getItemFeedbackList();
    }
};


const getItemFeedbackList = (itemId) => {
  invokeGetItemFeedbackList({itemId, current:pagination.current, pageSize:pagination.pageSize}, (res) => {
    if(res.success) {
      listData.value = [...res.data];
      pagination.total=res.total;
    }
  },(err) => {
    console.log(err);
  })
}

const like = (item) => {
  invokeLikeItemFeedback(item.id, itemId.value, (res)=> {
    if (res.success) {
      if(res.data>0) {
        item.likeStyle=true;
      } else {
        item.likeStyle=false;
      }
      item.likeNum += res.data;
    }
  });
}

onMounted(()=> {
  itemId.value = route.query.id;
  getItemFeedbackList(itemId.value);
})
</script>

<style scoped>
.like {
  color: red;
}
</style>