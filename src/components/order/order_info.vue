<template>
<h4 style="text-align:left;margin-bottom:20px">确认订单信息</h4>
<div class="container">
  <a-descriptions  bordered>
    <a-descriptions-item label="商品名称" :span="2">
      <a-avatar shape="square" src="http://localhost:9000/image/1426060892-992085769mt.jpg" :size="48" /> 茅台壬寅虎年生肖纪念酒53度 500ml 单瓶装酱香型白酒
    </a-descriptions-item>
    <a-descriptions-item label="规格">500ml; 单瓶装</a-descriptions-item>
    <a-descriptions-item label="优惠" :span="2">无</a-descriptions-item>
    <a-descriptions-item label="配送方式">顺丰配送，快递免邮，23:59前付款，预计24小时内发货，承诺明天送达</a-descriptions-item>
    <a-descriptions-item label="单价">3200</a-descriptions-item>
    <a-descriptions-item label="数量">1</a-descriptions-item>
    <a-descriptions-item label="小计">3200</a-descriptions-item>
  </a-descriptions>
</div>
</template>
<style scoped>
.container {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
}
</style>