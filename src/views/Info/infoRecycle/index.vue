<template>
  <div>
    <div v-show="num===1">
      <recycle-one/>
      <info-next  @click="changeBtn(2)" />
    </div>
    <div v-show="num===2">
      <info-pre  @click="changeBtn(1)" />
      <recycle-two/>
      <info-next  @click="changeBtn(3)" />
    </div>
    <div v-show="num===3">
      <recycle-three/>
      <info-pre  @click="changeBtn(2)" />
    </div>
  </div>
</template>

<script>
import recycleOne from "@/views/Info/infoRecycle/recycleOne";
import recycleTwo from "@/views/Info/infoRecycle/recycleTwo";
import recycleThree from "@/views/Info/infoRecycle/recycleThree";
import infoNext from "@/components/myInfo/infoNext";
import infoPre from "@/components/myInfo/infoPre";
import {ref} from 'vue'
export default {
  components:{
    recycleOne,recycleTwo,recycleThree,
    infoNext,infoPre
  },
  setup(){
    let num=ref(1)
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
