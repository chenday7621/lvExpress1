<template>
  <div>
    <div v-show="num===4">
      <carbon-one/>
      <info-next  @click="changeBtn(5)" />
    </div>
    <div v-show="num===5">
      <info-pre  @click="changeBtn(4)" />
      <carbon-two/>
      <info-next  @click="changeBtn(6)" />
    </div>
    <div v-show="num===6">
      <carbon-three/>
      <info-pre  @click="changeBtn(5)" />
    </div>
  </div>
</template>

<script>
import carbonOne from "@/views/Info/infoCarbon/carbonOne";
import carbonTwo from "@/views/Info/infoCarbon/carbonTwo";
import carbonThree from "@/views/Info/infoCarbon/carbonThree";
import infoNext from "@/components/myInfo/infoNext";
import infoPre from "@/components/myInfo/infoPre";
import {ref} from 'vue'
export default {
  components:{
    carbonOne,carbonTwo,carbonThree,
    infoNext,infoPre
  },
  setup(){
    let num=ref(4)
    function changeBtn(n){
      num.value=n;
    }
    return{
      num,changeBtn
    }
  }
};
</script>

<style scoped>
</style>
