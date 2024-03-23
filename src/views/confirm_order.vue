<template>
    <a-layout>
        <HomePageHeader />
            <CenterLayout>
                <div class="container">
                    <div class="logo">
                        <Logo />
                    </div>
                    <AddressList />
                    <OrderInfo />
                    <div class="summary">
                        <OrderSummary />
                    </div>
                    <a-button type="primary" class="submit" size="large">提交订单</a-button>

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
  import Logo from '@/components/home/Logo.vue';
  import OrderInfo from '@/components/order/order_info.vue';
  import OrderSummary from '@/components/order/order_summary.vue';
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