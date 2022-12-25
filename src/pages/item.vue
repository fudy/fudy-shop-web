<template>
  <a-layout>
    <HomePageHeader />
    <ItemDetailContent />
    <HomePageFooter />
  </a-layout>
</template>
<script setup>
  import HomePageHeader from '../components/home/HomePageHeader.vue'
  import ItemDetailContent from '../components/item/ItemDetailContent.vue'
  import HomePageFooter from '../components/home/HomePageFooter.vue'
</script>
<style scoped>
</style>