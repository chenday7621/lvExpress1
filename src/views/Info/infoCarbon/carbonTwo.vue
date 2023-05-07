<template>
  <div>
    <div>
      <left-top/>
    </div>
    <div>
      <left-bot/>
    </div>
    <div>
      <right-top/>
    </div>
    <div>
      <right-bot/>
    </div>
    <myOxy/>
  </div>
</template>

<script>
import leftTop from "@/components/myCarbon/twoPage/leftTop";
import leftBot from "@/components/myCarbon/twoPage/leftBot";
import rightTop from "@/components/myCarbon/twoPage/rightTop";
import rightBot from "@/components/myCarbon/twoPage/rightBot";
import myOxy from "@/components/myCarbon/twoPage/myOxy";
export default {
  components:{
    leftTop,leftBot,
    rightTop,rightBot,
    myOxy
  }
};
</script>

<style scoped>
/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
