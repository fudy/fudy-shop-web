<template>
  <h4 style="text-align: left;margin-bottom:20px">选择收货地址</h4>
  <a-list :grid="{ gutter: 8, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item style="padding:0px">
        <a-card :title="item.title"  :class="{'selectedAddresss': item.selected}" style="cursor:pointer" @click="setSelectedAddress(item)">
            <template #extra>
              <CheckSquareOutlined v-if="item.selected"/>
              <BorderOutlined v-else/>
            </template>
            <template #title>
                {{item.province}}{{item.city}}({{item.receiver}})
            </template>
            {{item.district}} {{item.address}} {{item.phone}}
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup>
import { onMounted,reactive,ref} from 'vue';
import { CheckSquareOutlined , BorderOutlined} from '@ant-design/icons-vue';
import * as UserApi from '@/api/user';
const emit = defineEmits(['update']);

const data = ref([]);

//设置默认地址为选中地址
const setDefaultSelectedAddress = function() {
    for(let addr of data.value) {
      if (addr.defaultAddress) { //默认地址
        addr.selected = true;
        emit("update", addr);
      }
    }
}

//选中地址
const setSelectedAddress = function(address) {
    emit("update", address);
    for(let addr of data.value) {
      addr.selected = addr == address ? true : false;
    }
}

onMounted(() => {
  UserApi.getUserAddressList().then(result => {
    if (result.data.success) {
        data.value = result.data.data;
        setDefaultSelectedAddress();
    }
  })
});



</script>
<style scoped>
.selectedAddresss {
  border-width: 3px;
  border-color: red;
  border-style: dashed;
  background-color: #ffe;
}

.address {
  cursor: pointer;
}

</style>