<template>
  <a-layout>
    <HomePageHeader />
    <CenterLayout>
      <HomePageContent ref="content"/>
    </CenterLayout>
    <HomePageFooter />
  </a-layout>
</template>
<script setup>
  import CenterLayout from '@/components/CenterLayout.vue';
  import HomePageHeader from '@/components/home/HomePageHeader.vue'
  import HomePageContent from '@/components/home/HomePageContent.vue'
  import HomePageFooter from '@/components/home/HomePageFooter.vue'
  import { onMounted,onUnmounted,ref} from 'vue';
  //定义子组件HomePageContent的引用
  const content = ref();
  //网页真实顶部到浏览器顶部的举例，也可以理解为垂直滚动的高度
  const scrollTop = ref(0);
  //浏览器窗口的高度
  const clientHeight = ref(0);
  //整个网页的真实高度
  const scrollHeight = ref(0);
  //处理滚动
  const handleScroll = () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight;
    scrollHeight.value = document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log(`scroll top : ${scrollTop.value}, clientHeight: ${clientHeight.value}, scrollHeight: ${scrollHeight.value}`);
    if (scrollTop.value + clientHeight.value == scrollHeight.value) {
      //调用子组件，加载更多商品数据
      content.value.loadMoreItems();
    }
  }
  //防止鼠标滚动频繁地触发handleScoll,添加防抖
  const debounce = function (fn, delay) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(()=> {
        fn.apply(this, arguments);
      },delay)
    }
  }
  //vue页面加载时调用的方法
  onMounted(()=>{
    handleScroll();
    // 监听滚动事件
    window.addEventListener('wheel', debounce(handleScroll, 500)) 
  })
  //vue页面销毁时调用的方法
  onUnmounted(()=> {
    // 移除监听器
    window.removeEventListener('wheel', handleScroll) 
  })

</script>



