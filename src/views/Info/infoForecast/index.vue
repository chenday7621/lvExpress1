<template>
  <div class="main">
    <div class="chart" v-show="num===7">
      <forecast-one/>
      <info-next  @click="change(8)" />
    </div>
    <div class="chart" v-show="num===8">
      <info-pre @click="change(7)" />
      <forecast-two/>
      <info-next  @click="change(9)" />
    </div>
    <div class="chart" v-show="num===9">
      <info-pre @click="change(8)" />
      <forecast-three/>
    </div>
  </div>
</template>

<script>
import forecastOne from "@/views/Info/infoForecast/forecastOne";
import forecastTwo from "@/views/Info/infoForecast/forecastTwo";
import forecastThree from "@/views/Info/infoForecast/forecastThree";
import infoNext from "@/components/myInfo/infoNext";
import infoPre from "@/components/myInfo/infoPre";
import {ref} from 'vue'
export default {
  name: "infoForecast",
  components:{
    forecastOne,forecastTwo,forecastThree,
    infoNext,infoPre
  },
  setup(){
    let num=ref(7)
    function change(n){
      num.value=n
    }
    return{
      num,change
    }
  }
};
</script>

<style scoped lang="less">
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

//*{
//  border: 1px solid red;
//}
</style>
