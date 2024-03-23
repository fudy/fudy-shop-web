<template>
  <h4 style="text-align: left;margin-bottom:20px">选择收货地址</h4>
  <a-list :grid="{ gutter: 8, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item style="padding:0px">
        <a-card :title="item.title">
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
const data = [
  {
    title: '上海市（张三收）',
    province: '上海',
    city: '上海市',
    district: '徐汇区',
    street: '徐家汇',
    address: 'xx小区xxx编号',
    phone: '138xxxxxxxx',
    receiver: '张三'
  },
  {
    title: '江苏南京（李四收）',
    province: '江苏省',
    city: '南京市',
    street: '',
    address: 'xx小区xxx编号',
    phone: '138xxxxxxxx',
    receiver: '李四'
  },
  {
    title: '浙江杭州（王五收）',
    province: '浙江省',
    city: '杭州市',
    street: '',
    address: 'xx小区xxx编号',
    phone: '138xxxxxxxx',
    receiver: '王五'
  },
  {
    title: '北京市（赵六收）',
    province: '北京',
    city: '北京市',
    street: '',
    address: 'xx小区xxx编号',
    phone: '138xxxxxxxx',
    receiver: '赵六'
  },
  {
    title: '广东广州（孙七收）',
    province: '广东省',
    city: '广州市',
    street: '',
    address: 'xx小区xxx编号',
    phone: '138xxxxxxxx',
    receiver: '孙七'
  },
];
</script>