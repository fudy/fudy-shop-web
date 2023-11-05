<template>
  <a-layout>
    <HomePageHeader />
    <CenterLayout>
      <ItemDetailContent />
    </CenterLayout>
    <HomePageFooter />
  </a-layout>
</template>
<script setup>
  import CenterLayout from '@/components/CenterLayout.vue';
  import HomePageHeader from '@/components/home/HomePageHeader.vue';
  import ItemDetailContent from '@/components/item/ItemDetailContent.vue';
  import HomePageFooter from '@/components/home/HomePageFooter.vue';
</script>
<style scoped>
</style>