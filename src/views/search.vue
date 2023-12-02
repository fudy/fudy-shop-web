<template>
    <a-layout>
        <HomePageHeader />
        <CenterLayout>
            <SearchContent />
        </CenterLayout>
        <HomePageFooter />
    </a-layout>
</template>
<script setup>
  import CenterLayout from '@/components/CenterLayout.vue';
  import HomePageHeader from '@/components/home/HomePageHeader.vue';
  import HomePageFooter from '@/components/home/HomePageFooter.vue';
  import SearchContent from '@/components/search/SearchContent.vue';

</script>