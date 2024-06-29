<template>
<h4 style="text-align:left;margin-bottom:20px">确认订单信息</h4>
<div class="container">
  <a-descriptions  bordered>
    <a-descriptions-item label="商品名称" :span="2">
      <a-avatar shape="square" :src="orderInfo.image" :size="48" /> {{orderInfo.title}}
    </a-descriptions-item>
    <a-descriptions-item label="规格">{{orderInfo.sku}}</a-descriptions-item>
    <a-descriptions-item label="优惠" :span="2">无</a-descriptions-item>
    <a-descriptions-item label="配送方式">顺丰配送，快递免邮，23:59前付款，预计24小时内发货，承诺明天送达</a-descriptions-item>
    <a-descriptions-item label="单价">{{orderInfo.price}}</a-descriptions-item>
    <a-descriptions-item label="数量">{{orderInfo.amount}}</a-descriptions-item>
    <a-descriptions-item label="小计">{{orderInfo.price * orderInfo.amount}}</a-descriptions-item>
    <a-descriptions-item label="留言" :span="2" size="large">
      <a-input v-model:value="note" placeholder="选填：填写和卖家沟通确认后的内容" />
    </a-descriptions-item>
  </a-descriptions>
</div>
</template>
<script setup>
import {useOrdersStore} from '@/stores/order';
import { onMounted,reactive,ref, toRaw} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const emit = defineEmits(['inited']);
const route = useRoute();
const ordersStore = useOrdersStore();
let orderInfo = reactive({});
const note = ref();

const initOrderInfo = (orderId) => {
  if (orderId) {
    const order = ordersStore.getOrderById(orderId);
    Object.assign(orderInfo, order);
    //向父组件发送事件，传递数据
    emit('inited', orderInfo);
  }
}

const getOrderNote = () => {
  return note.value;
}

onMounted(()=> {
    initOrderInfo(route.query.orderId);
});

defineExpose({
    getOrderNote
});

</script>
<style scoped>
.container {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
}
</style>