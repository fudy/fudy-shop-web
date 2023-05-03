<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData" @change="onChange">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
            <span>
                <LikeOutlined /> {{item.likeNum}}
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
import {invokeGetItemFeedbackList} from '../../api/item';

const listData = ref([]);

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

const onChange = (pag, filters, sorter) => {
  debugger;
  pagination.current = pag.current;
  pagination.pageSize = pag.pageSize;
  getItemFeedbackList();
}

const getItemFeedbackList = () => {
  invokeGetItemFeedbackList({itemId:1, current:pagination.current, pageSize:pagination.pageSize}, (res) => {
    if(res.success) {
      listData.value = [...res.data];
      pagination.total=res.total;
    }
  },(err) => {
    console.log(err);
  })
}

onMounted(()=> {
  getItemFeedbackList();
})
</script>