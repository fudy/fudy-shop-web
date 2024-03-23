<template>
    <a-card class="container">
        <a-descriptions>
            <a-descriptions-item label="实付款" :span="3"><span class="price">¥3200</span></a-descriptions-item>
            <a-descriptions-item label="寄送至" :span="3">上海市徐汇区 xx小区xxx编号 138xxxxxxxx</a-descriptions-item>
            <a-descriptions-item label="收货人" :span="3">张三 138xxxxxxxx</a-descriptions-item>
        </a-descriptions>
    </a-card>
</template>
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