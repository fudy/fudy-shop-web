<template>
    <a-card class="container">
        <a-descriptions>
            <a-descriptions-item label="实付款" :span="3"><span class="price">¥{{props.price}}</span></a-descriptions-item>
            <a-descriptions-item label="寄送至" :span="3">{{props.address}}</a-descriptions-item>
            <a-descriptions-item label="收货人" :span="3">{{props.receiver}}</a-descriptions-item>
        </a-descriptions>
    </a-card>
</template>
<script setup>
const props = defineProps({
  price: String,
  address: String,
  receiver: String
})

</script>
<style scoped>
.container {
    width: 300px !important;
    border-radius: 0px;
    border-color: rgb(252, 75, 75);
    border-width: 2px;
    text-align: left;
}
.price {
    font-size: 24px;
    line-height: 30px;
    color: red;
}
</style>