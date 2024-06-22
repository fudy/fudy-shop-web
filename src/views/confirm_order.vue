<template>
    <a-layout>
        <HomePageHeader />
            <CenterLayout>
                <div class="container">
                    <div class="logo">
                        <Logo />
                    </div>
                    <AddressList @update="(address) => updateAddress(address)" />
                    <OrderInfo @inited="(order) => initOrderInfo(order)"/>
                    <div class="summary">
                        <OrderSummary :price="price" :address="address" :receiver="receiver"/>
                    </div>
                    <a-button type="primary" class="submit" size="large" @click="placeOrder">提交订单</a-button>

                </div>
            </CenterLayout>
        <HomePageFooter />
  </a-layout>
</template>
<script setup>
  import CenterLayout from '@/components/CenterLayout.vue';
  import HomePageHeader from '@/components/home/HomePageHeader.vue';
  import HomePageFooter from '@/components/home/HomePageFooter.vue';
  import AddressList from '@/components/order/address_list.vue';
  import { onMounted,reactive,ref, toRaw} from 'vue';
  import Logo from '@/components/home/Logo.vue';
  import OrderInfo from '@/components/order/order_info.vue';
  import OrderSummary from '@/components/order/order_summary.vue';
  const price = ref();
  const address = ref();
  const receiver = ref();
  const orderInfo = reactive({});

  const initOrderInfo = (order) => {
      debugger;
      Object.assign(orderInfo, order);
      if(order.amount && order.price) {
        const totalPrice = parseInt(order.amount) * parseFloat(order.price);
        price.value = totalPrice.toFixed(2); //价格保留2位小数
      }
  }

  const updateAddress = (addr) => {
      receiver.value = `${addr.receiver} ${addr.phone}`;
      address.value = `${addr.city}${addr.district}${addr.address}`;
      if (addr.province != addr.city) { //考虑上海，北京这种省和市一样的情况
          address.value = addr.province + address.value;
      }
  }

  const placeOrder = () => {
      console.log(orderInfo);
  }

</script>

<style scoped>
.container {
    width: 1400px; 
}
.logo {
    text-align: left;
    margin: 20px;
}
.summary {
    margin-top: 10px;
    float: right;
    clear: both;
}
.submit {
    margin-top: 10px;
    border-radius: 0px;
    width: 150px;
    float: right; 
    clear:both;
}
</style>