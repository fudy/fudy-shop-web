<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions>
            <span>
                <LikeOutlined /> {{item.like}}
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
import {ref } from 'vue';
debugger;
const listData = [];
for (let i = 1; i < 5; i++) {
  listData.push({
    username: `匿名**${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    createTime: `${i}小时前`,
    like: 130+i,
    star: 4,
    imageList:[
        "http://localhost/image/1426060892226983729wlypw.jpg",
        "http://localhost/image/1426060892-760432403wly.jpg",
        "http://localhost/image/1426060892-992085769mt.jpg"
    ],
    content: '包装很细心，外观完好。估计还是真品'+i,
  });
}

const pagination = {
    onChange: page => {
    console.log(page);
    },
    pageSize: 30,
};

</script>