<template>
  <a-config-provider :locale="zh_CN">
    <router-view></router-view>
  </a-config-provider>
</template>
 
<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
export default {
  name: 'App',
  data() {
    return {
      zh_CN
    };
  },
  components: {
  }
}
</script>
 
<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>