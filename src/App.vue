<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
 
<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
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