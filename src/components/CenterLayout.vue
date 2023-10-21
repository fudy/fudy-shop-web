<template>
  <div class="layout">
      <div class="container"> 
        <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.layout{
    background-color:#eaeaea;
    display: flex; 
    justify-content: center;
}
.container {
    min-width: 1000px;
}
</style>