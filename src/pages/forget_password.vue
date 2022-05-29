<template>
   <div class="bk"> 
       <ForgetPassword class="fp"/>
   </div>
</template>
<script setup>
import ForgetPassword from "../components/ForgetPassword.vue"
</script>
<style scoped>
.bk {
   height:700px;
   background-image: url('../assets/register.png');
   background-repeat:repeat;
}
.fp {
    position: absolute;
    left: 35%; 
    top: 10%;
}
</style>