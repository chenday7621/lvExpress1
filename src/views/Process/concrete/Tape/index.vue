<template>
<div>
  <bg/>
  <div id="top">
    <back-know/>
    <span>包装快递材料——胶带</span>
      <div id="nav">
        <ul>
          <li @click="change(1)"><img :src="require(`@/assets/imgs/knowle/${options[0]}.png`)" alt=""></li>
          <li @click="change(2)"><img :src="require(`@/assets/imgs/knowle/${options[1]}.png`)" alt=""></li>
          <li @click="change(3)"><img :src="require(`@/assets/imgs/knowle/${options[2]}.png`)" alt=""></li>
        </ul>
      </div>
  </div>
  <div v-if="num==1">
    <tapeIndex/>
    <div id="fot">
      <nextpage @click="change(2)"/>
    </div>
  </div>
  <div v-else-if="num==2">
    <tape-catogery/>
    <div id="fot">
      <prepage @click="change(1)"/>
      <nextpage @click="change(3)"/>
    </div>
  </div>
  <div v-else="num==3">
    <tape-analysis/>
    <div id="fot">
      <prepage @click="change(2)"/>
    </div>
  </div>
</div>
</template>

<script>
import {ref,reactive} from 'vue'
import backKnow from "@/components/knowle/backKnow";
import nextpage from "@/components/knowle/nextpage";
import bg from '@/components/knowle/bg'
import tapeIndex from "@/components/knowle/tape/tapeIndex";
import TapeCatogery from "@/components/knowle/tape/tapeCatogery";
import tapeAnalysis from "@/components/knowle/tape/tapeAnalysis";
import Prepage from "@/components/knowle/prepage";
export default {
  name: "index",
  components:{
    Prepage,
    TapeCatogery,backKnow,nextpage,bg,tapeIndex,tapeAnalysis
  },
  setup(){
    let num=ref(1)
    const options=reactive(['selected','unselected','unselected'])
    function change(n){
      num.value=n
      console.log(num.value);
      for (let i=0;i<3;i++){
        options[i]='unselected'
      }
      options[num.value-1]='selected'
    }
    return{
      num,change,options
    }
  }
};
</script>

<style scoped lang="less">

li{
  list-style: none;
  img{
    width: 35px;
    height: 35px;
  }
}
ul{
  display: flex;
  flex-direction: row;
}

#mid{
  display: flex;
  flex-direction: row;
}
*{
  //border: 1px solid red;
  margin: 0;
  padding: 0;
  color: #dddddd;
}
#nav{
  display: inline-block;
}
#top{
  padding-top: 30px;
  height: 50px;
  #nav{
    position: fixed;
    right: 5%;
  }
  span{
    position: fixed;
    right: 14%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 25px;
    line-height: 45px;
  }

}
</style>
