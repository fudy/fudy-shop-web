<template>
    <div :style="myClass">
      <slot></slot>
    </div>
</template>
<script setup>
import { reactive} from 'vue';

const props = defineProps({
  height: String,
  width:String,
  color:String,
  bgcolor: String
})
const myClass = reactive({
    'height' : props.height,
    'width' : props.width,
    'color' : props.color,
    'text-align' : 'center',
    'line-height': props.height,
    'background-color': props.bgcolor
})

</script>